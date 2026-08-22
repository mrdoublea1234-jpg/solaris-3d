import { currentUser, auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { History, Heart, User as UserIcon, PlaySquare, Bookmark } from 'lucide-react';
import Link from 'next/link';
import { supabase, createClerkSupabaseClient } from '@/lib/supabase';

export default async function ProfilePage() {
  const user = await currentUser();

  // If user is not logged in, redirect to home
  if (!user) {
    redirect('/');
  }

  const { getToken } = await auth();
  const token = await getToken({ template: 'supabase' });
  const supabaseClient = token ? createClerkSupabaseClient(token) : supabase;

  // Fetch user likes count
  const { count: likesCount } = await supabaseClient
    .from('reel_likes')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', user.id);

  // Fetch recently liked reels
  const { data: userLikes } = await supabaseClient
    .from('reel_likes')
    .select('reel_id')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })
    .limit(4);

  const reelIds = userLikes?.map(like => like.reel_id) || [];
  
  let likedReels: any[] = [];
  if (reelIds.length > 0) {
    const { data: reelsData } = await supabaseClient
      .from('reels')
      .select('*')
      .in('id', reelIds);
      
    // Sort the fetched reels to match the order of recently liked reelIds
    if (reelsData) {
      likedReels = reelsData.sort((a, b) => {
        return reelIds.indexOf(a.id) - reelIds.indexOf(b.id);
      });
    }
  }

  // Fetch saved reels
  const { count: savesCount } = await supabaseClient
    .from('reel_saves')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', user.id);

  const { data: userSaves } = await supabaseClient
    .from('reel_saves')
    .select('reel_id')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  const savedReelIds = userSaves?.map(save => save.reel_id) || [];

  let savedReels: any[] = [];
  if (savedReelIds.length > 0) {
    const { data: savedReelsData } = await supabaseClient
      .from('reels')
      .select('*')
      .in('id', savedReelIds);
      
    // Sort the fetched reels to match the order of recently saved reelIds
    if (savedReelsData) {
      savedReels = savedReelsData.sort((a, b) => {
        return savedReelIds.indexOf(a.id) - savedReelIds.indexOf(b.id);
      });
    }
  }

  return (
    <main className="h-[100dvh] w-full bg-black text-white p-6 pt-16 md:p-12 md:pt-12 relative overflow-y-auto">
      {/* Back to Home Button */}
      <div className="absolute top-6 left-6 z-10">
        <Link href="/" className="text-white/50 hover:text-white text-xs uppercase tracking-widest transition-colors font-bold">
          &larr; Back to Home
        </Link>
      </div>

      <div className="max-w-4xl mx-auto space-y-12 pb-20">
        
        {/* Profile Header */}
        <section className="flex flex-col md:flex-row items-center gap-8 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.1)] flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={user.imageUrl} 
              alt={user.fullName || 'User'} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left space-y-2">
            <h1 className="text-4xl font-bold tracking-wider">{user.fullName}</h1>
            <p className="text-white/50 font-mono">{user.primaryEmailAddress?.emailAddress}</p>
            <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Heart className="w-4 h-4 text-pink-500" />
                <span className="text-sm font-bold">{likesCount || 0} Likes</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Bookmark className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-bold">{savesCount || 0} Saved</span>
              </div>
            </div>
          </div>
        </section>

        {/* Reels History Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 gap-4 overflow-hidden">
            <div className="flex items-center gap-2 md:gap-3 min-w-0">
              <History className="w-5 h-5 md:w-6 md:h-6 text-white/70 flex-shrink-0" />
              <h2 className="text-lg md:text-2xl font-bold tracking-wider md:tracking-widest uppercase whitespace-nowrap truncate">Liked Reels</h2>
            </div>
            {(likesCount || 0) > 4 ? (
              <Link href="/profile/liked" className="text-xs md:text-sm text-blue-400 hover:text-blue-300 font-semibold tracking-wider transition-colors whitespace-nowrap flex-shrink-0">
                View All &rarr;
              </Link>
            ) : (
              <Link href="/reels" className="text-xs md:text-sm text-blue-400 hover:text-blue-300 font-semibold tracking-wider transition-colors whitespace-nowrap flex-shrink-0">
                Watch More &rarr;
              </Link>
            )}
          </div>

          {likedReels.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {likedReels.slice(0, (likesCount || 0) > 4 ? 3 : 4).map((reel) => (
                <Link href={`/reels/${reel.id}`} key={reel.id} className="group relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 cursor-pointer block">
                  <video 
                    src={reel.video_url} 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    muted 
                    playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                    <h3 className="text-white font-bold text-sm line-clamp-1">{reel.title}</h3>
                    <div className="flex items-center gap-1 mt-1 text-white/70">
                      <Heart className="w-3 h-3" />
                      <span className="text-xs">{reel.view_count?.toLocaleString()} Views</span>
                    </div>
                  </div>
                </Link>
              ))}
              
              {(likesCount || 0) > 4 && (
                <Link href="/profile/liked" className="group relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 cursor-pointer flex flex-col items-center justify-center transition-all hover:bg-white/5 hover:border-white/20">
                  <div className="absolute inset-0 bg-gradient-to-b from-pink-900/20 to-black/60 pointer-events-none" />
                  <div className="z-10 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-white font-bold text-lg">View More</span>
                    <span className="text-white/50 text-xs mt-1">+{(likesCount || 0) - 3} Liked Reels</span>
                  </div>
                </Link>
              )}
            </div>
          ) : (
            <div className="text-center py-12 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-white/50">You haven&apos;t liked any reels yet.</p>
              <Link href="/reels" className="inline-block mt-4 text-blue-400 font-semibold hover:text-blue-300 transition-colors">
                Explore Reels
              </Link>
            </div>
          )}
        </section>

        {/* Saved Reels Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 gap-4 overflow-hidden">
            <div className="flex items-center gap-2 md:gap-3 min-w-0">
              <Bookmark className="w-5 h-5 md:w-6 md:h-6 text-white/70 flex-shrink-0" />
              <h2 className="text-lg md:text-2xl font-bold tracking-wider md:tracking-widest uppercase whitespace-nowrap truncate">Saved Reels</h2>
            </div>
            {(savesCount || 0) > 4 && (
              <Link href="/profile/saved" className="text-xs md:text-sm text-blue-400 hover:text-blue-300 font-semibold tracking-wider transition-colors whitespace-nowrap flex-shrink-0">
                View All &rarr;
              </Link>
            )}
          </div>

          {savedReels.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {savedReels.slice(0, (savesCount || 0) > 4 ? 3 : 4).map((reel) => (
                <Link href={`/reels/${reel.id}`} key={reel.id} className="group relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 cursor-pointer block">
                  <video 
                    src={reel.video_url} 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    muted 
                    playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                    <h3 className="text-white font-bold text-sm line-clamp-1">{reel.title}</h3>
                    <div className="flex items-center gap-1 mt-1 text-white/70">
                      <Heart className="w-3 h-3" />
                      <span className="text-xs">{reel.view_count?.toLocaleString()} Views</span>
                    </div>
                  </div>
                </Link>
              ))}
              
              {(savesCount || 0) > 4 && (
                <Link href="/profile/saved" className="group relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 cursor-pointer flex flex-col items-center justify-center transition-all hover:bg-white/5 hover:border-white/20">
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/60 pointer-events-none" />
                  <div className="z-10 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                      <Bookmark className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-white font-bold text-lg">View More</span>
                    <span className="text-white/50 text-xs mt-1">+{(savesCount || 0) - 3} Saved Reels</span>
                  </div>
                </Link>
              )}
            </div>
          ) : (
            <div className="text-center py-12 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-white/50">You haven&apos;t saved any reels yet.</p>
              <Link href="/reels" className="inline-block mt-4 text-blue-400 font-semibold hover:text-blue-300 transition-colors">
                Explore Reels
              </Link>
            </div>
          )}
        </section>

      </div>
    </main>
  );
}
