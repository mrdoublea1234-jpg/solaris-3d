'use client';

import { useEffect, useState } from 'react';
import { InstallPrompt } from './InstallPrompt';
import { SplashScreen } from './SplashScreen';

export function PwaManager() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // 1. Register Service Worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(err => {
          console.error('Service Worker registration failed:', err);
        });
      });
    }

    // 2. Check if running as PWA (standalone)
    const checkStandalone = () => {
      const isStandaloneMode = window.matchMedia('(display-mode: standalone)').matches || 
                               (window.navigator as any).standalone === true;
      setIsStandalone(isStandaloneMode);
    };
    checkStandalone();

    // 3. Listen for Install Prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault(); // Prevent the mini-infobar from appearing on mobile
      setDeferredPrompt(e);
      
      // Always show after 20 seconds on every load/refresh
      const timer = setTimeout(() => {
        setShowPrompt(true);
      }, 20000);
      
      return () => clearTimeout(timer);
    };

    // If the event already fired and was cached globally
    if (typeof window !== 'undefined' && (window as any).deferredPwaPrompt) {
      handleBeforeInstallPrompt((window as any).deferredPwaPrompt);
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    
    // Show the install prompt
    deferredPrompt.prompt();
    
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
    
    // Clear prompt and close UI
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
  };

  return (
    <>
      <SplashScreen isStandalone={isStandalone} />
      <InstallPrompt 
        isOpen={showPrompt} 
        onInstall={handleInstall} 
        onDismiss={handleDismiss} 
      />
    </>
  );
}
