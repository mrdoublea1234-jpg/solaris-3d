'use client';

import { useAppStore } from '@/store/useAppStore';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Code, Mail, Rocket, Target, Lightbulb, Compass, Cpu, Layers, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function AboutDeveloperPage() {
  const { language } = useAppStore();
  const [version, setVersion] = useState<string>('1.0.0');
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);

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
          <motion.div 
            layoutId="profile-photo"
            onClick={() => setIsPhotoOpen(true)}
            className="w-24 h-24 rounded-full flex items-center justify-center mb-6 border-2 border-white/20 shadow-[0_0_40px_rgba(59,130,246,0.3)] cursor-pointer overflow-hidden relative group"
          >
            <img 
              src="/images/developer.jpg" 
              alt="Abdul Alim" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              onError={(e) => {
                // Fallback icon if image is not found
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>';
                e.currentTarget.parentElement!.className = "w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mb-6 border border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.2)] cursor-pointer hover:scale-105 transition-transform";
              }}
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" className="text-white"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
            </div>
          </motion.div>
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
              <a href="https://youtube.com/@abdulalim_87?si=vBO2IW1g7wP9198p" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:scale-110 transition-all border border-white/10 text-white/70 hover:text-[#ff0000]">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
              <a href="https://www.facebook.com/share/19hijJAa3A/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:scale-110 transition-all border border-white/10 text-white/70 hover:text-[#1877f2]">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/abdul.alim_87" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:scale-110 transition-all border border-white/10 text-white/70 hover:text-[#e1306c]">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="mailto:mrdoublea1234@gmail.com" className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:scale-110 transition-all border border-white/10 text-white/70 hover:text-[#ea4335]">
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

      <AnimatePresence>
        {isPhotoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPhotoOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 cursor-zoom-out"
          >
            <motion.img
              layoutId="profile-photo"
              src="/images/developer.jpg"
              alt="Abdul Alim"
              className="w-full max-w-[400px] aspect-square object-cover rounded-3xl shadow-[0_0_100px_rgba(59,130,246,0.2)] border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10"
              onClick={() => setIsPhotoOpen(false)}
            >
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
