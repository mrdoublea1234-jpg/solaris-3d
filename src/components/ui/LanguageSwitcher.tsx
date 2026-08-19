'use client';

import { useAppStore, Language } from '@/store/useAppStore';
import { motion } from 'framer-motion';

const languages: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'bn', label: 'বাংলা' },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useAppStore();

  return (
    <div className="flex bg-black/40 backdrop-blur-md border border-white/10 rounded-full p-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`relative px-3 py-1 text-xs md:text-sm font-medium transition-colors ${
            language === lang.code ? 'text-white' : 'text-white/50 hover:text-white/80'
          }`}
        >
          {language === lang.code && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-white/20 rounded-full"
              style={{ willChange: "transform" }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{lang.label}</span>
        </button>
      ))}
    </div>
  );
}
