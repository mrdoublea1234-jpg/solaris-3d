import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Language = 'en' | 'hi' | 'bn';
export type PerformanceMode = 'high' | 'medium' | 'low' | 'auto';
export type QualityMode = 'low' | 'high';

interface AppState {
  // Localization & Navigation
  language: Language;
  setLanguage: (lang: Language) => void;
  selectedPlanet: string | null;
  setSelectedPlanet: (planetId: string | null) => void;
  
  // Settings
  isSettingsOpen: boolean;
  setSettingsOpen: (isOpen: boolean) => void;
  qualityMode: QualityMode;
  setQualityMode: (mode: QualityMode) => void;
  performanceMode: PerformanceMode;
  setPerformanceMode: (mode: PerformanceMode) => void;
  reducedMotion: boolean;
  setReducedMotion: (reduced: boolean) => void;

  // Educational Progress
  progress: Record<string, number>;
  updateProgress: (lessonId: string, percentage: number) => void;
  completedMissions: string[];
  completeMission: (missionId: string) => void;

  // Audio Settings
  isAudioEnabled: boolean;
  toggleAudio: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      language: 'en',
      setLanguage: (lang) => set({ language: lang }),
      
      selectedPlanet: null,
      setSelectedPlanet: (planetId) => set({ selectedPlanet: planetId }),

      isSettingsOpen: false,
      setSettingsOpen: (isOpen) => set({ isSettingsOpen: isOpen }),

      qualityMode: 'low', // Default to low for performance, as per user's current app state
      setQualityMode: (mode) => set({ qualityMode: mode }),

      performanceMode: 'auto',
      setPerformanceMode: (mode) => set({ performanceMode: mode }),
      
      reducedMotion: false,
      setReducedMotion: (reduced) => set({ reducedMotion: reduced }),

      progress: {},
      updateProgress: (lessonId, percentage) => 
        set((state) => ({
          progress: { ...state.progress, [lessonId]: Math.max(state.progress[lessonId] || 0, percentage) }
        })),

      completedMissions: [],
      completeMission: (missionId) => 
        set((state) => ({
          completedMissions: state.completedMissions.includes(missionId) 
            ? state.completedMissions 
            : [...state.completedMissions, missionId]
        })),
        
      isAudioEnabled: false,
      toggleAudio: () => set((state) => ({ isAudioEnabled: !state.isAudioEnabled }))
    }),
    {
      name: 'solaris-3d-storage',
      // We only want to persist settings and progress, not selectedPlanet which is temporary state
      partialize: (state) => ({
        language: state.language,
        qualityMode: state.qualityMode,
        performanceMode: state.performanceMode,
        reducedMotion: state.reducedMotion,
        progress: state.progress,
        completedMissions: state.completedMissions,
        isAudioEnabled: state.isAudioEnabled,
      }),
    }
  )
);
