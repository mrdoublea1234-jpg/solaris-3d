import { SingleReelClient } from './SingleReelClient';
import { supabase } from '@/lib/supabase';
import { redirect } from 'next/navigation';

export default async function SingleReelPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  
  const { data: reel, error } = await supabase
    .from('reels')
    .select('*')
    .eq('id', resolvedParams.id)
    .single();

  if (error || !reel) {
    console.error('Failed to fetch single reel:', error, 'ID:', resolvedParams.id);
    redirect('/profile');
  }

  return (
    <main className="w-full h-[100dvh] bg-black">
      <SingleReelClient reel={reel} />
    </main>
  );
}
