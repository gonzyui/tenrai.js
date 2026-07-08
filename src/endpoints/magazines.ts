import type { TenraiClient } from '../client';
import type {
  TenraiPaginatedResponse,
  Magazine,
  MagazineQueryParams,
} from '../types';

export class MagazinesEndpoint {
  private client: TenraiClient;

  constructor(client: TenraiClient) {
    this.client = client;
  }

  /**
   * Get magazine by ID
   * @param id Magazine ID
   * @param page Page number
   * @param limit Results per page
   * @returns Promise with magazine data
   */
  async getById(
    id: number,
    page?: number,
    limit?: number,
  ): Promise<TenraiPaginatedResponse<Magazine>> {
    return this.client.request<TenraiPaginatedResponse<Magazine>>(
      `/magazines/${id}`,
      { page, limit },
    );
  }

  /**
   * Get all magazines
   * @param params Query parameters
   * @returns Promise with magazines data
   */
  async getAll(
    params?: MagazineQueryParams,
  ): Promise<TenraiPaginatedResponse<Magazine>> {
    return this.client.request<TenraiPaginatedResponse<Magazine>>(
      '/magazines',
      params,
    );
  }
}
