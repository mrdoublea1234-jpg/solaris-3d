import { ClientScene } from '@/components/3d/ClientScene';
import { Overlay } from '@/components/ui/Overlay';

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-black text-white">
      <ClientScene />
      <Overlay />
    </main>
  );
}
