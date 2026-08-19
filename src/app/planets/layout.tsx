import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { ChevronRight, Orbit } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function PlanetsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white relative flex flex-col md:flex-row overflow-hidden">
      {/* Top Navigation for Explorer */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 pointer-events-none">
        <div className="flex items-center gap-4 pointer-events-auto">
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 transition-colors">
              <Orbit className="text-white/70 group-hover:text-white w-5 h-5 transition-colors" />
            </div>
            <div className="hidden md:block">
              <h1 className="text-white/70 group-hover:text-white font-medium text-sm tracking-widest uppercase transition-colors">Back to Solar System</h1>
            </div>
          </Link>
          
          <ChevronRight className="w-4 h-4 text-white/30 hidden md:block" />
          
          <div className="hidden md:block text-white/50 text-xs tracking-[0.2em] uppercase">
            Explorer
          </div>
        </div>
        
        <div className="pointer-events-auto">
          <LanguageSwitcher />
        </div>
      </nav>

      {children}
    </div>
  );
}
