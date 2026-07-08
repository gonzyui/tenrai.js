import type { TenraiClient } from '../client';
import type {
  TenraiPaginatedResponse,
  TenraiResponse,
  Person,
  PersonPicture,
  PersonQueryParams,
} from '../types';

export class PeopleEndpoint {
  private client: TenraiClient;

  constructor(client: TenraiClient) {
    this.client = client;
  }

  /**
   * Get person by ID
   * @param id Person ID
   * @returns Promise with person data
   */
  async getById(id: number): Promise<TenraiResponse<Person>> {
    return this.client.request<TenraiResponse<Person>>(`/people/${id}`);
  }

  /**
   * Get person pictures
   * @param id Person ID
   * @returns Promise with person pictures data
   */
  async getPictures(id: number): Promise<TenraiResponse<PersonPicture[]>> {
    return this.client.request<TenraiResponse<PersonPicture[]>>(
      `/people/${id}/pictures`,
    );
  }

  /**
   * Search for people
   * @param params Search parameters
   * @returns Promise with people search results
   */
  async search(
    params?: PersonQueryParams,
  ): Promise<TenraiPaginatedResponse<Person>> {
    return this.client.request<TenraiPaginatedResponse<Person>>(
      '/people',
      params,
    );
  }
}
