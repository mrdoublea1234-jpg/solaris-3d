'use client';

import { LanguageSwitcher } from './LanguageSwitcher';
import { Orbit, Volume2, VolumeX, Newspaper, Settings, User, X } from 'lucide-react';
import { useAppStore } from '@/store/useAppStore';
import Link from 'next/link';
import { SignInButton, UserButton, Show } from '@clerk/nextjs';
import { SettingsModal } from './SettingsModal';
import { useEffect, useState, useRef } from 'react';
import { supabase } from '@/lib/supabase';

interface Notice {
  id: string;
  title: string;
  message: string;
  link?: string;
  created_at: string;
}

export function Navbar() {
  const { language, setSelectedPlanet, isAudioEnabled, toggleAudio, setSettingsOpen } = useAppStore();
  const [notices, setNotices] = useState<Notice[]>([]);
  const [showNotices, setShowNotices] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const [debugError, setDebugError] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchNotices = async () => {
      const { data, error } = await supabase
        .from('notices')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        setDebugError(error.message);
      } else if (data) {
        setDebugError(null);
        setNotices(data);
        
        if (data.length > 0) {
          const latestNoticeDate = new Date(data[0].created_at).getTime();
          const lastReadDateStr = localStorage.getItem('last_read_notice_date');
          const lastReadDate = lastReadDateStr ? parseInt(lastReadDateStr) : 0;
          
          if (latestNoticeDate > lastReadDate) {
            setHasUnread(true);
          }
        }
      }
    };

    fetchNotices();

    // Set up Supabase Realtime subscription
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'notices' },
        (payload) => {
          const newNotice = payload.new as Notice;
          setNotices((current) => [newNotice, ...current]);
          setHasUnread(true);
        }
      )
      .subscribe();

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowNotices(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      supabase.removeChannel(channel);
    };
  }, []);

  const handleNewsClick = () => {
    setShowNotices(!showNotices);
    if (!showNotices && hasUnread) {
      setHasUnread(false);
      localStorage.setItem('last_read_notice_date', Date.now().toString());
    }
  };

  const renderNoticesDropdown = () => {
    if (!showNotices) return null;

    return (
      <div 
        ref={dropdownRef}
        className="fixed top-[110px] right-4 md:top-20 md:right-10 w-[300px] md:w-[350px] bg-black/80 backdrop-blur-xl border border-white/20 rounded-xl overflow-hidden shadow-2xl z-50 pointer-events-auto flex flex-col max-h-[70vh]"
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
          <h3 className="text-white font-bold tracking-wider uppercase text-sm">
            {language === 'en' ? 'Announcements' : language === 'hi' ? 'घोषणाएं' : 'ঘোষণা'}
          </h3>
          <button onClick={() => setShowNotices(false)} className="text-white/50 hover:text-white transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="overflow-y-auto p-2 flex flex-col gap-2">
          {debugError ? (
            <div className="p-4 text-center text-red-400 text-sm border border-red-500/30 rounded-lg bg-red-500/10">
              Debug Error: {debugError}
            </div>
          ) : notices.length === 0 ? (
            <div className="p-4 text-center text-white/50 text-sm">
              {language === 'en' ? 'No new notices.' : language === 'hi' ? 'कोई नई सूचना नहीं।' : 'কোনো নতুন নোটিশ নেই।'}
            </div>
          ) : (
            notices.map((notice) => {
              const content = (
                <div className="p-3 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                  <h4 className="text-white font-semibold text-sm mb-1">{notice.title}</h4>
                  <p className="text-white/70 text-xs mb-2 leading-relaxed whitespace-pre-wrap">{notice.message}</p>
                  <span className="text-white/40 text-[10px]">{new Date(notice.created_at).toLocaleDateString()}</span>
                </div>
              );

              return notice.link ? (
                <Link href={notice.link} key={notice.id} onClick={() => setShowNotices(false)} className="block">
                  {content}
                </Link>
              ) : (
                <div key={notice.id}>{content}</div>
              );
            })
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <SettingsModal />
      {renderNoticesDropdown()}
      <nav className="fixed top-0 left-0 right-0 z-50 flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-4 pointer-events-none gap-1 md:gap-0">
      <div className="w-full md:w-auto flex items-start md:items-center justify-between pointer-events-none">
        <div 
          className="flex items-center gap-3 pointer-events-auto cursor-pointer"
          onClick={() => setSelectedPlanet(null)}
        >
          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
            <Orbit className="text-white w-5 h-5" />
          </div>
          <div>
            <h1 className="text-white font-bold text-xl tracking-widest uppercase">Solaris</h1>
            <p className="text-white/50 text-[10px] tracking-[0.2em] uppercase">Interactive 3D</p>
          </div>
        </div>

        {/* Mobile Language Switcher, Audio & Auth */}
        <div className="pointer-events-auto md:hidden flex flex-col items-end gap-3">
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={handleNewsClick}
              className="relative text-white/70 hover:text-white transition-colors bg-white/5 p-2 rounded-full backdrop-blur-md border border-white/10 flex items-center justify-center w-8 h-8"
            >
              <Newspaper className="w-4 h-4" />
              {hasUnread && <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-black" />}
            </button>
            <button 
              onClick={() => setSettingsOpen(true)}
              className="text-white/70 hover:text-white transition-colors bg-white/5 p-2 rounded-full backdrop-blur-md border border-white/10 flex items-center justify-center w-8 h-8"
            >
              <Settings className="w-4 h-4" />
            </button>
            <button
              onClick={toggleAudio}
              className="text-white/70 hover:text-white transition-colors bg-white/5 p-2 rounded-full backdrop-blur-md border border-white/10 flex items-center justify-center w-8 h-8"
            >
              {isAudioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      <div className="absolute top-[60px] left-[68px] md:static grid grid-cols-2 md:flex w-auto md:flex-1 justify-items-start md:justify-center gap-x-4 gap-y-1 md:gap-6 pointer-events-auto">
        <Link href="/compare" className="text-white/70 hover:text-white text-[11px] md:text-xs uppercase tracking-widest transition-colors whitespace-nowrap">
          {language === 'en' ? 'Compare' : language === 'hi' ? 'तुलना' : 'তুলনা'}
        </Link>
        <Link href="/scale" className="text-white/70 hover:text-white text-[11px] md:text-xs uppercase tracking-widest transition-colors whitespace-nowrap">
          {language === 'en' ? 'Scale' : language === 'hi' ? 'स्केल' : 'স্কেল'}
        </Link>
        <Link href="/learn" className="text-white/70 hover:text-white text-[11px] md:text-xs uppercase tracking-widest transition-colors whitespace-nowrap">
          {language === 'en' ? 'Learn' : language === 'hi' ? 'सीखें' : 'শিখুন'}
        </Link>
        <Link href="/missions" className="text-white/70 hover:text-white text-[11px] md:text-xs uppercase tracking-widest transition-colors whitespace-nowrap">
          {language === 'en' ? 'Missions' : language === 'hi' ? 'मिशन' : 'মিশন'}
        </Link>
      </div>
      
      {/* Desktop Language Switcher, Audio & Auth */}
      <div className="pointer-events-auto hidden md:flex items-center gap-6">
        <div className="flex items-center gap-4">
          <button 
            onClick={handleNewsClick}
            className="relative text-white/70 hover:text-white transition-colors"
          >
            <Newspaper className="w-5 h-5" />
            {hasUnread && <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-black" />}
          </button>
          <button 
            onClick={() => setSettingsOpen(true)}
            className="text-white/70 hover:text-white transition-colors"
          >
            <Settings className="w-5 h-5" />
          </button>
          <button
            onClick={toggleAudio}
            className="text-white/70 hover:text-white transition-colors"
          >
            {isAudioEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
          </button>
        </div>
        
        <div className="flex items-center gap-4 border-l border-white/20 pl-4">
          <LanguageSwitcher />
          
          <Show when="signed-out">
            <SignInButton mode="modal">
              <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full backdrop-blur-md border border-white/20 transition-all text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <User className="w-4 h-4" />
                Log in
              </button>
            </SignInButton>
          </Show>
          <Show when="signed-in">
            <div className="flex items-center gap-3">
              <Link href="/profile" className="text-white/70 hover:text-white text-xs uppercase tracking-widest transition-colors font-semibold mr-2">
                Profile
              </Link>
              <UserButton />
            </div>
          </Show>
        </div>
      </div>
    </nav>
    </>
  );
}
