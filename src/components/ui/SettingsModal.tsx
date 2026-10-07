'use client';

import { useAppStore } from '@/store/useAppStore';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Image as ImageIcon, Video, Heart, MonitorSmartphone, User, Bug, Globe } from 'lucide-react';
import Link from 'next/link';
import { SignInButton, UserButton, Show, useClerk } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export function SettingsModal() {
  const { isSettingsOpen, setSettingsOpen, language, qualityMode, setQualityMode } = useAppStore();
  const [version, setVersion] = useState<string>('1.0.0');
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const { signOut } = useClerk();

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
    if (isSettingsOpen) {
      fetchVersion();
    }
  }, [isSettingsOpen]);

  const t = {
    en: {
      settings: 'Settings',
      account: 'Account',
      login: 'Log In',
      logout: 'Log Out',
      profile: 'My Profile',
      quality: 'Graphics Quality',
      low: 'Low (Performance)',
      high: 'High (Realistic 3D)',
      reels: 'Space Reels',
      others: 'Others',
      reportBug: 'Report a Bug',
      donation: 'Support the Project',
      about: 'About Developer',
      version: 'Version',
    },
    hi: {
      settings: 'सेटिंग्स',
      account: 'खाता',
      login: 'लॉग इन',
      logout: 'लॉग आउट',
      profile: 'मेरा प्रोफाइल',
      quality: 'ग्राफिक्स क्वालिटी',
      low: 'कम (बेहतर परफॉर्मेंस)',
      high: 'अधिक (वास्तविक 3D)',
      reels: 'अंतरिक्ष रील्स',
      others: 'अन्य',
      reportBug: 'बग रिपोर्ट करें',
      donation: 'प्रोजेक्ट का समर्थन करें',
      about: 'डेवलपर के बारे में',
      version: 'संस्करण',
    },
    bn: {
      settings: 'সেটিংস',
      account: 'অ্যাকাউন্ট',
      login: 'লগ ইন',
      logout: 'লগ আউট',
      profile: 'প্রোফাইল',
      quality: 'গ্রাফিক্স কোয়ালিটি',
      low: 'কম (পারফরম্যান্স)',
      high: 'বেশি (বাস্তব 3D)',
      reels: 'স্পেস রিলস',
      others: 'অন্যান্য',
      reportBug: 'রিপোর্ট আ বাগ',
      donation: 'প্রজেক্ট সাপোর্ট করুন',
      about: 'ডেভেলপার সম্পর্কে',
      version: 'ভার্সন',
    }
  };

  const texts = t[language];

  return (
    <AnimatePresence>
      {isSettingsOpen && (
        <div className="fixed inset-0 z-[60] flex items-end md:items-center justify-center p-0 md:p-6 pointer-events-none">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSettingsOpen(false)}
            style={{ willChange: "opacity" }}
            className="absolute inset-0 bg-black/80 md:bg-black/80 pointer-events-auto"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              transition: { type: "tween", duration: 0.6, ease: "easeOut" } 
            }}
            exit={{ 
              opacity: 0, 
              y: "100%", 
              transition: { type: "tween", duration: 0.6, ease: "easeInOut" } 
            }}
            style={{ willChange: "transform, opacity" }}
            className="relative z-10 w-full max-w-md p-6 rounded-t-3xl md:rounded-2xl bg-[#111] md:bg-[#1a1a1a] border-t md:border border-white/20 text-white shadow-[0_-20px_40px_rgba(0,0,0,0.5)] md:shadow-2xl overflow-hidden pointer-events-auto mt-auto md:mt-0"
          >
            {/* Mobile Drag Handle */}
            <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto mb-6 md:hidden" />
            
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-light tracking-wider uppercase">{texts.settings}</h2>
              <button 
                onClick={() => setSettingsOpen(false)}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6 max-h-[65vh] overflow-y-auto scrollbar-hide pb-2">
              
              {/* Account Section */}
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3 text-white/80">
                    <User className="w-5 h-5" />
                    <h3 className="text-sm font-medium uppercase tracking-wider">{texts.account}</h3>
                  </div>
                  <Show when="signed-in">
                    <button 
                      onClick={() => setShowLogoutConfirm(true)}
                      className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-red-400 hover:text-red-300 transition-colors"
                    >
                      {texts.logout}
                    </button>
                  </Show>
                </div>
                
                <div className="flex items-center justify-between">
                  <Show when="signed-out">
                    <SignInButton mode="modal">
                      <button className="w-full bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-lg backdrop-blur-md transition-all text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                        <User className="w-4 h-4" />
                        {texts.login}
                      </button>
                    </SignInButton>
                  </Show>
                  <Show when="signed-in">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-3">
                        <UserButton 
                          userProfileProps={{
                            appearance: {
                              elements: {
                                rootBox: 'w-10 h-10 flex items-center justify-center scale-125'
                              }
                            }
                          }}
                        />
                        <span className="text-xs font-semibold text-white/70">Logged In</span>
                      </div>
                      <Link 
                        href="/profile" 
                        onClick={() => setSettingsOpen(false)}
                        className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all text-[10px] sm:text-xs font-bold uppercase tracking-widest"
                      >
                        {texts.profile}
                      </Link>
                    </div>
                  </Show>
                </div>
              </div>

              {/* Quality Section */}
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="flex items-center gap-3 mb-4 text-white/80">
                  <ImageIcon className="w-5 h-5" />
                  <h3 className="text-sm font-medium uppercase tracking-wider">{texts.quality}</h3>
                </div>
                
                <div className="flex bg-black/50 p-1 rounded-lg">
                  <button
                    onClick={() => setQualityMode('low')}
                    className={`flex-1 py-2 px-1 sm:px-3 text-[10px] sm:text-xs uppercase tracking-wider rounded-md transition-all duration-300 ${qualityMode === 'low' ? 'bg-white text-black font-medium shadow-sm' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
                  >
                    {texts.low}
                  </button>
                  <button
                    onClick={() => setQualityMode('high')}
                    className={`flex-1 py-2 px-1 sm:px-3 text-[10px] sm:text-xs uppercase tracking-wider rounded-md transition-all duration-300 ${qualityMode === 'high' ? 'bg-white text-black font-medium shadow-sm' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
                  >
                    {texts.high}
                  </button>
                </div>
                <p className="text-[10px] text-white/40 mt-3 ml-1">
                  * {qualityMode === 'high' ? 'High quality uses realistic 3D models but may slow down older devices.' : 'Low quality uses minimal models to ensure maximum performance.'}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <Link 
                  href="/reels" 
                  onClick={() => setSettingsOpen(false)}
                  className="flex flex-col items-center justify-center p-4 gap-2 bg-white/5 hover:bg-white/10 transition-colors rounded-xl border border-white/5"
                >
                  <Video className="w-6 h-6 text-white/70" />
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-center">{texts.reels}</span>
                </Link>

                <Link 
                  href="/others" 
                  onClick={() => setSettingsOpen(false)}
                  className="flex flex-col items-center justify-center p-4 gap-2 bg-white/5 hover:bg-white/10 transition-colors rounded-xl border border-white/5 text-blue-400 group"
                >
                  <Globe className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-white text-center">{texts.others}</span>
                </Link>
                
                <a 
                  href="https://wa.me/918145532826?text=I%20found%20a%20bug%20in%20Solaris%203D:" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 gap-2 bg-white/5 hover:bg-white/10 transition-colors rounded-xl border border-white/5 text-red-400 group"
                >
                  <Bug className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-white text-center">{texts.reportBug}</span>
                </a>

                <Link 
                  href="/support" 
                  onClick={() => setSettingsOpen(false)}
                  className="flex flex-col items-center justify-center p-4 gap-2 bg-white/5 hover:bg-white/10 transition-colors rounded-xl border border-white/5 text-pink-400 group"
                >
                  <Heart className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-white text-center">{texts.donation}</span>
                </Link>
              </div>

              {/* About Section */}
              <Link 
                href="/about-developer"
                onClick={() => setSettingsOpen(false)}
                className="bg-white/5 hover:bg-white/10 transition-colors p-4 rounded-xl border border-white/5 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <MonitorSmartphone className="w-5 h-5 text-white/70" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium uppercase tracking-wider group-hover:text-white transition-colors">{texts.about}</h3>
                    <p className="text-[10px] sm:text-xs text-white/50">Creator & Developer</p>
                  </div>
                </div>
                <div className="text-[10px] sm:text-xs font-mono text-white/30 text-right group-hover:text-white/50 transition-colors">
                  {texts.version} {version}
                </div>
              </Link>
            </div>

            {/* Logout Confirmation Popup */}
            <AnimatePresence>
              {showLogoutConfirm && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm rounded-2xl"
                >
                  <motion.div
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 20 }}
                    className="bg-[#111] p-6 rounded-xl border border-white/20 text-center max-w-[80%] shadow-2xl"
                  >
                    <h3 className="text-lg font-bold mb-2 uppercase tracking-widest">{texts.logout}?</h3>
                    <p className="text-xs text-white/60 mb-6 font-medium">Are you sure you want to log out?</p>
                    <div className="flex gap-3 justify-center">
                      <button 
                        onClick={() => setShowLogoutConfirm(false)}
                        className="px-6 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-bold uppercase tracking-wider transition-colors"
                      >
                        No
                      </button>
                      <button 
                        onClick={() => {
                          signOut();
                          setShowLogoutConfirm(false);
                        }}
                        className="px-6 py-2.5 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 border border-red-500/50 text-xs font-bold uppercase tracking-wider transition-colors"
                      >
                        Yes
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
