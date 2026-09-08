'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import { 
  ChevronLeft, 
  Globe, 
  Star, 
  Info, 
  Search, 
  Orbit, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  Compass,
  ArrowRight,
  Layers
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAppStore } from '@/store/useAppStore';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { exoplanets, ExoplanetData } from '@/data/exoplanets';
import { STAR_SYSTEMS, StarSystem, getSystemForPlanet } from '@/data/systems';
import { motion, AnimatePresence } from 'framer-motion';

const NOTE_TEXT = {
  en: "Note: These Exoplanets and Stars are visual representations based on scientific data. Since they are too far away for direct imaging, no actual 3D models exist yet. However, these artistic impressions are built from current scientific theories and may share similarities with reality.",
  hi: "नोट: ये एक्सोप्लैनेट और तारे वैज्ञानिक डेटा पर आधारित दृश्य प्रस्तुतियां हैं। इतनी दूर होने के कारण कोई वास्तविक 3D मॉडल मौजूद नहीं है, लेकिन ये कलात्मक अवधारणाएं वर्तमान वैज्ञानिक सिद्धांतों पर आधारित हैं और वास्तविकता से काफी मिलती-जुलती हो सकती हैं।",
  bn: "নোট: এই এক্সোপ্ল্যানেট এবং নক্ষত্রগুলোর কোনো বাস্তব 3D মডেল এখনো তৈরি করা সম্ভব হয়নি কারণ এগুলো পৃথিবী থেকে অনেক দূরে। এগুলো মূলত বৈজ্ঞানিক ধারণা এবং তত্ত্বের ওপর ভিত্তি করে তৈরি করা একটি রূপ, তবে বাস্তবের সাথে এর কিছুটা মিল থাকতে পারে।"
};

const UI_LABELS = {
  allSystems: {
    en: "All Systems",
    hi: "सभी सौरमंडल",
    bn: "সব সৌরজগৎ"
  },
  systemFocus: {
    en: "Focused System",
    hi: "सक्रिय प्रणाली",
    bn: "নির্বাচিত সৌরজগৎ"
  },
  hostStarLabel: {
    en: "Host Star",
    hi: "मुख्य तारा",
    bn: "मूल নক্ষত্র"
  },
  distanceLabel: {
    en: "Distance",
    hi: "दूरी",
    bn: "দূরত্ব"
  },
  totalBodies: {
    en: "Destinations",
    hi: "गंतव्य",
    bn: "টি গন্তব্য"
  },
  showAllBtn: {
    en: "Show All Systems",
    hi: "सभी प्रणालियां देखें",
    bn: "সব সৌরজগৎ দেখুন"
  },
  searchPlaceholder: {
    en: "Search Exoplanets or Stars...",
    hi: "एक्सोप्लैनेट या तारे खोजें...",
    bn: "এক্সোপ্ল্যানেট বা নক্ষত্র খুঁজুন..."
  },
  noResults: {
    en: "No destinations found matching your criteria.",
    hi: "आपके मानदंड से मेल खाता कोई गंतव्य नहीं मिला।",
    bn: "কোনো গন্তব্য খুঁজে পাওয়া যায়নি।"
  },
  explore3D: {
    en: "Explore 3D",
    hi: "3D में देखें",
    bn: "থ্রিডি এক্সপ্লোর করুন"
  }
};

export default function OthersPage() {
  const router = useRouter();
  const { language } = useAppStore();
  const mainRef = useRef<HTMLElement>(null);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const isTabsRestoredRef = useRef(false);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<'ALL' | 'STARS' | 'EXOPLANETS'>('ALL');
  const [selectedSystemId, setSelectedSystemId] = useState<string>('ALL');
  const [collapsedSystems, setCollapsedSystems] = useState<Record<string, boolean>>({});
  const [highlightedCardId, setHighlightedCardId] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Helper to reliably center card inside main scroll container (Mobile & Desktop)
  const centerCard = (cardId: string) => {
    const el = document.getElementById(`card-${cardId}`);
    const container = mainRef.current;
    if (!el || !container) return false;

    const elRect = el.getBoundingClientRect();
    if (elRect.height === 0) return false;

    const containerRect = container.getBoundingClientRect();
    const currentScrollTop = container.scrollTop;

    // Compensate for sticky control bar height so the card centers nicely in the visible area below it
    const stickyEl = document.getElementById('sticky-control-bar');
    const stickyHeight = stickyEl ? stickyEl.offsetHeight : 0;
    const availableHeight = container.clientHeight - stickyHeight;

    // Mathematical vertical centering relative to visible area
    const targetTop = currentScrollTop + (elRect.top - containerRect.top) - stickyHeight - (availableHeight / 2) + (elRect.height / 2);

    // Only 'All Systems' tab uses instant jump (0s delay, no dizzying long scroll for 100+ items).
    // All other individual system tabs continue using elegant 'smooth' scroll!
    if (selectedSystemId === 'ALL') {
      container.scrollTop = Math.max(0, targetTop);
    } else {
      try {
        container.scrollTo({
          top: Math.max(0, targetTop),
          behavior: 'smooth'
        });
      } catch (e) {
        container.scrollTop = Math.max(0, targetTop);
      }
    }

    setHighlightedCardId(cardId);
    setTimeout(() => setHighlightedCardId(null), 2500);
    return true;
  };

  // Helper to center a system pill inside the horizontal tab bar (Mobile & Desktop)
  const centerPill = (systemId: string, smooth: boolean = true) => {
    const container = tabsContainerRef.current;
    const pill = document.getElementById(`system-pill-${systemId}`);
    if (!container || !pill) return false;

    const pillOffsetLeft = pill.offsetLeft;
    const pillWidth = pill.offsetWidth;
    const containerWidth = container.clientWidth;

    if (containerWidth === 0 || pillWidth === 0) return false;

    const targetLeft = Math.max(0, pillOffsetLeft - (containerWidth / 2) + (pillWidth / 2));

    if (smooth) {
      try {
        container.scrollTo({ left: targetLeft, behavior: 'smooth' });
      } catch (e) {
        container.scrollLeft = targetLeft;
      }
    } else {
      container.scrollLeft = targetLeft;
      try {
        container.scrollTo({ left: targetLeft, behavior: 'auto' });
      } catch (e) {}
    }
    return true;
  };

  // 1. Restore saved system, search, and type filter on mount
  useEffect(() => {
    try {
      const savedSystem = sessionStorage.getItem('others_selected_system');
      const savedSearch = sessionStorage.getItem('others_search_query');
      const savedType = sessionStorage.getItem('others_type_filter');

      if (savedSystem) {
        setSelectedSystemId(savedSystem);
      }
      if (savedSearch) {
        setSearchQuery(savedSearch);
      }
      if (savedType) {
        setTypeFilter(savedType as any);
      }
    } catch (e) {
      // Ignore
    } finally {
      setIsInitialized(true);
    }
  }, []);

  // 2. Center card reliably when returning, polling until DOM layout is ready on mobile & desktop
  useEffect(() => {
    if (!isInitialized) return;

    let targetPlanetId: string | null = null;
    try {
      targetPlanetId = sessionStorage.getItem('others_last_planet');
    } catch (e) {}

    if (!targetPlanetId) return;

    // Ensure the section is expanded if in ALL view
    const sys = getSystemForPlanet(targetPlanetId);
    if (sys && selectedSystemId === 'ALL') {
      setCollapsedSystems(prev => ({ ...prev, [sys.id]: false }));
    }

    let attempts = 0;
    const maxAttempts = 25;

    const interval = setInterval(() => {
      attempts++;
      if (targetPlanetId && centerCard(targetPlanetId)) {
        clearInterval(interval);
        try {
          sessionStorage.removeItem('others_last_planet');
        } catch (e) {}
      } else if (attempts >= maxAttempts) {
        clearInterval(interval);
        try {
          sessionStorage.removeItem('others_last_planet');
        } catch (e) {}
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isInitialized, selectedSystemId]);

  // 3. Restore horizontal star system tabs scroll position on mount (Mobile & Desktop)
  useEffect(() => {
    if (!isInitialized) return;

    let savedTabsScroll: string | null = null;
    try {
      savedTabsScroll = sessionStorage.getItem('others_tabs_scroll');
    } catch (e) {}

    let attempts = 0;
    const maxAttempts = 30;

    const applyTabsRestoration = () => {
      const container = tabsContainerRef.current;
      if (!container) return false;

      // Wait for layout to be non-zero
      if (container.clientWidth === 0 || container.scrollWidth === 0) return false;

      // 1. If user had a specific saved pixel scroll position, restore it directly
      if (savedTabsScroll !== null) {
        const targetLeft = parseFloat(savedTabsScroll);
        if (!isNaN(targetLeft)) {
          container.scrollLeft = targetLeft;
          try {
            container.scrollTo({ left: targetLeft, behavior: 'auto' });
          } catch (e) {}

          if (Math.abs(container.scrollLeft - targetLeft) <= 5 || container.scrollWidth <= container.clientWidth) {
            isTabsRestoredRef.current = true;
            return true;
          }
        }
      }

      // 2. If a specific system is active, center that pill as primary / fallback
      if (selectedSystemId !== 'ALL') {
        if (centerPill(selectedSystemId, false)) {
          isTabsRestoredRef.current = true;
          try {
            sessionStorage.setItem('others_tabs_scroll', String(container.scrollLeft));
          } catch (e) {}
          return true;
        }
        return false;
      }

      isTabsRestoredRef.current = true;
      return true;
    };

    if (applyTabsRestoration()) return;

    const timer = setInterval(() => {
      attempts++;
      if (applyTabsRestoration() || attempts >= maxAttempts) {
        clearInterval(timer);
        isTabsRestoredRef.current = true;
      }
    }, 40);

    return () => {
      clearInterval(timer);
      isTabsRestoredRef.current = true;
    };
  }, [isInitialized, selectedSystemId]);

  // 4. Persist state changes in sessionStorage only AFTER initial load
  useEffect(() => {
    if (!isInitialized) return;
    try {
      sessionStorage.setItem('others_selected_system', selectedSystemId);
      sessionStorage.setItem('others_search_query', searchQuery);
      sessionStorage.setItem('others_type_filter', typeFilter);
    } catch (e) {
      // Ignore
    }
  }, [selectedSystemId, searchQuery, typeFilter, isInitialized]);

  const handleTabsScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (!isTabsRestoredRef.current) return;
    try {
      sessionStorage.setItem('others_tabs_scroll', String(e.currentTarget.scrollLeft));
    } catch (err) {}
  };

  const handleTouchEndTabs = () => {
    if (tabsContainerRef.current) {
      try {
        sessionStorage.setItem('others_tabs_scroll', String(tabsContainerRef.current.scrollLeft));
      } catch (err) {}
    }
  };

  const handleSelectSystem = (systemId: string) => {
    setSelectedSystemId(systemId);
    try {
      sessionStorage.setItem('others_selected_system', systemId);
    } catch (err) {}

    if (systemId === 'ALL') {
      if (tabsContainerRef.current) {
        tabsContainerRef.current.scrollLeft = 0;
        try {
          tabsContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } catch (e) {}
        try {
          sessionStorage.setItem('others_tabs_scroll', '0');
        } catch (e) {}
      }
    } else {
      centerPill(systemId, true);
      setTimeout(() => {
        if (tabsContainerRef.current) {
          try {
            sessionStorage.setItem('others_tabs_scroll', String(tabsContainerRef.current.scrollLeft));
          } catch (err) {}
        }
      }, 500);
    }
  };

  const handleBack = () => {
    try {
      sessionStorage.removeItem('others_selected_system');
      sessionStorage.removeItem('others_search_query');
      sessionStorage.removeItem('others_type_filter');
      sessionStorage.removeItem('others_last_planet');
      sessionStorage.removeItem('others_tabs_scroll');
    } catch (e) {}
    router.push('/');
  };

  const handleCardClick = (planetId: string) => {
    try {
      sessionStorage.setItem('others_last_planet', planetId);
      sessionStorage.setItem('others_selected_system', selectedSystemId);
      sessionStorage.setItem('others_search_query', searchQuery);
      sessionStorage.setItem('others_type_filter', typeFilter);
      if (tabsContainerRef.current) {
        sessionStorage.setItem('others_tabs_scroll', String(tabsContainerRef.current.scrollLeft));
      }
    } catch (e) {}
  };

  const toggleSystemCollapse = (systemId: string) => {
    setCollapsedSystems(prev => ({
      ...prev,
      [systemId]: !prev[systemId]
    }));
  };

  // Find active system info if one is selected
  const activeSystem = useMemo(() => {
    if (selectedSystemId === 'ALL') return null;
    return STAR_SYSTEMS.find(sys => sys.id === selectedSystemId) || null;
  }, [selectedSystemId]);

  // Filter exoplanets list based on search, type, and selected system
  const filteredExoplanets = useMemo(() => {
    const searchLower = searchQuery.toLowerCase().replace(/[\s-]/g, '');
    const normalizeName = (name: string) => name.toLowerCase().replace(/[\s-]/g, '');

    return exoplanets.filter((item) => {
      // Search matching
      const nameMatch = 
        !searchQuery ||
        normalizeName(item.name.en).includes(searchLower) || 
        normalizeName(item.name.hi).includes(searchLower) || 
        normalizeName(item.name.bn).includes(searchLower);
        
      // Type matching
      const itemType = item.type.toUpperCase();
      const typeMatch = 
        typeFilter === 'ALL' || 
        (typeFilter === 'STARS' && itemType === 'STAR') || 
        (typeFilter === 'EXOPLANETS' && itemType === 'EXOPLANET');

      // System matching
      let systemMatch = true;
      if (selectedSystemId !== 'ALL') {
        const sys = getSystemForPlanet(item.id);
        systemMatch = sys?.id === selectedSystemId;
      }

      return nameMatch && typeMatch && systemMatch;
    });
  }, [searchQuery, typeFilter, selectedSystemId]);

  // Group items by system for the "ALL" view
  const groupedBySystem = useMemo(() => {
    const groups: { system: StarSystem; items: ExoplanetData[] }[] = [];

    STAR_SYSTEMS.forEach(sys => {
      const itemsInSystem = filteredExoplanets.filter(planet => sys.planetIds.includes(planet.id));
      if (itemsInSystem.length > 0) {
        groups.push({
          system: sys,
          items: itemsInSystem
        });
      }
    });

    return groups;
  }, [filteredExoplanets]);

  // Render an individual Exoplanet or Star card
  const renderCard = (item: ExoplanetData) => {
    const isStar = item.type === 'Star';
    const isEarthLike = item.id === 'kepler-186f';
    const parentSystem = getSystemForPlanet(item.id);
    const isHighlighted = highlightedCardId === item.id;

    return (
      <motion.div 
        key={item.id}
        id={`card-${item.id}`}
        layout
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.2 }}
        className={`group relative border rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between ${
          isHighlighted
            ? 'bg-[#152136] border-blue-400 ring-2 ring-blue-400 shadow-2xl shadow-blue-500/30'
            : 'bg-[#0b0f17]/90 hover:bg-[#121824] border-white/10 hover:border-blue-500/40 shadow-lg shadow-black/40 hover:shadow-blue-950/20'
        }`}
      >
        <div>
          {/* Card Top Row: Type Icon, System Tag & Distance */}
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-xl border transition-colors ${
                isStar 
                  ? 'bg-amber-500/10 border-amber-500/30 text-amber-400 group-hover:bg-amber-500/20' 
                  : isEarthLike 
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 group-hover:bg-emerald-500/20' 
                    : 'bg-blue-500/10 border-blue-500/30 text-blue-400 group-hover:bg-blue-500/20'
              }`}>
                {isStar ? <Star className="w-5 h-5" /> : <Globe className="w-5 h-5" />}
              </div>
              
              {parentSystem && (
                <span className="hidden sm:inline-block text-[10px] font-mono tracking-widest text-white/50 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                  {parentSystem.badge} {parentSystem.name[language]}
                </span>
              )}
            </div>

            <div className="text-[10px] sm:text-xs font-mono tracking-wider text-white/60 bg-black/60 border border-white/10 px-2.5 py-1 rounded-full uppercase whitespace-nowrap">
              {item.distance[language]}
            </div>
          </div>
          
          {/* Title & Type */}
          <h2 className="text-lg sm:text-xl font-bold tracking-wider uppercase mb-1 text-white group-hover:text-blue-300 transition-colors">
            {item.name[language]}
          </h2>
          
          <div className="flex items-center gap-2 mb-3">
            <span className={`text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded ${
              isStar ? 'bg-amber-500/20 text-amber-300' : 'bg-blue-500/20 text-blue-300'
            }`}>
              {isStar 
                ? (language === 'en' ? 'Star' : language === 'hi' ? 'तारा' : 'নক্ষত্র')
                : (language === 'en' ? 'Exoplanet' : language === 'hi' ? 'एक्सोप्लैनेट' : 'এক্সোপ্ল্যানেট')
              }
            </span>
            {item.radius && (
              <span className="text-[10px] text-white/40 font-mono">
                R: {item.radius}x
              </span>
            )}
          </div>
          
          {/* Description */}
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed line-clamp-3 mb-5 font-light">
            {item.description[language]}
          </p>
        </div>

        {/* CTA Button */}
        <Link 
          href={`/others/${item.id}`} 
          onClick={() => handleCardClick(item.id)}
          className="w-full py-2.5 sm:py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white hover:text-black transition-all text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 group/btn"
        >
          <span>{UI_LABELS.explore3D[language]}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    );
  };

  return (
    <main 
      ref={mainRef} 
      onScroll={(e) => {
        const top = e.currentTarget.scrollTop;
        if (top > 40 && !isScrolled) {
          setIsScrolled(true);
        } else if (top <= 40 && isScrolled) {
          setIsScrolled(false);
        }
      }}
      className="h-[100dvh] overflow-y-auto overflow-x-hidden bg-black text-white px-4 sm:px-6 md:px-12 pb-24 pt-0 relative selection:bg-blue-600 selection:text-white"
    >
      {/* Dynamic Cosmic Background Glow */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="fixed top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-blue-900/15 blur-[140px] rounded-full pointer-events-none" 
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="fixed bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/15 blur-[140px] rounded-full pointer-events-none" 
      />

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative z-10 max-w-5xl mx-auto pt-4 sm:pt-6 md:pt-10"
      >
        {/* Top Header */}
        <motion.div 
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between gap-4 mb-4 sm:mb-6"
        >
          <div className="flex items-center gap-3 sm:gap-4">
            <button 
              onClick={handleBack}
              aria-label="Back to main"
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all shrink-0 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <div>
              <h1 className="text-lg sm:text-2xl md:text-3xl font-light tracking-widest uppercase whitespace-nowrap">
                Beyond <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Solaris</span>
              </h1>
              <p className="text-white/50 text-[10px] sm:text-xs tracking-wider uppercase mt-0.5">
                {language === 'en' ? 'Explore Exoplanets & Other Stars' : language === 'hi' ? 'एक्सोप्लैनेट्स और अन्य तारों का अन्वेषण करें' : 'এক্সোপ্ল্যানেট এবং অন্যান্য নক্ষত্র এক্সপ্লোর করুন'}
              </p>
            </div>
          </div>

          {/* Desktop Language Switcher (Right aligned on desktop like before) */}
          <div className="hidden sm:block shrink-0">
            <LanguageSwitcher />
          </div>
        </motion.div>

        {/* Mobile Language Switcher (Centered between Header & Note ONLY on Mobile) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.05, ease: 'easeOut' }}
          className="flex sm:hidden justify-center mb-5"
        >
          <LanguageSwitcher />
        </motion.div>

        {/* Scientific Disclaimer Note */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 bg-white/[0.03] border border-white/10 rounded-xl p-3.5 sm:p-4 backdrop-blur-md"
        >
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light flex items-start gap-2.5">
            <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <span>{NOTE_TEXT[language]}</span>
          </p>
        </motion.div>

        {/* Sticky Control Bar (Search, Type Toggle & Star System Filter Tabs) */}
        <motion.div 
          id="sticky-control-bar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
          className={`sticky top-0 z-30 transition-all duration-300 -mx-4 px-4 sm:-mx-6 sm:px-6 md:-mx-12 md:px-12 pt-3 pb-3 mb-6 ${
            isScrolled 
              ? 'bg-[#060a12]/92 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/80' 
              : 'bg-transparent border-b border-transparent'
          }`}
        >
          {/* Search & Type Filter Bar */}
          <div className="mb-3 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
            {/* Search Box */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input 
                type="text" 
                placeholder={UI_LABELS.searchPlaceholder[language]}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-blue-400/50 focus:bg-white/[0.07] transition-all font-light"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/40 hover:text-white px-1"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Type Toggle Pills: ALL / STARS / EXOPLANETS */}
            <div className="flex gap-1.5 bg-white/[0.04] p-1 rounded-xl border border-white/10 shrink-0 self-start sm:self-auto w-full sm:w-auto">
              {(['ALL', 'STARS', 'EXOPLANETS'] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setTypeFilter(f)}
                  className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg text-[11px] sm:text-xs font-bold tracking-wider uppercase transition-all ${
                    typeFilter === f 
                      ? 'bg-white text-black shadow-md' 
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {f === 'ALL' 
                    ? (language === 'en' ? 'All' : language === 'hi' ? 'सभी' : 'সব')
                    : f === 'STARS' 
                      ? (language === 'en' ? 'Stars' : language === 'hi' ? 'तारे' : 'তারা')
                      : (language === 'en' ? 'Exoplanets' : language === 'hi' ? 'ग्रह' : 'গ্রহ')
                  }
                </button>
              ))}
            </div>
          </div>

          {/* Star Systems Filter Bar (Touch-friendly Horizontal Scroll for Mobile) */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-mono tracking-widest text-white/50 uppercase flex items-center gap-1.5">
                <Orbit className="w-3.5 h-3.5 text-blue-400" />
                {language === 'en' ? 'Filter by Star System' : language === 'hi' ? 'सौरमंडल द्वारा फ़िल्टर करें' : 'সৌরজগৎ ফিল্টার'}
              </span>
              <span className="text-[11px] font-mono text-white/40">
                {filteredExoplanets.length} {UI_LABELS.totalBodies[language]}
              </span>
            </div>

            {/* Horizontal scroll container with no scrollbar */}
            <div 
              ref={tabsContainerRef}
              onScroll={handleTabsScroll}
              onTouchEnd={handleTouchEndTabs}
              className="relative flex gap-2 overflow-x-auto no-scrollbar pb-1 -mx-4 px-4 sm:mx-0 sm:px-0"
            >
              {/* "All Systems" Pill */}
              <button
                id="system-pill-ALL"
                onClick={() => handleSelectSystem('ALL')}
                className={`shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all border ${
                  selectedSystemId === 'ALL'
                    ? 'bg-blue-600 text-white border-blue-400 shadow-md shadow-blue-900/30'
                    : 'bg-white/[0.04] text-white/70 border-white/10 hover:bg-white/[0.08] hover:text-white'
                }`}
              >
                <span>🌌</span>
                <span>{UI_LABELS.allSystems[language]}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  selectedSystemId === 'ALL' ? 'bg-white/20 text-white' : 'bg-white/10 text-white/60'
                }`}>
                  {exoplanets.length}
                </span>
              </button>

              {/* Individual System Pills */}
              {STAR_SYSTEMS.map((sys) => {
                const isSelected = selectedSystemId === sys.id;
                const count = sys.planetIds.length;

                return (
                  <button
                    key={sys.id}
                    id={`system-pill-${sys.id}`}
                    onClick={() => handleSelectSystem(sys.id)}
                    className={`shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all border ${
                      isSelected
                        ? 'bg-blue-600 text-white border-blue-400 shadow-md shadow-blue-900/30'
                        : 'bg-white/[0.04] text-white/70 border-white/10 hover:bg-white/[0.08] hover:text-white'
                    }`}
                  >
                    <span>{sys.badge}</span>
                    <span>{sys.name[language]}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-white/10 text-white/60'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Active System Spotlight Banner (When a specific system is selected) */}
        <AnimatePresence mode="wait">
          {activeSystem && (
            <motion.div
              key={activeSystem.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mb-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-[#0d1424] to-purple-950/30 border border-blue-500/20 backdrop-blur-md relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="text-xl">{activeSystem.badge}</span>
                    <h2 className="text-lg sm:text-xl font-bold tracking-wider text-white">
                      {activeSystem.name[language]}
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-white/70 font-light max-w-2xl leading-relaxed mb-3">
                    {activeSystem.tagline[language]}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono">
                    <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-white/80">
                      ⭐ {UI_LABELS.hostStarLabel[language]}: <strong className="text-white">{activeSystem.hostStar[language]}</strong>
                    </span>
                    <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-white/80">
                      📡 {UI_LABELS.distanceLabel[language]}: <strong className="text-white">{activeSystem.distance[language]}</strong>
                    </span>
                    <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-blue-300">
                      🪐 {activeSystem.planetIds.length} {UI_LABELS.totalBodies[language]}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleSelectSystem('ALL')}
                  className="self-start sm:self-center shrink-0 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 border border-white/15 transition-colors text-white flex items-center gap-1.5"
                >
                  <span>{UI_LABELS.showAllBtn[language]}</span>
                  <span>✕</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content Area */}
        {filteredExoplanets.length === 0 ? (
          /* Empty Search State */
          <div className="text-center py-16 bg-white/[0.02] border border-white/10 rounded-2xl p-8">
            <Compass className="w-12 h-12 mx-auto text-white/30 mb-3" />
            <p className="text-white/60 text-sm mb-4">
              {UI_LABELS.noResults[language]}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setTypeFilter('ALL');
                handleSelectSystem('ALL');
              }}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-xs font-bold uppercase tracking-wider transition-colors"
            >
              {language === 'en' ? 'Reset Filters' : language === 'hi' ? 'फ़िल्टर रीसेट करें' : 'ফিল্টার রিসেট করুন'}
            </button>
          </div>
        ) : selectedSystemId !== 'ALL' ? (
          /* Single System Focused Grid (Very short and compact!) */
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {filteredExoplanets.map(renderCard)}
          </div>
        ) : (
          /* "ALL SYSTEMS" View: Grouped with Collapsible System Sections */
          <div className="space-y-8">
            {groupedBySystem.map(({ system, items }) => {
              const isCollapsed = !!collapsedSystems[system.id];

              return (
                <div 
                  key={system.id} 
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-4 sm:p-6 transition-all"
                >
                  {/* System Section Header */}
                  <div className="flex items-center justify-between gap-3 pb-4 border-b border-white/5">
                    <div 
                      onClick={() => toggleSystemCollapse(system.id)}
                      className="flex items-center gap-3 cursor-pointer group select-none"
                    >
                      <span className="text-xl sm:text-2xl">{system.badge}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-base sm:text-lg font-bold tracking-wider text-white group-hover:text-blue-300 transition-colors">
                            {system.name[language]}
                          </h3>
                          <span className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded-full text-white/70">
                            {items.length}
                          </span>
                        </div>
                        <p className="text-[11px] sm:text-xs text-white/50 font-light mt-0.5">
                          {system.distance[language]} • {system.hostStar[language]}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {/* Button to isolate this system */}
                      <button
                        onClick={() => setSelectedSystemId(system.id)}
                        className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-blue-400 hover:text-blue-300 bg-blue-500/10 hover:bg-blue-500/20 px-2.5 py-1 rounded-lg border border-blue-500/20 transition-colors"
                      >
                        <span>{UI_LABELS.systemFocus[language]}</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>

                      {/* Collapse / Expand toggle */}
                      <button
                        onClick={() => toggleSystemCollapse(system.id)}
                        aria-label="Toggle section"
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                      >
                        {isCollapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Planet Cards Grid for this System */}
                  <AnimatePresence initial={false}>
                    {!isCollapsed && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 overflow-hidden"
                      >
                        {items.map(renderCard)}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-white/30 text-xs tracking-widest uppercase">
            {language === 'en' ? 'More destinations will be added soon...' : language === 'hi' ? 'जल्द ही और गंतव्य जोड़े जाएंगे...' : 'শীঘ্রই আরও নতুন গ্রহ যুক্ত করা হবে...'}
          </p>
        </div>
      </motion.div>
    </main>
  );
}
