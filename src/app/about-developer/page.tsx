'use client';

import { useAppStore } from '@/store/useAppStore';
import { motion, Variants } from 'framer-motion';
import { ArrowLeft, MonitorSmartphone, Code, Mail, Rocket, Target, Lightbulb, Compass, Cpu, Layers, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function AboutDeveloperPage() {
  const { language } = useAppStore();
  const [version, setVersion] = useState<string>('1.0.0');

  useEffect(() => {
    const fetchVersion = async () => {
      try {
        const { data, error } = await supabase
          .from('app_settings')
          .select('version')
          .eq('id', 1)
          .single();

        if (error) {
          console.error('Supabase Query Error:', error.message);
        }

        if (data && !error) {
          setVersion(data.version);
        }
      } catch (err) {
        console.error('Error fetching version:', err);
      }
    };
    fetchVersion();
  }, []);

  // Fade-in animation variants
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <main className="h-[100dvh] w-full bg-black flex flex-col items-center pt-24 pb-8 px-4 sm:px-6 md:px-8 relative overflow-y-auto overflow-x-hidden selection:bg-blue-500/30">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto relative z-10 flex flex-col gap-16">
        
        {/* Header / Nav */}
        <Link
          href="/"
          className="absolute -top-16 left-0 flex items-center gap-2 text-white/50 hover:text-white transition-colors uppercase tracking-widest text-xs font-semibold group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* 1. Hero Section */}
        <motion.section 
          initial="hidden" animate="visible" variants={fadeIn}
          className="flex flex-col items-center text-center mt-8"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mb-6 border border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.2)]">
            <MonitorSmartphone className="w-10 h-10 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">Abdul Alim</h1>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold tracking-widest uppercase text-sm mb-6">
            Developer & Creative Technologist
          </p>
          <p className="text-white/70 max-w-2xl text-lg leading-relaxed">
            A self-driven developer who enjoys turning ideas into interactive digital experiences.
          </p>
        </motion.section>

        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="flex flex-col gap-8"
        >
          {/* 2. Vision Quote */}
          <motion.section variants={fadeIn} className="w-full bg-white/[0.02] border border-white/5 p-8 rounded-3xl relative overflow-hidden text-center group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <Lightbulb className="w-8 h-8 text-yellow-400/80 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-serif italic text-white/90 mb-4">
              “Turning ideas into interactive digital experiences.”
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              My goal is to constantly learn, experiment, and create meaningful digital experiences that bridge the gap between imagination and reality.
            </p>
          </motion.section>

          {/* 3. About & Why I Built It */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.section variants={fadeIn} className="bg-white/[0.03] border border-white/10 p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">About Me</h3>
              </div>
              <p className="text-white/60 leading-relaxed">
                I have a deep passion for web development, 3D interactive experiences, AI-assisted development, modern UI/UX, and creative technology. I love building things that are not just functional, but also visually stunning and enjoyable to use.
              </p>
            </motion.section>

            <motion.section variants={fadeIn} className="bg-white/[0.03] border border-white/10 p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">Why I Built This</h3>
              </div>
              <p className="text-white/60 leading-relaxed">
                I wanted to combine space, education, 3D technology, and interactive web experiences to make exploring the Solar System more engaging and visually immersive for everyone.
              </p>
            </motion.section>
          </div>

          {/* 4. What I Build */}
          <motion.section variants={fadeIn} className="w-full">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-6 flex items-center gap-3">
              <Layers className="w-5 h-5 text-green-400" />
              What I Build
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Web Experiences', '3D Interactive Projects', 'AI-Powered Projects', 'Useful Digital Tools'].map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center justify-center text-center hover:bg-white/10 transition-colors">
                  <span className="text-white/80 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 5. Featured Project & Tech */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <motion.section variants={fadeIn} className="lg:col-span-3 bg-gradient-to-br from-blue-900/20 to-black border border-blue-500/20 p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <Sparkles className="w-6 h-6 text-blue-400 animate-pulse" />
              </div>
              <h3 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">Featured Project</h3>
              <h4 className="text-2xl font-bold text-white mb-4">Solar System 3D</h4>
              <p className="text-white/70 leading-relaxed mb-6">
                An interactive educational experience where users can explore the Solar System through stunning 3D visuals and discover detailed information about planets, moons, and other celestial objects.
              </p>
            </motion.section>

            <motion.section variants={fadeIn} className="lg:col-span-2 bg-white/[0.03] border border-white/10 p-8 rounded-3xl">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-6 flex items-center gap-3">
                <Cpu className="w-5 h-5 text-orange-400" />
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Three.js', 'Python', 'Firebase', 'Supabase', 'Tailwind'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-white/80 border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.section>
          </div>

          {/* 6. Exploring & Philosophy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.section variants={fadeIn} className="bg-white/[0.03] border border-white/10 p-8 rounded-3xl">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-6 flex items-center gap-3">
                <Compass className="w-5 h-5 text-teal-400" />
                Currently Exploring
              </h3>
              <ul className="space-y-3">
                {['Interactive 3D Web', 'AI-Assisted Development', 'Modern UI/UX', 'Web Performance', 'Creative Technology'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.section>

            <motion.section variants={fadeIn} className="bg-white/[0.03] border border-white/10 p-8 rounded-3xl flex flex-col justify-center">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-6">My Philosophy</h3>
              <div className="flex flex-wrap items-center gap-2 text-sm md:text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400 mb-4">
                <span>Learn</span> <span className="text-white/30">→</span>
                <span>Build</span> <span className="text-white/30">→</span>
                <span>Experiment</span> <span className="text-white/30">→</span>
                <span>Improve</span>
              </div>
              <p className="text-white/60 leading-relaxed">
                I believe in continuously learning through hands-on building and experimentation. Every project is an opportunity to push boundaries and discover new possibilities.
              </p>
            </motion.section>
          </div>

          {/* 7. Connect & Footer */}
          <motion.section variants={fadeIn} className="mt-8 flex flex-col items-center">
            <h3 className="text-2xl font-bold text-white mb-3">Let's Connect</h3>
            <p className="text-white/50 mb-8 text-center max-w-sm">
              Explore my other projects and follow my development journey.
            </p>
            
            <div className="flex items-center gap-4 mb-16">
              <a href="https://github.com/alimcse" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:scale-110 transition-all border border-white/10 text-white/70 hover:text-white">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:scale-110 transition-all border border-white/10 text-white/70 hover:text-white">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
              <a href="mailto:contact@example.com" className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:scale-110 transition-all border border-white/10 text-white/70 hover:text-white">
                <Mail className="w-6 h-6" />
              </a>
            </div>

            {/* Version */}
            <div className="bg-white/5 border border-white/10 rounded-full px-6 py-2 flex items-center gap-3 mb-16">
              <Code className="w-4 h-4 text-blue-400" />
              <span className="text-white/40 text-xs uppercase tracking-widest font-semibold">Version</span>
              <span className="text-white/80 font-mono text-sm">{version}</span>
            </div>

            <div className="w-full border-t border-white/10 pt-8 pb-4 text-center">
              <p className="text-white/40 text-sm mb-2">Designed & Built by <span className="text-white/70 font-medium">Abdul Alim</span></p>
              <p className="text-white/30 text-xs">Exploring technology, creativity and the possibilities of the web.</p>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </main>
  );
}
