import type { TenraiClient } from '../client';
import type {
  Character,
  CharacterPicture,
  CharacterQueryParams,
  TenraiPaginatedResponse,
  TenraiResponse,
} from '../types';

export class CharactersEndpoint {
  private client: TenraiClient;

  constructor(client: TenraiClient) {
    this.client = client;
  }

  /**
   * Get character by ID
   * @param id Character ID
   * @returns Promise with character data
   */
  async getById(id: number): Promise<TenraiResponse<Character>> {
    return this.client.request<TenraiResponse<Character>>(`/characters/${id}`);
  }

  /**
   * Get character pictures
   * @param id Character ID
   * @returns Promise with character pictures data
   */
  async getPictures(id: number): Promise<TenraiResponse<CharacterPicture[]>> {
    return this.client.request<TenraiResponse<CharacterPicture[]>>(
      `/characters/${id}/pictures`,
    );
  }

  /**
   * Search for characters
   * @param params Search parameters
   * @returns Promise with character search results
   */
  async search(
    params?: CharacterQueryParams,
  ): Promise<TenraiPaginatedResponse<Character>> {
    return this.client.request<TenraiPaginatedResponse<Character>>(
      '/characters',
      params,
    );
  }
}
