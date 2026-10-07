'use client';

import { useEffect, useCallback } from 'react';
import { useAppStore } from '@/store/useAppStore';
import { audioManager } from '@/lib/audioManager';

export function useAudio() {
  const { isAudioEnabled } = useAppStore();

  // Sync ambient music state globally
  useEffect(() => {
    audioManager.setAmbientEnabled(isAudioEnabled);
  }, [isAudioEnabled]);

  const playClick = useCallback(() => {
    audioManager.playClick(isAudioEnabled);
  }, [isAudioEnabled]);

  const playSuccess = useCallback(() => {
    audioManager.playSuccess(isAudioEnabled);
  }, [isAudioEnabled]);

  const playExplore = useCallback(() => {
    audioManager.playExplore(isAudioEnabled);
  }, [isAudioEnabled]);

  return { playClick, playSuccess, playExplore };
}
