'use client';

import { motion } from 'framer-motion';

interface VisualBarProps {
  value: number;
  max: number;
  label: string;
  color?: string;
  isLogScale?: boolean;
}

export function VisualBar({ value, max, label, color = '#ffffff', isLogScale = false }: VisualBarProps) {
  // If the values are astronomically different (like Mass of Jupiter vs Mercury),
  // a linear bar won't be visible for the smaller ones. Log scale handles this.
  let percentage = 0;
  
  if (isLogScale && value > 0 && max > 0) {
    const logValue = Math.log10(value);
    const logMax = Math.log10(max);
    // Base it on a reasonable min (e.g. log10 of smallest planet mass)
    // To keep it simple, we just do a relative log ratio.
    // If logValue < 0 (like Mercury mass 0.055), we shift the axis.
    const shift = Math.abs(Math.min(0, logValue)) + 1; 
    percentage = ((logValue + shift) / (logMax + shift)) * 100;
  } else {
    percentage = max > 0 ? (value / max) * 100 : 0;
  }

  // Ensure it's visually at least a few pixels so it's not entirely invisible
  percentage = Math.max(2, Math.min(100, percentage));

  return (
    <div className="w-full mt-2">
      <div className="flex justify-between text-[10px] text-white/50 mb-1 uppercase tracking-wider">
        <span>{label}</span>
      </div>
      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div 
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
