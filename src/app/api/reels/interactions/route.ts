import { NextRequest, NextResponse } from 'next/server';
import { toggleDevLike, toggleDevSave, getDevInteractions } from '@/lib/devInteractions';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const reelId = searchParams.get('reelId');
  const userId = searchParams.get('userId');

  if (!reelId || !userId) {
    return NextResponse.json({ error: 'Missing reelId or userId' }, { status: 400 });
  }

  const devData = getDevInteractions([userId]);
  
  let liked: boolean | undefined = undefined;
  if (devData.likes.includes(reelId)) liked = true;
  if (devData.unlikes.includes(reelId)) liked = false;

  let saved: boolean | undefined = undefined;
  if (devData.saves.includes(reelId)) saved = true;
  if (devData.unsaves.includes(reelId)) saved = false;

  return NextResponse.json({ liked, saved });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userIds, reelId, type, value } = body;

    if (!Array.isArray(userIds) || !reelId || !type) {
      return NextResponse.json({ error: 'Invalid parameters' }, { status: 400 });
    }

    if (type === 'like') {
      toggleDevLike(userIds, reelId, !!value);
    } else if (type === 'save') {
      toggleDevSave(userIds, reelId, !!value);
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
