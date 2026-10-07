'use client';

import { useAudio } from '@/hooks/useAudio';

export function GlobalAudio() {
  useAudio();
  return null;
}
