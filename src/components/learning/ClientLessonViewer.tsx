'use client';

import { lessons } from '@/data/lessons';
import { planets } from '@/data/planets';
import { useAppStore } from '@/store/useAppStore';
import { ExplorerScene } from '@/components/explorer/ExplorerScene';
import { ChevronLeft, ChevronRight, X, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function ClientLessonViewer({ lessonId }: { lessonId: string }) {
  const { language, updateProgress } = useAppStore();
  const lesson = lessons.find(l => l.id === lessonId);
  
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (lesson) {
      const percentage = ((currentStep + 1) / lesson.steps.length) * 100;
      updateProgress(lesson.id, percentage);
    }
  }, [currentStep, lesson, updateProgress]);

  if (!lesson) {
    notFound();
  }

  const step = lesson.steps[currentStep];
  const targetPlanet = step.targetPlanetId 
    ? planets.find(p => p.id === step.targetPlanetId)
    : planets.find(p => p.id === 'earth'); // fallback

  const nextStep = () => {
    if (currentStep < lesson.steps.length - 1) {
      setCurrentStep(s => s + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(s => s - 1);
    }
  };

  return (
    <div className="flex flex-col h-[100dvh] bg-black text-white overflow-hidden relative">
      
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 pointer-events-none">
        <div className="pointer-events-auto">
          <Link href="/learn" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 transition-colors">
            <X className="w-5 h-5" />
          </Link>
        </div>
        <div className="text-xs uppercase tracking-widest text-white/50 pointer-events-auto bg-black/50 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/10">
          {language === 'en' ? 'Step' : 'कदम'} {currentStep + 1} / {lesson.steps.length}
        </div>
      </div>

      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-70">
        {targetPlanet && (
          <ExplorerScene planet={targetPlanet} />
        )}
      </div>

      {/* Interactive Cinematic Overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-40 w-full pointer-events-none flex flex-col justify-end h-full">
        <div className="pointer-events-auto w-full bg-gradient-to-t from-black via-black/95 to-transparent pt-32 md:pt-40 pb-8 md:pb-12 px-6 md:px-12 max-h-[60dvh] md:max-h-[100dvh] overflow-y-auto scrollbar-hide">
          <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-[10px] uppercase tracking-widest text-white/50 mb-2 font-medium">
                {lesson.title[language]}
              </div>
              <h2 className="text-3xl md:text-5xl font-light mb-6">
                {step.title[language]}
              </h2>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light mb-8 max-w-2xl">
                {step.content[language]}
              </p>

              {step.statHighlight && (
                <div className="inline-block bg-white/10 border border-white/20 rounded-xl px-6 py-4 backdrop-blur-md mb-8">
                  <div className="text-xs text-white/50 uppercase tracking-widest mb-1">
                    {step.statHighlight.label[language]}
                  </div>
                  <div className="text-2xl font-light text-white">
                    {step.statHighlight.value[language]}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-4">
            <button 
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-colors ${currentStep === 0 ? 'opacity-30 cursor-not-allowed' : 'bg-white/10 hover:bg-white/20'}`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-sm font-medium uppercase tracking-widest hidden md:block">Back</span>
            </button>
            
            {currentStep < lesson.steps.length - 1 ? (
              <button 
                onClick={nextStep}
                className="flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full hover:bg-white/90 transition-colors"
              >
                <span className="text-sm font-medium uppercase tracking-widest">Continue</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <Link 
                href="/learn"
                className="flex items-center gap-2 px-8 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
              >
                <span className="text-sm font-medium uppercase tracking-widest">Finish Lesson</span>
                <CheckCircle className="w-4 h-4" />
              </Link>
            )}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
