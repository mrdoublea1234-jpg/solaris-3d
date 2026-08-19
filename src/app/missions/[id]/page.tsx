import { missions } from '@/data/missions';
import { ClientMissionViewer } from '@/components/missions/ClientMissionViewer';

export async function generateStaticParams() {
  return missions.map((mission) => ({
    id: mission.id,
  }));
}

export default async function MissionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <ClientMissionViewer missionId={id} />;
}
