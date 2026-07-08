import type { TenraiClient } from '../client';
import type {
  TenraiPaginatedResponse,
  Review,
  ReviewQueryParams,
} from '../types';

export class ReviewsEndpoint {
  private client: TenraiClient;

  constructor(client: TenraiClient) {
    this.client = client;
  }

  /**
   * Get recent anime reviews
   * @param params Query parameters
   * @returns Promise with anime reviews data
   */
  async getAnimeReviews(
    params?: ReviewQueryParams,
  ): Promise<TenraiPaginatedResponse<Review>> {
    return this.client.request<TenraiPaginatedResponse<Review>>(
      '/reviews/anime',
      params,
    );
  }

  /**
   * Get recent manga reviews
   * @param params Query parameters
   * @returns Promise with manga reviews data
   */
  async getMangaReviews(
    params?: ReviewQueryParams,
  ): Promise<TenraiPaginatedResponse<Review>> {
    return this.client.request<TenraiPaginatedResponse<Review>>(
      '/reviews/manga',
      params,
    );
  }
}
