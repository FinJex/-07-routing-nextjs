import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

type Props = {
  params: Promise<{
    slug: string[];
  }>;
};

const NotesPage = async ({params}:Props) => {
  const { slug } = await params;
  const filter = slug[0] === "all" ? "" : slug[0];
  
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", 1],
    queryFn: () => fetchNotes("", 1, filter),
  });

  return (
    <div> 
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient filter={filter} />
    </HydrationBoundary>
    </div>
  );
};

export default NotesPage;