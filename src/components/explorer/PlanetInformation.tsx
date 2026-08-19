'use client';

import { PlanetData } from '@/data/planets';
import { useAppStore } from '@/store/useAppStore';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function PlanetInformation({ planet }: { planet: PlanetData }) {
  const { language } = useAppStore();
  const [didYouKnowOpen, setDidYouKnowOpen] = useState(false);

  const { details } = planet;

  return (
    <div className="text-white py-12 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto md:mx-0">
      <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
        <h1 className="text-5xl md:text-7xl font-light mb-4">{planet.name[language]}</h1>
        <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed mb-12">
          {details.overview[language]}
        </p>
      </motion.div>

      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
      >
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-white/40 uppercase tracking-widest text-xs mb-2">Mass</h3>
          <p className="text-lg font-medium">{details.physicalCharacteristics.mass[language]}</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-white/40 uppercase tracking-widest text-xs mb-2">Diameter</h3>
          <p className="text-lg font-medium">{details.physicalCharacteristics.diameter[language]}</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-white/40 uppercase tracking-widest text-xs mb-2">Gravity</h3>
          <p className="text-lg font-medium">{details.physicalCharacteristics.gravity[language]}</p>
        </div>
      </motion.div>

      <div className="space-y-16">
        {[
          { title: { en: 'Atmosphere', hi: 'वायुमंडल', bn: 'বায়ুমণ্ডল' }, content: details.atmosphere },
          { title: { en: 'Orbit & Rotation', hi: 'कक्षा और घूर्णन', bn: 'কক্ষপথ এবং ঘূর্ণন' }, content: details.orbitAndRotation },
          { title: { en: 'Moons', hi: 'चंद्रमा', bn: 'চাঁদ' }, content: details.moons },
          { title: { en: 'Surface', hi: 'सतह', bn: 'পৃষ্ঠ' }, content: details.surface },
          { title: { en: 'Exploration', hi: 'अन्वेषण', bn: 'অন্বেষণ' }, content: details.exploration },
        ].map((section, idx) => (
          <motion.section 
            key={idx}
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <h2 className="text-2xl font-light mb-4 pb-2 border-b border-white/10">
              {section.title[language]}
            </h2>
            <p className="text-white/70 leading-relaxed font-light text-lg">
              {section.content[language]}
            </p>
          </motion.section>
        ))}
      </div>

      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }}
        variants={sectionVariants}
        className="mt-16"
      >
        <button 
          onClick={() => setDidYouKnowOpen(!didYouKnowOpen)}
          className="w-full flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-colors text-left"
        >
          <span className="text-xl font-light">
            {language === 'en' ? 'Did You Know?' : language === 'hi' ? 'क्या आप जानते हैं?' : 'আপনি কি জানেন?'}
          </span>
          {didYouKnowOpen ? <ChevronUp /> : <ChevronDown />}
        </button>
        
        {didYouKnowOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="bg-white/5 border-x border-b border-white/10 rounded-b-2xl p-6 -mt-2 pt-8"
          >
            <ul className="list-disc pl-5 space-y-4 text-white/80 font-light">
              {details.didYouKnow.map((fact, idx) => (
                <li key={idx} className="pl-2">{fact[language]}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
