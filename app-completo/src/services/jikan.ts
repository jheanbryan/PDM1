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


export async function getAnimeDetails(id: number) {
  try {
    const [detailsRes, picturesRes] = await Promise.all([
      api.get(`/anime/${id}`),
      api.get(`/anime/${id}/pictures`),
    ]);

    return {
      details: detailsRes.data.data,
      images: picturesRes.data.data.map((pic: any) => pic.jpg.image_url),
    };
  } catch (error) {
    console.error('Erro ao buscar detalhes do anime:', error);
    return null;
  }
}


