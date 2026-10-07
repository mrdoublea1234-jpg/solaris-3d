'use client';

import { planets } from '@/data/planets';
import { Planet } from './Planet';
import { Sun } from './Sun';
import { Orbit } from './Orbit';

export function SolarSystem() {
  return (
    <group>
      <Sun />
      
      {planets.filter(p => p.id !== 'sun').map((planet) => (
        <group key={planet.id}>
          <Orbit planet={planet} />
          <Planet planet={planet} />
        </group>
      ))}
    </group>
  );
}
