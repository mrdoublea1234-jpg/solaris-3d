'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useAuth } from '@clerk/nextjs';
import { supabase, createClerkSupabaseClient } from '@/lib/supabase';

export function useReelInteractions(reelId: string) {
  const { getToken, userId } = useAuth();
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

      // Check if current user liked it
      if (userId) {
        const { data: userLike } = await supabase
          .from('reel_likes')
          .select('id')
          .eq('reel_id', reelId)
          .eq('user_id', userId)
          .single();
        
        setIsLiked(!!userLike);

        const { data: userSave } = await supabase
          .from('reel_saves')
          .select('id')
          .eq('reel_id', reelId)
          .eq('user_id', userId)
          .single();
        
        setIsSaved(!!userSave);
      } else {
        setIsLiked(false);
        setIsSaved(false);
      }
    } catch (error) {
      console.error('Error fetching interactions:', error);
    } finally {
      setIsLoading(false);
    }
  }, [reelId, userId]);

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
  }, [reelId, userId, fetchInteractions]);

  const isMutating = useRef(false);

  const toggleLike = async () => {
    if (!userId) return false;
    if (isMutating.current) return true; // Ignore rapid clicks but don't trigger auth redirect

    isMutating.current = true;
    // Optimistic UI update
    const previousIsLiked = isLikedRef.current;
    setIsLiked(!previousIsLiked);
    setLikesCount((prev) => Math.max(0, prev + (!previousIsLiked ? 1 : -1)));

    try {
      const token = await getToken({ template: 'supabase' });
      if (!token) throw new Error('No Clerk token found for Supabase');
      
      const client = createClerkSupabaseClient(token);

      if (!previousIsLiked) {
        // Add like
        const { error } = await client.from('reel_likes').insert({
          reel_id: reelId,
          user_id: userId
        });
        if (error) {
          throw error;
        }
      } else {
        // Remove like
        const { error } = await client.from('reel_likes')
          .delete()
          .eq('reel_id', reelId)
          .eq('user_id', userId);
        
        if (error) {
          throw error;
        }
      }
    } catch (error: any) {
      console.error('Error toggling like:', error.message || error);
      // Revert optimistic update
      setIsLiked(previousIsLiked);
      setLikesCount((prev) => Math.max(0, prev + (previousIsLiked ? 1 : -1)));
    } finally {
      isMutating.current = false;
    }
    return true;
  };

  const isMutatingSave = useRef(false);

  const toggleSave = async () => {
    if (!userId) return false;
    if (isMutatingSave.current) return true; 

    isMutatingSave.current = true;
    const previousIsSaved = isSavedRef.current;
    setIsSaved(!previousIsSaved);

    try {
      const token = await getToken({ template: 'supabase' });
      if (!token) throw new Error('No Clerk token found for Supabase');
      
      const client = createClerkSupabaseClient(token);

      if (!previousIsSaved) {
        const { error } = await client.from('reel_saves').insert({
          reel_id: reelId,
          user_id: userId
        });
        if (error) throw error;
      } else {
        const { error } = await client.from('reel_saves')
          .delete()
          .eq('reel_id', reelId)
          .eq('user_id', userId);
        if (error) throw error;
      }
    } catch (error: any) {
      console.error('Error toggling save:', error.message || error);
      setIsSaved(previousIsSaved);
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
