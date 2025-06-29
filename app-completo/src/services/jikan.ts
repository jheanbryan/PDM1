import api from './api';
import { Anime } from '../models/Anime';

export async function searchAnime(query: string): Promise<Anime[]> {
  const response = await api.get(`/anime`, {
    params: { q: query, limit: 10 },
  });

  return response.data.data; 
}
