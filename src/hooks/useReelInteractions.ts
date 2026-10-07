'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useAuth, useUser } from '@clerk/nextjs';
import { supabase, createClerkSupabaseClient } from '@/lib/supabase';
import { getAllUserIds, getEffectiveUserId } from '@/lib/userMapping';

export function useReelInteractions(reelId: string) {
  const { getToken, userId } = useAuth();
  const { user } = useUser();
  const [likesCount, setLikesCount] = useState(0);
  const [commentsCount, setCommentsCount] = useState(0);
  const [isLikedState, _setIsLiked] = useState(false);
  const isLikedRef = useRef(false);

  const [isSavedState, _setIsSaved] = useState(false);
  const isSavedRef = useRef(false);

  const setIsLiked = useCallback((val: boolean) => {
    isLikedRef.current = val;
    _setIsLiked(val);
  }, []);

  const setIsSaved = useCallback((val: boolean) => {
    isSavedRef.current = val;
    _setIsSaved(val);
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  const fetchInteractions = useCallback(async () => {
    try {
      // Fetch likes count
      const { count: likes } = await supabase
        .from('reel_likes')
        .select('*', { count: 'exact', head: true })
        .eq('reel_id', reelId);
      
      setLikesCount(likes || 0);

      // Fetch comments count
      const { count: comments } = await supabase
        .from('reel_comments')
        .select('*', { count: 'exact', head: true })
        .eq('reel_id', reelId);
      
      setCommentsCount(comments || 0);

      // Check if current user liked or saved it
      if (userId || user) {
        const userIds = getAllUserIds(user || userId);
        const { data: userLike } = await supabase
          .from('reel_likes')
          .select('id')
          .eq('reel_id', reelId)
          .in('user_id', userIds)
          .limit(1)
          .maybeSingle();
        
        let liked = !!userLike;

        const { data: userSave } = await supabase
          .from('reel_saves')
          .select('id')
          .eq('reel_id', reelId)
          .in('user_id', userIds)
          .limit(1)
          .maybeSingle();
        
        let saved = !!userSave;

        // Check dev interactions overlay (safe and silent)
        try {
          const devRes = await fetch(`/api/reels/interactions?reelId=${encodeURIComponent(reelId)}&userId=${encodeURIComponent(userIds[0] || '')}`);
          if (devRes.ok) {
            const devData = await devRes.json();
            if (devData.liked === true) {
              if (!liked) setLikesCount(prev => prev + 1);
              liked = true;
            } else if (devData.liked === false) {
              if (liked) setLikesCount(prev => Math.max(0, prev - 1));
              liked = false;
            }
            if (devData.saved !== undefined) saved = devData.saved;
          }
        } catch {
          // ignore dev check
        }

        setIsLiked(liked);
        setIsSaved(saved);
      } else {
        setIsLiked(false);
        setIsSaved(false);
      }
    } catch (error) {
      console.error('Error fetching interactions:', error);
    } finally {
      setIsLoading(false);
    }
  }, [reelId, userId, user, setIsLiked, setIsSaved]);

  useEffect(() => {
    fetchInteractions();

    let isMounted = true;

    // Unique channel names to prevent Strict Mode collisions
    const channelName = `reel_${reelId}_${Math.random()}`;
    
    const realtimeChannel = supabase
      .channel(channelName)
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'reel_likes', filter: `reel_id=eq.${reelId}` },
        () => {
          if (isMounted) fetchInteractions();
        }
      )
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'reel_comments', filter: `reel_id=eq.${reelId}` },
        () => {
          if (isMounted) fetchInteractions();
        }
      )
      .subscribe();

    return () => {
      isMounted = false;
      supabase.removeChannel(realtimeChannel);
    };
  }, [reelId, userId, user, fetchInteractions]);

  const isMutating = useRef(false);

  const toggleLike = async () => {
    if (!userId && !user) return false;
    if (isMutating.current) return true; // Ignore rapid clicks

    isMutating.current = true;
    const previousIsLiked = isLikedRef.current;
    const nextIsLiked = !previousIsLiked;
    setIsLiked(nextIsLiked);
    setLikesCount((prev) => Math.max(0, prev + (nextIsLiked ? 1 : -1)));

    try {
      const isProduction = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY?.startsWith('pk_live_');
      let token: string | null = null;
      
      if (isProduction) {
        try {
          token = await getToken({ template: 'supabase' });
        } catch {
          token = null;
        }
      }

      const userIds = getAllUserIds(user || userId);
      const primaryId = getEffectiveUserId(user) || userId;

      if (token) {
        const client = createClerkSupabaseClient(token);
        if (nextIsLiked) {
          await client.from('reel_likes').insert({
            reel_id: reelId,
            user_id: primaryId
          });
        } else {
          await client.from('reel_likes')
            .delete()
            .eq('reel_id', reelId)
            .in('user_id', userIds);
        }
      } else {
        // Safe development mode sync
        await fetch('/api/reels/interactions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userIds,
            reelId,
            type: 'like',
            value: nextIsLiked
          })
        });
      }
    } catch (error: any) {
      console.warn('Like sync notice:', error.message || error);
    } finally {
      isMutating.current = false;
    }
    return true;
  };

  const isMutatingSave = useRef(false);

  const toggleSave = async () => {
    if (!userId && !user) return false;
    if (isMutatingSave.current) return true; 

    isMutatingSave.current = true;
    const previousIsSaved = isSavedRef.current;
    const nextIsSaved = !previousIsSaved;
    setIsSaved(nextIsSaved);

    try {
      const isProduction = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY?.startsWith('pk_live_');
      let token: string | null = null;
      
      if (isProduction) {
        try {
          token = await getToken({ template: 'supabase' });
        } catch {
          token = null;
        }
      }

      const userIds = getAllUserIds(user || userId);
      const primaryId = getEffectiveUserId(user) || userId;

      if (token) {
        const client = createClerkSupabaseClient(token);
        if (nextIsSaved) {
          await client.from('reel_saves').insert({
            reel_id: reelId,
            user_id: primaryId
          });
        } else {
          await client.from('reel_saves')
            .delete()
            .eq('reel_id', reelId)
            .in('user_id', userIds);
        }
      } else {
        // Safe development mode sync
        await fetch('/api/reels/interactions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userIds,
            reelId,
            type: 'save',
            value: nextIsSaved
          })
        });
      }
    } catch (error: any) {
      console.warn('Save sync notice:', error.message || error);
    } finally {
      isMutatingSave.current = false;
    }
    return true;
  };

  const incrementView = useCallback(async () => {
    try {
      // Check if already viewed on this device to prevent duplicate counts
      const viewedKey = `viewed_${reelId}`;
      if (localStorage.getItem(viewedKey)) {
        return;
      }
      
      // We can use the public client since the Postgres function is SECURITY DEFINER
      await supabase.rpc('increment_reel_view', { reel_id_input: reelId });
      
      localStorage.setItem(viewedKey, 'true');
    } catch (error) {
      console.error('Error incrementing view:', error);
    }
  }, [reelId]);

  return {
    likesCount,
    commentsCount,
    isLiked: isLikedState,
    isSaved: isSavedState,
    isLoading,
    toggleLike,
    toggleSave,
    incrementView
  };
}
