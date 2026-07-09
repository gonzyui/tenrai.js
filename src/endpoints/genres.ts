import type { TenraiClient } from '../client';
import type { Genre, GenreQueryParams, TenraiResponse } from '../types';

/**
 * Endpoint wrapper for anime and manga genres.
 * Provides access to the `/genres/anime` and `/genres/manga` resources.
 */
export class GenresEndpoint {
  private client: TenraiClient;

  constructor(client: TenraiClient) {
    this.client = client;
  }

  /**
   * Retrieve a list of all anime genres (including explicit genres, themes, and demographics).
   * @param params - Optional query parameters to filter the list of genres
   * @returns Promise with the list of anime genres
   * @see {@link https://api.tenrai.org | Tenrai API} — `GET /v1/genres/anime`
   *
   * @example
   * ```ts
   * const genres = await client.genres.getAnimeGenres({ filter: 'themes' });
   * genres.data.forEach(g => console.log(`${g.name} (MAL ID: ${g.mal_id})`));
   * ```
   */
  async getAnimeGenres(
    params?: GenreQueryParams,
  ): Promise<TenraiResponse<Genre[]>> {
    return this.client.request<TenraiResponse<Genre[]>>(
      '/genres/anime',
      params,
    );
  }

  /**
   * Retrieve a list of all manga genres (including explicit genres, themes, and demographics).
   * @param params - Optional query parameters to filter the list of genres
   * @returns Promise with the list of manga genres
   * @see {@link https://api.tenrai.org | Tenrai API} — `GET /v1/genres/manga`
   *
   * @example
   * ```ts
   * const genres = await client.genres.getMangaGenres({ filter: 'demographics' });
   * genres.data.forEach(g => console.log(`${g.name} (MAL ID: ${g.mal_id})`));
   * ```
   */
  async getMangaGenres(
    params?: GenreQueryParams,
  ): Promise<TenraiResponse<Genre[]>> {
    return this.client.request<TenraiResponse<Genre[]>>(
      '/genres/manga',
      params,
    );
  }
}
