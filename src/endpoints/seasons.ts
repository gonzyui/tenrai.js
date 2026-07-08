import type { TenraiClient } from '../client';
import type {
  TenraiPaginatedResponse,
  TenraiResponse,
  Season,
  SeasonQueryParams,
  SeasonalAnime,
} from '../types';

export class SeasonsEndpoint {
  private client: TenraiClient;

  constructor(client: TenraiClient) {
    this.client = client;
  }

  /**
   * Get available seasons
   * @returns Promise with available seasons data
   */
  async getList(): Promise<TenraiResponse<Season[]>> {
    return this.client.request<TenraiResponse<Season[]>>('/seasons');
  }

  /**
   * Get seasonal anime
   * @param year Year
   * @param season Season (winter, spring, summer, fall)
   * @param params Query parameters
   * @returns Promise with seasonal anime data
   */
  async getSeason(
    year: number,
    season: 'winter' | 'spring' | 'summer' | 'fall',
    params?: SeasonQueryParams,
  ): Promise<TenraiPaginatedResponse<SeasonalAnime>> {
    return this.client.request<TenraiPaginatedResponse<SeasonalAnime>>(
      `/seasons/${year}/${season}`,
      params,
    );
  }

  /**
   * Get current season anime
   * @param params Query parameters
   * @returns Promise with current season anime data
   */
  async getCurrent(
    params?: SeasonQueryParams,
  ): Promise<TenraiPaginatedResponse<SeasonalAnime>> {
    return this.client.request<TenraiPaginatedResponse<SeasonalAnime>>(
      '/seasons/now',
      params,
    );
  }

  /**
   * Get upcoming season anime
   * @param params Query parameters
   * @returns Promise with upcoming season anime data
   */
  async getUpcoming(
    params?: SeasonQueryParams,
  ): Promise<TenraiPaginatedResponse<SeasonalAnime>> {
    return this.client.request<TenraiPaginatedResponse<SeasonalAnime>>(
      '/seasons/upcoming',
      params,
    );
  }
}
