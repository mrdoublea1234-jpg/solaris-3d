'use client';

import { comparisonData, getMetricBounds } from '@/data/comparison';
import { planets } from '@/data/planets';
import { useAppStore } from '@/store/useAppStore';
import { VisualBar } from './VisualBar';

interface ComparisonTableProps {
  selectedIds: string[];
}

export function ComparisonTable({ selectedIds }: ComparisonTableProps) {
  const { language } = useAppStore();
  
  const selectedData = selectedIds.map(id => comparisonData.find(d => d.id === id)!).filter(Boolean);
  const selectedPlanets = selectedIds.map(id => planets.find(p => p.id === id)!).filter(Boolean);

  // We exclude Sun for bounds so inner planets don't look completely flat
  const hasSun = selectedIds.includes('sun');
  const maxMass = getMetricBounds('massEarths', hasSun).max;
  const maxDiameter = getMetricBounds('diameterKm', hasSun).max;
  const maxGravity = getMetricBounds('gravityMs2', false).max;
  
  return (
    <div className="w-full bg-black/40 backdrop-blur-md border-t border-white/10 overflow-x-auto pb-8 scrollbar-hide">
      <div className="min-w-[800px] w-full px-6 py-8">
        
        {/* Headers */}
        <div className="grid grid-cols-5 gap-6 mb-6 pb-4 border-b border-white/10">
          <div className="col-span-1 text-white/50 text-xs font-medium uppercase tracking-widest">
            Metric
          </div>
          {selectedPlanets.map((planet, i) => (
            <div key={i} className="col-span-1 flex flex-col items-center">
              <div className="w-8 h-8 rounded-full mb-2" style={{ backgroundColor: planet.color }} />
              <span className="text-sm font-semibold">{planet.name[language]}</span>
            </div>
          ))}
        </div>

        {/* Rows */}
        <div className="space-y-8">
          
          {/* Diameter */}
          <div className="grid grid-cols-5 gap-6 items-center">
            <div className="col-span-1 text-xs text-white/70">
              <span className="block font-medium mb-1">Diameter (km)</span>
              <span className="text-white/40 text-[10px]">Physical size across the equator</span>
            </div>
            {selectedData.map((data, i) => (
              <div key={i} className="col-span-1">
                <div className="text-lg font-light">{data.diameterKm.toLocaleString()}</div>
                <VisualBar value={data.diameterKm} max={maxDiameter} label="" color={selectedPlanets[i].color} isLogScale={hasSun} />
              </div>
            ))}
          </div>

          {/* Mass */}
          <div className="grid grid-cols-5 gap-6 items-center">
            <div className="col-span-1 text-xs text-white/70">
              <span className="block font-medium mb-1">Mass (Earths)</span>
              <span className="text-white/40 text-[10px]">Relative to Earth (= 1)</span>
            </div>
            {selectedData.map((data, i) => (
              <div key={i} className="col-span-1">
                <div className="text-lg font-light">{data.massEarths.toLocaleString()}</div>
                <VisualBar value={data.massEarths} max={maxMass} label="" color={selectedPlanets[i].color} isLogScale={hasSun} />
              </div>
            ))}
          </div>

          {/* Gravity */}
          <div className="grid grid-cols-5 gap-6 items-center">
            <div className="col-span-1 text-xs text-white/70">
              <span className="block font-medium mb-1">Gravity (m/s²)</span>
              <span className="text-white/40 text-[10px]">Surface gravitational pull</span>
            </div>
            {selectedData.map((data, i) => (
              <div key={i} className="col-span-1">
                <div className="text-lg font-light">{data.gravityMs2}</div>
                <VisualBar value={data.gravityMs2} max={maxGravity} label="" color={selectedPlanets[i].color} />
              </div>
            ))}
          </div>

          {/* Temperature */}
          <div className="grid grid-cols-5 gap-6 items-center">
            <div className="col-span-1 text-xs text-white/70">
              <span className="block font-medium mb-1">Avg Temp (°C)</span>
              <span className="text-white/40 text-[10px]">Average surface/cloud temperature</span>
            </div>
            {selectedData.map((data, i) => {
              // Temperature bar logic: let's do a simple normalized fill
              const tempFill = ((data.avgTempC + 200) / 800) * 100;
              const color = data.avgTempC < 0 ? '#4fa3d1' : data.avgTempC > 100 ? '#e35940' : '#4cd17a';
              return (
                <div key={i} className="col-span-1">
                  <div className="text-lg font-light">{data.avgTempC}°C</div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full mt-2 overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${Math.max(2, Math.min(100, tempFill))}%`, backgroundColor: color }} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Moons */}
          <div className="grid grid-cols-5 gap-6 items-center">
            <div className="col-span-1 text-xs text-white/70">
              <span className="block font-medium mb-1">Moons</span>
              <span className="text-white/40 text-[10px]">Known natural satellites</span>
            </div>
            {selectedData.map((data, i) => (
              <div key={i} className="col-span-1 flex items-center gap-2">
                <div className="text-lg font-light">{data.moonCount}</div>
                {/* Visual dots for moons (max 10 for visual sanity) */}
                <div className="flex flex-wrap gap-1 w-full max-w-[60px]">
                  {Array.from({ length: Math.min(10, data.moonCount) }).map((_, j) => (
                    <div key={j} className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  ))}
                  {data.moonCount > 10 && <span className="text-[10px] text-white/40">+{data.moonCount - 10}</span>}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
