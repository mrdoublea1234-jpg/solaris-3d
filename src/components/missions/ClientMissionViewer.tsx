'use client';

import { missions } from '@/data/missions';
import { useAppStore } from '@/store/useAppStore';
import { Scene } from '@/components/3d/Scene';
import { X, AlertCircle, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { notFound, useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAudio } from '@/hooks/useAudio';

export function ClientMissionViewer({ missionId }: { missionId: string }) {
  const router = useRouter();
  
  const { language, completeMission, selectedPlanet, setSelectedPlanet } = useAppStore();
  const { playSuccess } = useAudio();
  const mission = missions.find(m => m.id === missionId);
  
  const [currentObjIdx, setCurrentObjIdx] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizState, setQuizState] = useState<'idle' | 'correct' | 'incorrect'>('idle');
  const [feedback, setFeedback] = useState<string | null>(null);

  useEffect(() => {
    // Clear selection on mount
    setSelectedPlanet(null);
  }, [setSelectedPlanet]);

  useEffect(() => {
    if (!mission || showQuiz) return;
    
    const objective = mission.objectives[currentObjIdx];
    
    if (selectedPlanet) {
      if (selectedPlanet === objective.targetPlanetId) {
        setFeedback(objective.successMessage[language]);
        // Advance after 2 seconds
        setTimeout(() => {
          setFeedback(null);
          setSelectedPlanet(null);
          if (currentObjIdx < mission.objectives.length - 1) {
            setCurrentObjIdx(i => i + 1);
          } else {
            setShowQuiz(true);
          }
        }, 2500);
      } else {
        setFeedback(objective.hint[language]);
      }
    }
  }, [selectedPlanet, currentObjIdx, mission, showQuiz, language, setSelectedPlanet]);

  if (!mission) notFound();

  const handleQuizAnswer = (idx: number) => {
    if (idx === mission.finalQuiz.correctIndex) {
      setQuizState('correct');
      playSuccess();
      completeMission(mission.id);
    } else {
      setQuizState('incorrect');
    }
  };

  const currentObjective = mission.objectives[currentObjIdx];

  return (
    <div className="flex flex-col h-[100dvh] bg-black text-white overflow-hidden relative">
      
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>

      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 pointer-events-none">
        <div className="pointer-events-auto">
          <Link href="/missions" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 transition-colors">
            <X className="w-5 h-5" />
          </Link>
        </div>
        {!showQuiz && (
          <div className="text-xs uppercase tracking-widest text-white/50 pointer-events-auto bg-black/50 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/10">
            {language === 'en' ? 'Objective' : 'उद्देश्य'} {currentObjIdx + 1} / {mission.objectives.length}
          </div>
        )}
      </div>

      {/* Mission UI Overlay */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-2xl px-6 z-40 pointer-events-none max-h-[100dvh] overflow-y-auto scrollbar-hide py-4">
        <AnimatePresence mode="wait">
          {!showQuiz ? (
            <motion.div 
              key={`obj-${currentObjIdx}`}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl p-6 pointer-events-auto shadow-2xl"
            >
              <div className="text-[10px] uppercase tracking-widest text-blue-400 mb-2 font-medium">
                {mission.title[language]}
              </div>
              <h2 className="text-xl md:text-2xl font-light mb-4">
                {currentObjective.instruction[language]}
              </h2>
              
              {/* Feedback Alert */}
              <AnimatePresence>
                {feedback && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                    className={`mt-4 p-3 rounded-lg flex items-start gap-3 text-sm ${selectedPlanet === currentObjective.targetPlanetId ? 'bg-green-500/20 text-green-200 border border-green-500/30' : 'bg-red-500/20 text-red-200 border border-red-500/30'}`}
                  >
                    {selectedPlanet === currentObjective.targetPlanetId ? <CheckCircle className="w-5 h-5 flex-shrink-0" /> : <AlertCircle className="w-5 h-5 flex-shrink-0" />}
                    <p>{feedback}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div 
              key="quiz"
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="bg-black/90 backdrop-blur-xl border border-white/20 rounded-3xl p-8 pointer-events-auto shadow-2xl"
            >
              <div className="text-[10px] uppercase tracking-widest text-purple-400 mb-2 font-medium">
                {language === 'en' ? 'Final Challenge' : 'अंतिम चुनौती'}
              </div>
              <h2 className="text-2xl md:text-3xl font-light mb-8">
                {mission.finalQuiz.question[language]}
              </h2>

              <div className="space-y-3 mb-8">
                {mission.finalQuiz.options.map((opt, idx) => {
                  const isSelected = quizState !== 'idle';
                  const isCorrect = idx === mission.finalQuiz.correctIndex;
                  let btnClass = "bg-white/5 hover:bg-white/10 border border-white/10";
                  
                  if (isSelected) {
                    if (isCorrect) btnClass = "bg-green-500/20 border-green-500 text-green-200";
                    else btnClass = "bg-red-500/10 border-red-500/30 text-white/50 opacity-50";
                  }

                  return (
                    <button 
                      key={idx}
                      disabled={isSelected}
                      onClick={() => handleQuizAnswer(idx)}
                      className={`w-full text-left p-4 rounded-xl transition-all ${btnClass}`}
                    >
                      {opt[language]}
                    </button>
                  );
                })}
              </div>

              <AnimatePresence>
                {quizState !== 'idle' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                    <div className={`p-4 rounded-xl mb-6 ${quizState === 'correct' ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                      <p className="font-medium mb-1">
                        {quizState === 'correct' 
                          ? (language === 'en' ? 'Correct!' : 'सही!') 
                          : (language === 'en' ? 'Incorrect.' : 'गलत।')}
                      </p>
                      <p className="text-sm opacity-80">{mission.finalQuiz.explanation[language]}</p>
                    </div>
                    
                    {quizState === 'correct' ? (
                      <button onClick={() => router.push('/missions')} className="w-full py-4 bg-white text-black font-medium rounded-xl uppercase tracking-widest text-sm hover:bg-white/90">
                        {language === 'en' ? 'Complete Mission' : 'मिशन पूरा करें'}
                      </button>
                    ) : (
                      <button onClick={() => setQuizState('idle')} className="w-full py-4 bg-white/10 text-white font-medium rounded-xl uppercase tracking-widest text-sm hover:bg-white/20">
                        {language === 'en' ? 'Try Again' : 'पुनः प्रयास करें'}
                      </button>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
