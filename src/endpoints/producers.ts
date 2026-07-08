import type { TenraiClient } from '../client';
import type {
  TenraiPaginatedResponse,
  Producer,
  ProducerQueryParams,
} from '../types';

export class ProducersEndpoint {
  private client: TenraiClient;

  constructor(client: TenraiClient) {
    this.client = client;
  }

  /**
   * Get producer by ID
   * @param id Producer ID
   * @param page Page number
   * @param limit Results per page
   * @returns Promise with producer data
   */
  async getById(
    id: number,
    page?: number,
    limit?: number,
  ): Promise<TenraiPaginatedResponse<Producer>> {
    return this.client.request<TenraiPaginatedResponse<Producer>>(
      `/producers/${id}`,
      { page, limit },
    );
  }

  /**
   * Get all producers
   * @param params Query parameters
   * @returns Promise with producers data
   */
  async getAll(
    params?: ProducerQueryParams,
  ): Promise<TenraiPaginatedResponse<Producer>> {
    return this.client.request<TenraiPaginatedResponse<Producer>>(
      '/producers',
      params,
    );
  }
}
