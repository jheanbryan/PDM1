import api from './api';
import { Anime } from '../models/Anime';

export async function searchAnime(query: string): Promise<Anime[]> {
  const allResults: Anime[] = [];

  for (let page = 1; page <= 2; page++) {
    const response = await api.get(`/anime`, {
      params: { q: query, page },
    });

    const pageResults = response.data.data;

    if (!pageResults || pageResults.length === 0) break;

    allResults.push(...pageResults);
  }

  return allResults;
}
