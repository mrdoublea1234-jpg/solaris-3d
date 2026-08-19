import { lessons } from '@/data/lessons';
import { ClientLessonViewer } from '@/components/learning/ClientLessonViewer';

export async function generateStaticParams() {
  return lessons.map((lesson) => ({
    id: lesson.id,
  }));
}

export default async function LessonPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <ClientLessonViewer lessonId={id} />;
}
