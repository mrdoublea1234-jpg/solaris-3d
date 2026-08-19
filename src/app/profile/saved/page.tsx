import { currentUser, auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { Bookmark, Heart } from 'lucide-react';
import Link from 'next/link';
import { supabase, createClerkSupabaseClient } from '@/lib/supabase';

export default async function SavedReelsPage() {
  const user = await currentUser();

  if (!user) {
    redirect('/');
  }

  const { getToken } = await auth();
  const token = await getToken({ template: 'supabase' });
  const supabaseClient = token ? createClerkSupabaseClient(token) : supabase;

  // Fetch all saved reels for the user
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
      
    // Sort the fetched reels to match the order of saved reelIds
    if (savedReelsData) {
      savedReels = savedReelsData.sort((a, b) => {
        return savedReelIds.indexOf(a.id) - savedReelIds.indexOf(b.id);
      });
    }
  }

  return (
    <main className="h-[100dvh] w-full bg-black text-white p-6 pt-16 md:p-12 md:pt-12 relative overflow-y-auto">
      {/* Back to Profile Button */}
      <div className="absolute top-6 left-6 z-10">
        <Link href="/profile" className="text-white/50 hover:text-white text-xs uppercase tracking-widest transition-colors font-bold">
          &larr; Back to Profile
        </Link>
      </div>

      <div className="max-w-4xl mx-auto space-y-10 pb-20 mt-4 md:mt-0">
        
        {/* Header Section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 bg-white/5 border border-white/10 py-6 px-5 md:p-8 rounded-2xl md:rounded-3xl backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30 shrink-0">
              <Bookmark className="w-5 h-5 md:w-8 md:h-8 text-blue-400" />
            </div>
            <div>
              <h1 className="text-xl md:text-4xl font-bold tracking-wider">All Saved Reels</h1>
              <p className="text-white/50 text-sm md:text-base mt-0.5 md:mt-1">{savedReels.length} reels saved</p>
            </div>
          </div>
        </section>

        {/* Saved Reels Grid */}
        <section>
          {savedReels.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {savedReels.map((reel) => (
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
            </div>
          ) : (
            <div className="text-center py-16 bg-white/5 rounded-3xl border border-white/10">
              <Bookmark className="w-12 h-12 text-white/20 mx-auto mb-4" />
              <p className="text-white/50 text-lg">You haven&apos;t saved any reels yet.</p>
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
