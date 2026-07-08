import type { TenraiClient } from '../client';
import type {
  TenraiPaginatedResponse,
  Recommendation,
  RecommendationQueryParams,
} from '../types';

export class RecommendationsEndpoint {
  private client: TenraiClient;

  constructor(client: TenraiClient) {
    this.client = client;
  }

  /**
   * Get recent anime recommendations
   * @param params Query parameters
   * @returns Promise with anime recommendations data
   */
  async getAnimeRecommendations(
    params?: RecommendationQueryParams,
  ): Promise<TenraiPaginatedResponse<Recommendation>> {
    return this.client.request<TenraiPaginatedResponse<Recommendation>>(
      '/recommendations/anime',
      params,
    );
  }

  /**
   * Get recent manga recommendations
   * @param params Query parameters
   * @returns Promise with manga recommendations data
   */
  async getMangaRecommendations(
    params?: RecommendationQueryParams,
  ): Promise<TenraiPaginatedResponse<Recommendation>> {
    return this.client.request<TenraiPaginatedResponse<Recommendation>>(
      '/recommendations/manga',
      params,
    );
  }
}
