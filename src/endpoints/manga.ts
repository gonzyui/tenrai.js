import type { TenraiClient } from '../client';
import type {
  TenraiPaginatedResponse,
  TenraiResponse,
  Manga,
  MangaCharacter,
  MangaExternal,
  MangaForum,
  MangaNews,
  MangaPicture,
  MangaQueryParams,
  MangaRecommendation,
  MangaRelation,
  MangaReview,
  MangaStatistics,
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
   * Get manga forum topics
   * @param id Manga ID
   * @returns Promise with manga forum data
   */
  async getForum(id: number): Promise<TenraiResponse<MangaForum[]>> {
    return this.client.request<TenraiResponse<MangaForum[]>>(
      `/manga/${id}/forum`,
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
   * @param page Page number
   * @returns Promise with manga reviews data
   */
  async getReviews(
    id: number,
    page?: number,
  ): Promise<TenraiPaginatedResponse<MangaReview>> {
    return this.client.request<TenraiPaginatedResponse<MangaReview>>(
      `/manga/${id}/reviews`,
      { page },
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
}
