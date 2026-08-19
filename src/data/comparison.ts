import { planets } from './planets';

// Core raw data for mathematical/visual comparison
export interface ComparisonMetrics {
  id: string;
  diameterKm: number;
  massEarths: number;
  gravityMs2: number;
  distanceMillionKm: number;
  orbitPeriodDays: number;
  rotationPeriodHours: number;
  avgTempC: number;
  moonCount: number;
}

export const comparisonData: ComparisonMetrics[] = [
  {
    id: 'sun',
    diameterKm: 1392700,
    massEarths: 333000,
    gravityMs2: 274,
    distanceMillionKm: 0,
    orbitPeriodDays: 0, // Not applicable
    rotationPeriodHours: 648, // ~27 days
    avgTempC: 5500,
    moonCount: 0
  },
  {
    id: 'mercury',
    diameterKm: 4879,
    massEarths: 0.055,
    gravityMs2: 3.7,
    distanceMillionKm: 57.9,
    orbitPeriodDays: 88,
    rotationPeriodHours: 1407.6,
    avgTempC: 167,
    moonCount: 0
  },
  {
    id: 'venus',
    diameterKm: 12104,
    massEarths: 0.815,
    gravityMs2: 8.87,
    distanceMillionKm: 108.2,
    orbitPeriodDays: 224.7,
    rotationPeriodHours: 5832.5, // Retrograde
    avgTempC: 464,
    moonCount: 0
  },
  {
    id: 'earth',
    diameterKm: 12742,
    massEarths: 1,
    gravityMs2: 9.8,
    distanceMillionKm: 149.6,
    orbitPeriodDays: 365.2,
    rotationPeriodHours: 23.9,
    avgTempC: 15,
    moonCount: 1
  },
  {
    id: 'mars',
    diameterKm: 6779,
    massEarths: 0.107,
    gravityMs2: 3.71,
    distanceMillionKm: 227.9,
    orbitPeriodDays: 687,
    rotationPeriodHours: 24.6,
    avgTempC: -65,
    moonCount: 2
  },
  {
    id: 'jupiter',
    diameterKm: 139820,
    massEarths: 317.8,
    gravityMs2: 24.79,
    distanceMillionKm: 778.6,
    orbitPeriodDays: 4331,
    rotationPeriodHours: 9.9,
    avgTempC: -110,
    moonCount: 95
  },
  {
    id: 'saturn',
    diameterKm: 116460,
    massEarths: 95.2,
    gravityMs2: 10.44,
    distanceMillionKm: 1433.5,
    orbitPeriodDays: 10747,
    rotationPeriodHours: 10.7,
    avgTempC: -140,
    moonCount: 146
  },
  {
    id: 'uranus',
    diameterKm: 50724,
    massEarths: 14.5,
    gravityMs2: 8.69,
    distanceMillionKm: 2872.5,
    orbitPeriodDays: 30589,
    rotationPeriodHours: 17.2,
    avgTempC: -195,
    moonCount: 27
  },
  {
    id: 'neptune',
    diameterKm: 49244,
    massEarths: 17.1,
    gravityMs2: 11.15,
    distanceMillionKm: 4495.1,
    orbitPeriodDays: 59800,
    rotationPeriodHours: 16.1,
    avgTempC: -200,
    moonCount: 14
  }
];

export function getComparisonData(id: string): ComparisonMetrics | undefined {
  return comparisonData.find((data) => data.id === id);
}

// Utility to find min/max values for scaling visual bars
export function getMetricBounds(metric: keyof Omit<ComparisonMetrics, 'id'>, excludeSun: boolean = true) {
  let activeData = comparisonData;
  if (excludeSun) {
    activeData = comparisonData.filter(d => d.id !== 'sun');
  }
  
  const values = activeData.map(d => d[metric] as number);
  return {
    min: Math.min(...values),
    max: Math.max(...values)
  };
}
