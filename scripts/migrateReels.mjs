import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// Parse .env.local
const envPath = path.resolve('.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
  const match = line.match(/^([^=]+)=(.*)$/);
  if (match) env[match[1]] = match[2].replace(/['"]/g, '').trim();
});

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const reelsData = [
  {
    video_url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    title: 'The Surface of Mars',
    description: 'A close look at the red planet and its dusty terrain.',
    view_count: 1240
  },
  {
    video_url: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
    title: 'Saturn\'s Rings',
    description: 'Did you know Saturn\'s rings are mostly made of ice chunks?',
    view_count: 3421
  },
  {
    video_url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    title: 'Jupiter\'s Great Red Spot',
    description: 'A storm larger than Earth that has been raging for hundreds of years.',
    view_count: 892
  }
];

async function migrate() {
  console.log('Starting migration...');
  const { data, error } = await supabase.from('reels').insert(reelsData).select();
  
  if (error) {
    console.error('Migration failed:', error);
  } else {
    console.log('Migration successful!', data);
  }
}

migrate();
