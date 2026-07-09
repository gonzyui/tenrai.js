import type { TenraiClient } from '../client';
import type {
  TenraiPaginatedResponse,
  TenraiResponse,
  Manga,
  MangaCharacter,
  MangaExternal,
  MangaFullDetails,
  MangaIdsResponse,
  MangaNews,
  MangaPicture,
  MangaQueryParams,
  MangaRecommendation,
  MangaRelation,
  MangaReview,
  MangaStatistics,
  ReviewQueryParams,
} from '../types';

export class MangaEndpoint {
  private client: TenraiClient;

  constructor(client: TenraiClient) {
    this.client = client;
  }

  /**
   * Get manga by ID
   * @param id Manga ID
   * @returns Promise with manga data
   */
  async getById(id: number): Promise<TenraiResponse<Manga>> {
    return this.client.request<TenraiResponse<Manga>>(`/manga/${id}`);
  }

  /**
   * Get full manga details by ID, including relations and external links.
   * @param id - The MAL manga ID
   * @returns Promise with full manga data
   * @see {@link https://api.tenrai.org | Tenrai API} — `GET /v1/manga/{id}/full`
   *
   * @example
   * ```ts
   * const manga = await client.manga.getFullById(13);
   * console.log(manga.data.relations); // Related manga/anime
   * console.log(manga.data.external);  // External links
   * ```
   */
  async getFullById(id: number): Promise<TenraiResponse<MangaFullDetails>> {
    return this.client.request<TenraiResponse<MangaFullDetails>>(
      `/manga/${id}/full`,
    );
  }

  /**
   * Get manga characters
   * @param id Manga ID
   * @returns Promise with manga characters data
   */
  async getCharacters(id: number): Promise<TenraiResponse<MangaCharacter[]>> {
    return this.client.request<TenraiResponse<MangaCharacter[]>>(
      `/manga/${id}/characters`,
    );
  }

  /**
   * Get manga news
   * @param id Manga ID
   * @param page Page number
   * @returns Promise with manga news data
   */
  async getNews(
    id: number,
    page?: number,
  ): Promise<TenraiPaginatedResponse<MangaNews>> {
    return this.client.request<TenraiPaginatedResponse<MangaNews>>(
      `/manga/${id}/news`,
      { page },
    );
  }



  /**
   * Get manga pictures
   * @param id Manga ID
   * @returns Promise with manga pictures data
   */
  async getPictures(id: number): Promise<TenraiResponse<MangaPicture[]>> {
    return this.client.request<TenraiResponse<MangaPicture[]>>(
      `/manga/${id}/pictures`,
    );
  }

  /**
   * Get manga statistics
   * @param id Manga ID
   * @returns Promise with manga statistics data
   */
  async getStatistics(id: number): Promise<TenraiResponse<MangaStatistics>> {
    return this.client.request<TenraiResponse<MangaStatistics>>(
      `/manga/${id}/statistics`,
    );
  }

  /**
   * Get more manga info
   * @param id Manga ID
   * @returns Promise with more manga info
   */
  async getMoreInfo(id: number): Promise<TenraiResponse<string>> {
    return this.client.request<TenraiResponse<string>>(`/manga/${id}/moreinfo`);
  }

  /**
   * Get manga recommendations
   * @param id Manga ID
   * @returns Promise with manga recommendations data
   */
  async getRecommendations(
    id: number,
  ): Promise<TenraiResponse<MangaRecommendation[]>> {
    return this.client.request<TenraiResponse<MangaRecommendation[]>>(
      `/manga/${id}/recommendations`,
    );
  }

  /**
   * Get manga reviews
   * @param id Manga ID
   * @param params Query parameters (page, limit, spoilers, preliminary, sort, sentiment)
   * @returns Promise with manga reviews data
   */
  async getReviews(
    id: number,
    params?: ReviewQueryParams,
  ): Promise<TenraiPaginatedResponse<MangaReview>> {
    return this.client.request<TenraiPaginatedResponse<MangaReview>>(
      `/manga/${id}/reviews`,
      params,
    );
  }

  /**
   * Get manga relations
   * @param id Manga ID
   * @returns Promise with manga relations data
   */
  async getRelations(id: number): Promise<TenraiResponse<MangaRelation[]>> {
    return this.client.request<TenraiResponse<MangaRelation[]>>(
      `/manga/${id}/relations`,
    );
  }

  /**
   * Get manga external links
   * @param id Manga ID
   * @returns Promise with manga external links data
   */
  async getExternal(id: number): Promise<TenraiResponse<MangaExternal[]>> {
    return this.client.request<TenraiResponse<MangaExternal[]>>(
      `/manga/${id}/external`,
    );
  }

  /**
   * Search for manga
   * @param params Search parameters
   * @returns Promise with manga search results
   */
  async search(
    params?: MangaQueryParams,
  ): Promise<TenraiPaginatedResponse<Manga>> {
    return this.client.request<TenraiPaginatedResponse<Manga>>(
      '/manga',
      params,
    );
  }

  /**
   * Retrieve all unique MAL manga IDs that currently exist and are active.
   *
   * **Requires a Server Key** — pass it via the `X-Server-Key` header
   * when constructing the client.
   *
   * @returns Promise with an array of all manga IDs
   * @see {@link https://api.tenrai.org | Tenrai API} — `GET /v1/manga/ids`
   *
   * @example
   * ```ts
   * const client = new TenraiClient({
   *   headers: { 'X-Server-Key': 'your-server-key' },
   * });
   * const ids = await client.manga.getAllIds();
   * console.log(ids.data); // [1, 2, 13, 21, ...]
   * ```
   */
  async getAllIds(): Promise<MangaIdsResponse> {
    return this.client.request<MangaIdsResponse>('/manga/ids');
  }
}
