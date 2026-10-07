'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Download, X } from 'lucide-react';
import { useAppStore } from '@/store/useAppStore';

interface InstallPromptProps {
  isOpen: boolean;
  onInstall: () => void;
  onDismiss: () => void;
}

export function InstallPrompt({ isOpen, onInstall, onDismiss }: InstallPromptProps) {
  const { language } = useAppStore();

  const t = {
    en: {
      title: 'Install Solaris 3D',
      desc: 'Get the best experience with full-screen immersive 3D and faster loading times.',
      notNow: 'Not Now',
      install: 'Install App'
    },
    hi: {
      title: 'Solaris 3D इंस्टॉल करें',
      desc: 'फुल-स्क्रीन 3D और तेज़ लोडिंग के साथ बेहतरीन अनुभव प्राप्त करें।',
      notNow: 'अभी नहीं',
      install: 'इंस्टॉल करें'
    },
    bn: {
      title: 'Solaris 3D ইনস্টল করুন',
      desc: 'ফুল-স্ক্রিন 3D এবং ফাস্ট লোডিং এর মাধ্যমে বেস্ট এক্সপেরিয়েন্স পেতে অ্যাপটি ইনস্টল করুন।',
      notNow: 'এখন নয়',
      install: 'ইনস্টল করুন'
    }
  };

  const texts = t[language];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed bottom-0 left-0 right-0 z-[100] flex justify-center p-4 md:p-6 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="w-full max-w-sm bg-[#111] md:bg-black/90 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-2xl pointer-events-auto"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <img src="/logo-192.png" alt="Solaris 3D Logo" className="w-10 h-10 rounded-xl shadow-lg border border-white/10 object-cover" />
                <div>
                  <h3 className="text-white font-bold tracking-wider">{texts.title}</h3>
                  <p className="text-[10px] text-white/50 uppercase tracking-widest">Web App</p>
                </div>
              </div>
              <button 
                onClick={onDismiss}
                className="text-white/50 hover:text-white transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <p className="text-xs text-white/70 mb-5 leading-relaxed">
              {texts.desc}
            </p>
            
            <div className="flex gap-3">
              <button 
                onClick={onDismiss}
                className="flex-1 py-2.5 rounded-lg border border-white/20 text-white/70 hover:text-white hover:bg-white/10 transition-colors text-xs font-bold uppercase tracking-wider"
              >
                {texts.notNow}
              </button>
              <button 
                onClick={onInstall}
                className="flex-1 py-2.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                {texts.install}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
