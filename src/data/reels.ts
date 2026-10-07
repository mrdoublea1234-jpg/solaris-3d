export interface ReelData {
  id: string; // UUID from Supabase
  video_url: string;
  title: string;
  description: string;
  view_count: number;
  created_at?: string;
}
