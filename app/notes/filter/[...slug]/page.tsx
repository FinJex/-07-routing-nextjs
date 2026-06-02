import { getNotes } from '@/lib/api';
import NoteList from '@/components/NoteList/NoteList';

type Props = {
  params: {
    slug: string[];
  };
};

export default async function NotesByCategory({ params }: Props) {
  const category =
    params.slug[0] === "all" ? undefined : params.slug[0];

  const response = await getNotes(category);

  return (
    <div>
      <h1>Notes List</h1>
      {response?.notes?.length > 0 && (
        <NoteList notes={response.notes} />
      )}
    </div>
  );
}