import { useAppStore } from '@/store/useAppStore';

class AudioManager {
  private ambient: HTMLAudioElement | null = null;
  private isInitialized = false;
  private audioCtx: AudioContext | null = null;

  init() {
    if (this.isInitialized || typeof window === 'undefined') return;
    
    // Prevent Next.js HMR from creating multiple audio instances that play simultaneously
    if ((window as any).__solaris_ambient_audio) {
      this.ambient = (window as any).__solaris_ambient_audio;
    } else {
      this.ambient = new Audio('/audio/ambient.m4a');
      this.ambient.loop = true;
      this.ambient.volume = 0.25;
      (window as any).__solaris_ambient_audio = this.ambient;
    }

    // Initialize Web Audio Context for instant SFX
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (AudioContext) {
      this.audioCtx = new AudioContext();
    }

    // Auto-unlock audio on first user interaction
    const unlockAudio = () => {
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      if (this.ambient && this.ambient.paused && useAppStore.getState().isAudioEnabled) {
        this.ambient.play().catch(() => {});
      }
      window.removeEventListener('pointerdown', unlockAudio);
      window.removeEventListener('keydown', unlockAudio);
    };

    window.addEventListener('pointerdown', unlockAudio);
    window.addEventListener('keydown', unlockAudio);

    this.isInitialized = true;
  }

  setAmbientEnabled(enabled: boolean) {
    if (!this.ambient) this.init();
    if (!this.ambient) return;

    if (enabled) {
      // Resume audio context if it was suspended (browser policy)
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      this.ambient.play().catch(() => console.warn('Audio blocked by browser. Please interact with the document.'));
    } else {
      this.ambient.pause();
    }
  }

  playClick(enabled: boolean) {
    if (!enabled) return;
    if (!this.isInitialized) this.init();
    
    if (this.audioCtx) {
      const t = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, t);
      osc.frequency.exponentialRampToValueAtTime(1400, t + 0.05);
      
      gain.gain.setValueAtTime(0.05, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
      
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      
      osc.start(t);
      osc.stop(t + 0.1);
    }
  }

  playSuccess(enabled: boolean) {
    if (!enabled) return;
    if (!this.isInitialized) this.init();
    
    if (this.audioCtx) {
      const ctx = this.audioCtx;
      const t = ctx.currentTime;
      // Play a nice sci-fi major chord arpeggio
      const freqs = [440, 554.37, 659.25, 880];
      
      freqs.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, t);
        
        const startTime = t + (i * 0.08);
        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(0.15, startTime + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.5);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start(startTime);
        osc.stop(startTime + 0.6);
      });
    }
  }

  playExplore(enabled: boolean) {
    if (!enabled) return;
    if (!this.isInitialized) this.init();
    
    if (this.audioCtx) {
      const t = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      
      // High frequency "Engage" sound (audible on mobile speakers)
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1200, t);
      osc.frequency.exponentialRampToValueAtTime(400, t + 0.2);
      
      gain.gain.setValueAtTime(0.05, t);
      gain.gain.exponentialRampToValueAtTime(0.005, t + 0.25);
      
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      
      osc.start(t);
      osc.stop(t + 0.3);
    }
  }
}

export const audioManager = new AudioManager();
