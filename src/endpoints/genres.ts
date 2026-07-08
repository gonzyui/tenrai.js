import type { TenraiClient } from '../client';
import type { Genre, GenreQueryParams, TenraiResponse } from '../types';

export class GenresEndpoint {
  private client: TenraiClient;

  constructor(client: TenraiClient) {
    this.client = client;
  }

  /**
   * Get anime genres
   * @param params Query parameters
   * @returns Promise with anime genres data
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
   * Get manga genres
   * @param params Query parameters
   * @returns Promise with manga genres data
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
