import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

const NotesPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", 1],
    queryFn: () => fetchNotes("", 1),
  });

  return (
    <div> 
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient />
    </HydrationBoundary>
    </div>
  );
};

export default NotesPage;