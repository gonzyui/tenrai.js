import type { TenraiClient } from '../client';
import type {
  TenraiPaginatedResponse,
  TopAnime,
  TopAnimeQueryParams,
  TopCharacter,
  TopManga,
  TopMangaQueryParams,
  TopPerson,
  TopQueryParams,
  TopReview,
  TopReviewQueryParams,
} from '../types';

export class TopEndpoint {
  private client: TenraiClient;

  constructor(client: TenraiClient) {
    this.client = client;
  }

  /**
   * Get top anime
   * @param params Query parameters
   * @returns Promise with top anime data
   */
  async getAnime(
    params?: TopAnimeQueryParams,
  ): Promise<TenraiPaginatedResponse<TopAnime>> {
    return this.client.request<TenraiPaginatedResponse<TopAnime>>(
      '/top/anime',
      params,
    );
  }

  /**
   * Get top manga
   * @param params Query parameters
   * @returns Promise with top manga data
   */
  async getManga(
    params?: TopMangaQueryParams,
  ): Promise<TenraiPaginatedResponse<TopManga>> {
    return this.client.request<TenraiPaginatedResponse<TopManga>>(
      '/top/manga',
      params,
    );
  }

  /**
   * Get top characters
   * @param params Query parameters
   * @returns Promise with top characters data
   */
  async getCharacters(
    params?: TopQueryParams,
  ): Promise<TenraiPaginatedResponse<TopCharacter>> {
    return this.client.request<TenraiPaginatedResponse<TopCharacter>>(
      '/top/characters',
      params,
    );
  }

  /**
   * Get top people
   * @param params Query parameters
   * @returns Promise with top people data
   */
  async getPeople(
    params?: TopQueryParams,
  ): Promise<TenraiPaginatedResponse<TopPerson>> {
    return this.client.request<TenraiPaginatedResponse<TopPerson>>(
      '/top/people',
      params,
    );
  }

  /**
   * Get top reviews
   * @param params Query parameters
   * @returns Promise with top reviews data
   */
  async getReviews(
    params?: TopReviewQueryParams,
  ): Promise<TenraiPaginatedResponse<TopReview>> {
    return this.client.request<TenraiPaginatedResponse<TopReview>>(
      '/top/reviews',
      params,
    );
  }
}
