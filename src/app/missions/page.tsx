'use client';

import { missions } from '@/data/missions';
import { useAppStore } from '@/store/useAppStore';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { ChevronRight, Orbit, Rocket, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function MissionsDashboard() {
  const { language, completedMissions } = useAppStore();

  return (
    <div className="h-[100dvh] overflow-y-auto bg-black text-white p-6 md:p-12">
      <nav className="flex flex-wrap items-center justify-between mb-12 gap-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 transition-colors">
              <Orbit className="text-white/70 group-hover:text-white w-5 h-5 transition-colors" />
            </div>
            <div className="hidden md:block">
              <h1 className="text-white/70 group-hover:text-white font-medium text-sm tracking-widest uppercase transition-colors">Back to Solar System</h1>
            </div>
          </Link>
          <ChevronRight className="w-4 h-4 text-white/30" />
          <div className="text-white/50 text-xs tracking-[0.2em] uppercase">Mission Control</div>
        </div>
        <LanguageSwitcher />
      </nav>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              {language === 'en' ? 'Active Missions' : language === 'hi' ? 'सक्रिय मिशन' : 'সক্রিয় মিশন'}
            </h2>
            <p className="text-white/60 text-lg font-light">
              {language === 'en' ? 'Complete objectives in the 3D environment to earn your badges.' : 'बैज अर्जित करने के लिए 3D वातावरण में उद्देश्यों को पूरा करें।'}
            </p>
          </div>
          
          <Link 
            href="/habitable-zone"
            className="px-6 py-3 bg-blue-900/40 border border-blue-500/30 text-blue-200 rounded-full hover:bg-blue-900/60 transition-colors whitespace-nowrap"
          >
            {language === 'en' ? 'View Habitable Zone Model' : 'रहने योग्य क्षेत्र मॉडल देखें'}
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {missions.map((mission) => {
            const isComplete = completedMissions.includes(mission.id);
            
            return (
              <div 
                key={mission.id} 
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors relative"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white/70" />
                  </div>
                  {isComplete && <CheckCircle className="w-6 h-6 text-green-400" />}
                </div>
                
                <h3 className="text-3xl font-light mb-3">{mission.title[language]}</h3>
                <p className="text-white/60 text-base leading-relaxed mb-8">
                  {mission.description[language]}
                </p>
                
                <Link 
                  href={`/missions/${mission.id}`}
                  className="w-full py-4 bg-white text-black rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-white/90 transition-colors uppercase tracking-widest text-sm"
                >
                  {isComplete 
                    ? (language === 'en' ? 'Replay Mission' : language === 'hi' ? 'मिशन फिर से चलाएं' : 'মিশন পুনরায় খেলুন')
                    : (language === 'en' ? 'Launch Mission' : language === 'hi' ? 'मिशन लॉन्च करें' : 'মিশন চালু করুন')
                  }
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
