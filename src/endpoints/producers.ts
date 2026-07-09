import type { TenraiClient } from '../client';
import type {
  TenraiPaginatedResponse,
  TenraiResponse,
  Producer,
  ProducerExternal,
  ProducerFull,
  ProducerIdsResponse,
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
   * Get full producer details by ID, including titles, external links, etc.
   * @param id - The MAL producer ID
   * @returns Promise with full producer data
   * @see {@link https://api.tenrai.org | Tenrai API} — `GET /v1/producers/{id}/full`
   *
   * @example
   * ```ts
   * const producer = await client.producers.getFullById(1);
   * console.log(producer.data.established); // Established date
   * console.log(producer.data.external);    // External links
   * ```
   */
  async getFullById(id: number): Promise<TenraiResponse<ProducerFull>> {
    return this.client.request<TenraiResponse<ProducerFull>>(
      `/producers/${id}/full`,
    );
  }

  /**
   * Get external links for a producer.
   * @param id - The MAL producer ID
   * @returns Promise with producer external links data
   * @see {@link https://api.tenrai.org | Tenrai API} — `GET /v1/producers/{id}/external`
   *
   * @example
   * ```ts
   * const links = await client.producers.getExternal(1);
   * links.data.forEach(link => console.log(`${link.name}: ${link.url}`));
   * ```
   */
  async getExternal(id: number): Promise<TenraiResponse<ProducerExternal[]>> {
    return this.client.request<TenraiResponse<ProducerExternal[]>>(
      `/producers/${id}/external`,
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

  /**
   * Retrieve all unique MAL producer IDs that currently exist and are active.
   *
   * **Requires a Server Key** — pass it via the `X-Server-Key` header
   * when constructing the client.
   *
   * @returns Promise with an array of all producer IDs
   * @see {@link https://api.tenrai.org | Tenrai API} — `GET /v1/producers/ids`
   *
   * @example
   * ```ts
   * const client = new TenraiClient({
   *   headers: { 'X-Server-Key': 'your-server-key' },
   * });
   * const ids = await client.producers.getAllIds();
   * console.log(ids.data); // [1, 2, 3, ...]
   * ```
   */
  async getAllIds(): Promise<ProducerIdsResponse> {
    return this.client.request<ProducerIdsResponse>('/producers/ids');
  }
}
