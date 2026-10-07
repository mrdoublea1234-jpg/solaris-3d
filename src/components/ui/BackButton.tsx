'use client';

import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';

interface BackButtonProps {
  defaultHref?: string;
  className?: string;
  iconClassName?: string;
  ariaLabel?: string;
}

export function BackButton({ 
  defaultHref = '/others', 
  className,
  iconClassName = 'w-6 h-6',
  ariaLabel = 'Go back'
}: BackButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    // Navigate back to where the user entered from
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back();
    } else {
      router.push(defaultHref);
    }
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      aria-label={ariaLabel}
      className={
        className ||
        "p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-colors flex items-center justify-center text-white backdrop-blur-md active:scale-95"
      }
    >
      <ChevronLeft className={iconClassName} />
    </button>
  );
}
