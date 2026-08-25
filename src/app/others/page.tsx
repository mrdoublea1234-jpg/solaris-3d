'use client';

import Link from 'next/link';
import { ChevronLeft, Globe, Star, Info } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAppStore } from '@/store/useAppStore';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { exoplanets } from '@/data/exoplanets';
import { motion } from 'framer-motion';

const NOTE_TEXT = {
  en: "Note: These Exoplanets and Stars are visual representations based on scientific data. Since they are too far away for direct imaging, no actual 3D models exist yet. However, these artistic impressions are built from current scientific theories and may share similarities with reality.",
  hi: "नोट: ये एक्सोप्लैनेट और तारे वैज्ञानिक डेटा पर आधारित दृश्य प्रस्तुतियां हैं। इतनी दूर होने के कारण कोई वास्तविक 3D मॉडल मौजूद नहीं है, लेकिन ये कलात्मक अवधारणाएं वर्तमान वैज्ञानिक सिद्धांतों पर आधारित हैं और वास्तविकता से काफी मिलती-जुलती हो सकती हैं।",
  bn: "নোট: এই এক্সোপ্ল্যানেট এবং নক্ষত্রগুলোর কোনো বাস্তব 3D মডেল এখনো তৈরি করা সম্ভব হয়নি কারণ এগুলো পৃথিবী থেকে অনেক দূরে। এগুলো মূলত বৈজ্ঞানিক ধারণা এবং তত্ত্বের ওপর ভিত্তি করে তৈরি করা একটি রূপ, তবে বাস্তবের সাথে এর কিছুটা মিল থাকতে পারে।"
};

export default function OthersPage() {
  const router = useRouter();
  const { setSettingsOpen, language } = useAppStore();

  const handleBack = () => {
    router.push('/');
  };

  return (
    <main className="h-[100dvh] overflow-y-auto overflow-x-hidden bg-black text-white p-6 md:p-12 pb-24 relative">
      {/* Background decoration */}
      <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button 
              onClick={handleBack}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors shrink-0"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div>
              <h1 className="text-lg sm:text-3xl md:text-4xl font-light tracking-widest uppercase whitespace-nowrap">Beyond <span className="font-bold">Solaris</span></h1>
              <p className="text-white/50 text-[10px] sm:text-sm tracking-wider uppercase mt-1">
                {language === 'en' ? 'Explore Exoplanets & Other Stars' : language === 'hi' ? 'एक्सोप्लैनेट्स और अन्य तारों का अन्वेषण करें' : 'এক্সোপ্ল্যানেট এবং অন্যান্য নক্ষত্র এক্সপ্লোর করুন'}
              </p>
            </div>
          </div>
          
          <div className="hidden sm:block">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile Language Switcher */}
        <div className="sm:hidden mb-8 flex justify-center">
          <LanguageSwitcher />
        </div>

        {/* Note Box */}
        <div className="mb-12 bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
          <p className="text-sm text-white/70 leading-relaxed font-light">
            <Info className="w-5 h-5 text-blue-400 inline-block align-text-bottom mr-2" />
            {NOTE_TEXT[language]}
          </p>
        </div>

        {/* List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {exoplanets.map((item) => (
            <div 
              key={item.id}
              className="bg-[#111] md:bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors ${item.type === 'Exoplanet' ? (item.id === 'kepler-186f' ? 'text-emerald-400' : 'text-blue-400') : 'text-red-400'}`}>
                  {item.type === 'Exoplanet' ? <Globe className="w-6 h-6" /> : <Star className="w-6 h-6" />}
                </div>
                <div className="text-[10px] font-mono tracking-widest text-white/40 bg-black/50 px-3 py-1 rounded-full uppercase mt-1">
                  {item.distance[language]}
                </div>
              </div>
              
              <h2 className="text-xl font-bold tracking-wider uppercase mb-1">{item.name[language]}</h2>
              <div className="text-xs text-white/50 tracking-widest uppercase mb-4">
                {item.type === 'Exoplanet' ? (language === 'en' ? 'Exoplanet' : language === 'hi' ? 'एक्सोप्लैनेट' : 'এক্সোপ্ল্যানেট') : (language === 'en' ? 'Star' : language === 'hi' ? 'तारा' : 'নক্ষত্র')}
              </div>
              
              <p className="text-sm text-white/70 leading-relaxed mb-6 h-16 overflow-hidden">
                {item.description[language]}
              </p>

              <Link href={`/others/${item.id}`} className="block w-full py-3 rounded-lg border border-white/20 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors text-center">
                {language === 'en' ? 'Explore 3D' : language === 'hi' ? '3D में देखें' : 'থ্রিডি এক্সপ্লোর করুন'}
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-white/30 text-xs tracking-widest uppercase">
            {language === 'en' ? 'More destinations will be added soon...' : language === 'hi' ? 'जल्द ही और गंतव्य जोड़े जाएंगे...' : 'শীঘ্রই আরও নতুন গ্রহ যুক্ত করা হবে...'}
          </p>
        </div>
      </motion.div>
    </main>
  );
}
