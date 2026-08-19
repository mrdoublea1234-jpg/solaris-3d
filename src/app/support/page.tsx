'use client';

import { useAppStore } from '@/store/useAppStore';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart, CheckCircle2, User, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

interface Supporter {
  id: string;
  name: string;
  amount: string;
  message?: string;
  created_at: string;
}

export default function SupportPage() {
  const { language } = useAppStore();
  const [supporters, setSupporters] = useState<Supporter[]>([]);

  useEffect(() => {
    const fetchSupporters = async () => {
      const { data } = await supabase
        .from('supporters')
        .select('*')
        .order('created_at', { ascending: false });

      if (data) {
        setSupporters(data);
      }
    };
    fetchSupporters();
  }, []);

  const t = {
    en: {
      title: 'Support the Project',
      subtitle: 'Your support helps keep Solaris 3D ad-free and continuously improving.',
      scan: 'Scan to Pay with any UPI App',
      apps: 'GPay, PhonePe, Paytm accepted',
      back: 'Back to Home',
      thankYou: 'Thank you for your generous support!',
      supporters: 'Our Supporters',
      noSupporters: 'Be the first to support!',
    },
    hi: {
      title: 'प्रोजेक्ट का समर्थन करें',
      subtitle: 'आपका समर्थन Solaris 3D को विज्ञापन-मुक्त और बेहतर बनाने में मदद करता है।',
      scan: 'किसी भी UPI ऐप से स्कैन करके भुगतान करें',
      apps: 'GPay, PhonePe, Paytm स्वीकृत हैं',
      back: 'होम पर वापस जाएं',
      thankYou: 'आपके उदार समर्थन के लिए धन्यवाद!',
      supporters: 'Our Supporters',
      noSupporters: 'Be the first to support!',
    },
    bn: {
      title: 'প্রজেক্ট সাপোর্ট করুন',
      subtitle: 'আপনার সাপোর্ট Solaris 3D-কে অ্যাড-মুক্ত এবং উন্নত করতে সাহায্য করবে।',
      scan: 'যেকোনো UPI অ্যাপ দিয়ে স্ক্যান করে পেমেন্ট করুন',
      apps: 'GPay, PhonePe, Paytm এক্সেপ্ট করা হয়',
      back: 'হোমে ফিরে যান',
      thankYou: 'আপনার চমৎকার সাপোর্টের জন্য অনেক ধন্যবাদ!',
      supporters: 'Our Supporters',
      noSupporters: 'Be the first to support!',
    }
  };

  const texts = t[language];

  return (
    <main className="h-screen w-full bg-black flex flex-col items-center pt-24 pb-16 px-4 relative overflow-y-auto overflow-x-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 blur-[100px] rounded-full pointer-events-none" />

      <Link
        href="/"
        className="absolute top-6 left-6 flex items-center gap-2 text-white/50 hover:text-white transition-colors z-10 uppercase tracking-widest text-xs font-semibold"
      >
        <ArrowLeft className="w-4 h-4" />
        {texts.back}
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center w-full max-w-md"
      >
        <div className="w-16 h-16 bg-pink-500/10 rounded-full flex items-center justify-center mb-6 border border-pink-500/20 shadow-[0_0_30px_rgba(236,72,153,0.3)]">
          <Heart className="w-8 h-8 text-pink-400" />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-4 tracking-wider uppercase">
          {texts.title}
        </h1>

        <p className="text-white/60 text-center mb-10 text-sm leading-relaxed max-w-sm">
          {texts.subtitle}
        </p>

        <div className="w-full bg-[#111] backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-3xl flex flex-col items-center shadow-2xl relative overflow-hidden">
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[100%] animate-[shimmer_3s_infinite]" />

          <div className="w-full max-w-[240px] aspect-square bg-white rounded-2xl p-2 mb-6 relative group shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
            <img
              src="/qr.jpeg"
              alt="UPI QR Code"
              className="w-full h-full object-contain relative z-10 rounded-xl"
              onError={(e) => {
                // Fallback dummy QR code if user hasn't added qr.jpg yet
                e.currentTarget.src = 'https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=upi://pay?pa=solaris@upi&pn=Solaris3D&cu=INR';
              }}
            />
          </div>

          <div className="flex flex-col items-center gap-2 w-full text-center">
            <h3 className="text-white font-medium tracking-wide uppercase text-sm">
              {texts.scan}
            </h3>
            <p className="text-white/40 text-xs">
              {texts.apps}
            </p>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 flex items-center gap-2 text-pink-400/80 text-sm font-medium mb-6 md:mb-8"
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>{texts.thankYou}</span>
        </motion.div>

        {/* Supporters List */}
        <div className="w-full bg-[#111] backdrop-blur-xl border border-white/10 p-5 md:p-8 rounded-3xl shadow-2xl relative overflow-hidden mb-4">
          {/* Shimmer effect for the box */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[100%] animate-[shimmer_3s_infinite] pointer-events-none" />
          
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <Sparkles className="w-5 h-5 text-pink-400" />
            <h2 className="text-xl font-bold text-white tracking-widest uppercase">{texts.supporters}</h2>
          </div>
          
          <div className="flex flex-col gap-3 max-h-[300px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent relative z-10">
            {supporters.length === 0 ? (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center text-white/50 text-sm italic">
                {texts.noSupporters}
              </div>
            ) : (
              supporters.map((supporter, idx) => (
                <motion.div
                  key={supporter.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  className="shrink-0 bg-white/5 hover:bg-white/10 transition-colors border border-white/10 rounded-2xl p-4 flex flex-col relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-pink-500/20 transition-colors pointer-events-none" />
                  
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center border border-pink-500/30">
                        <User className="w-4 h-4 text-pink-300" />
                      </div>
                      <h3 className="text-white font-bold tracking-wider">{supporter.name}</h3>
                    </div>
                    <span className="text-pink-400 font-bold bg-pink-500/10 px-3 py-1 rounded-full text-sm border border-pink-500/20 shadow-[0_0_15px_rgba(236,72,153,0.1)]">
                      {supporter.amount}
                    </span>
                  </div>
                  
                  {supporter.message && (
                    <p className="text-white/60 text-sm mt-1 ml-10 italic">
                      "{supporter.message}"
                    </p>
                  )}
                  <div className="text-white/30 text-[10px] mt-2 ml-10">
                    {new Date(supporter.created_at).toLocaleDateString()}
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>

      </motion.div>

      <style jsx global>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </main>
  );
}
