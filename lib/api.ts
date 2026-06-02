import axios from "axios";
import type { Note } from "../types/note";
import type { NewNote } from "../types/note";

interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}


axios.defaults.baseURL = "https://notehub-public.goit.study/api";

export const fetchNotes = async ( searchText: string, page: number ): Promise<FetchNotesResponse> => {
  const response = await axios.get<FetchNotesResponse>("/notes", {
    params: {
      page,
      perPage: 12,
      search: searchText,
    },
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
    },
  });

  return response.data;
};

export const createNote = async (note: NewNote) => {
    const response = await axios.post<Note>("/notes", note, {
            headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
    },
    });
    return response.data;
}

export const deleteNote = async ( id: string): Promise<Note> => {
    const response = await axios.delete<Note>(`/notes/${id}`, {
                    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
    },
    }); 
    return response.data;
}


export const fetchNoteById = async ( id: string): Promise<Note> => {
    const response = await axios.get<Note>(`/notes/${id}`, {
                    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
    },
    }); 
    return response.data;
}

export const getNotes = async (tag?: string) => {
  const res = await axios.get<FetchNotesResponse>("/notes", {
    params: { tag },
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
    },
  });
  return res.data;
};