import type { TenraiClient } from '../client';
import type {
  TenraiPaginatedResponse,
  Magazine,
  MagazineQueryParams,
} from '../types';

/**
 * Endpoint wrapper for MAL magazines.
 * Provides access to the `/magazines` resource.
 */
export class MagazinesEndpoint {
  private client: TenraiClient;

  constructor(client: TenraiClient) {
    this.client = client;
  }

  /**
   * Retrieve a paginated list of magazines, publishing counts, and metadata.
   * @param params - Optional query parameters for pagination, sorting, and name filtering
   * @returns Promise with a paginated list of magazines
   * @see {@link https://api.tenrai.org | Tenrai API} — `GET /v1/magazines`
   *
   * @example
   * ```ts
   * const magazines = await client.magazines.getAll({ q: 'shonen', limit: 10 });
   * magazines.data.forEach(mag => console.log(`${mag.name} has ${mag.count} manga published`));
   * ```
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
