'use client';

import { planets } from '@/data/planets';
import { useAppStore } from '@/store/useAppStore';
import { Plus, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PlanetSelectorProps {
  selectedIds: string[];
  onChange: (ids: string[]) => void;
}

export function PlanetSelector({ selectedIds, onChange }: PlanetSelectorProps) {
  const { language } = useAppStore();
  const [isOpen, setIsOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const availablePlanets = planets.filter(p => !selectedIds.includes(p.id));

  const handleAdd = (id: string) => {
    if (editingIndex !== null) {
      const newIds = [...selectedIds];
      newIds[editingIndex] = id;
      onChange(newIds);
    } else if (selectedIds.length < 4) {
      onChange([...selectedIds, id]);
    }
    setIsOpen(false);
    setEditingIndex(null);
  };

  const handleRemove = (index: number) => {
    const newIds = [...selectedIds];
    newIds.splice(index, 1);
    onChange(newIds);
  };

  const openPicker = (index?: number) => {
    if (index !== undefined) {
      setEditingIndex(index);
    } else {
      setEditingIndex(null);
    }
    setIsOpen(true);
  };

  return (
    <div className="relative w-full py-4 z-40 flex flex-col items-center">
      <div className="flex flex-nowrap justify-center gap-1.5 md:gap-4 w-full px-2 md:px-4">
        {selectedIds.map((id, idx) => {
          const planet = planets.find(p => p.id === id);
          if (!planet) return null;
          
          return (
            <div key={`${id}-${idx}`} className="relative group flex-1 min-w-0 md:flex-initial">
              <button 
                onClick={() => openPicker(idx)}
                className="flex items-center justify-center gap-2 md:gap-3 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-colors backdrop-blur-md min-w-0 w-full"
              >
                <div 
                  className="w-3.5 h-3.5 md:w-4 md:h-4 rounded-full border border-white/30 flex-shrink-0" 
                  style={{ backgroundColor: planet.color }}
                />
                <span className="text-xs md:text-sm font-medium truncate">{planet.name[language]}</span>
              </button>
              
              {selectedIds.length > 2 && (
                <button 
                  onClick={() => handleRemove(idx)}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-red-500/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="w-3 h-3 text-white" />
                </button>
              )}
            </div>
          );
        })}

        {selectedIds.length < 4 && (
          <div className="flex-1 min-w-0 md:flex-initial">
            <button 
              onClick={() => openPicker()}
              className="flex items-center justify-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/5 hover:bg-white/10 border border-dashed border-white/30 rounded-full transition-colors min-w-0 w-full"
            >
              <Plus className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
              <span className="text-xs md:text-sm truncate">Add</span>
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-16 bg-black/90 border border-white/20 rounded-xl p-4 backdrop-blur-xl max-w-md w-full grid grid-cols-2 md:grid-cols-3 gap-2"
          >
            {availablePlanets.map(p => (
              <button
                key={p.id}
                onClick={() => handleAdd(p.id)}
                className="flex items-center gap-2 p-2 hover:bg-white/10 rounded-lg transition-colors text-left"
              >
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: p.color }} />
                <span className="text-xs truncate">{p.name[language]}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
