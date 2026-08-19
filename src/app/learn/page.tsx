'use client';

import { lessons } from '@/data/lessons';
import { useAppStore } from '@/store/useAppStore';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { ChevronRight, Orbit, PlayCircle, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function LearnDashboard() {
  const { language, progress } = useAppStore();

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
          <div className="text-white/50 text-xs tracking-[0.2em] uppercase">Learning Dashboard</div>
        </div>
        <LanguageSwitcher />
      </nav>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light mb-8">
          {language === 'en' ? 'Interactive Lessons' : language === 'hi' ? 'इंटरैक्टिव पाठ' : 'ইন্টারেক্টিভ পাঠ'}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => {
            const lessonProgress = progress[lesson.id] || 0;
            const isComplete = lessonProgress === 100;
            
            return (
              <div 
                key={lesson.id} 
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors relative group overflow-hidden"
              >
                {/* Progress bar background */}
                <div 
                  className="absolute bottom-0 left-0 h-1 bg-white/20 transition-all duration-1000"
                  style={{ width: `${lessonProgress}%` }}
                />
                
                <div className="flex justify-between items-start mb-4">
                  <div className="text-[10px] uppercase tracking-widest text-white/50 bg-white/5 px-2 py-1 rounded">
                    {lesson.difficulty} • {lesson.estimatedMinutes} min
                  </div>
                  {isComplete && <CheckCircle className="w-5 h-5 text-green-400" />}
                </div>
                
                <h3 className="text-2xl font-light mb-2">{lesson.title[language]}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-8 h-16 line-clamp-3">
                  {lesson.description[language]}
                </p>
                
                <Link 
                  href={`/learn/${lesson.id}`}
                  className="w-full py-3 bg-white text-black rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-white/90 transition-colors"
                >
                  <PlayCircle className="w-4 h-4" />
                  {lessonProgress > 0 && !isComplete 
                    ? (language === 'en' ? 'Continue Lesson' : language === 'hi' ? 'पाठ जारी रखें' : 'পাঠ চালিয়ে যান')
                    : (language === 'en' ? 'Start Lesson' : language === 'hi' ? 'पाठ शुरू करें' : 'পাঠ শুরু করুন')
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
