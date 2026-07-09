import type { TenraiClient } from '../client';
import type { Anime, Character, TenraiResponse, Manga, Person } from '../types';

export class RandomEndpoint {
  private client: TenraiClient;

  constructor(client: TenraiClient) {
    this.client = client;
  }

  /**
   * Get random anime
   * @returns Promise with random anime data
   */
  async getAnime(): Promise<TenraiResponse<Anime>> {
    return this.client.request<TenraiResponse<Anime>>('/random/anime');
  }

  /**
   * Get random manga
   * @returns Promise with random manga data
   */
  async getManga(): Promise<TenraiResponse<Manga>> {
    return this.client.request<TenraiResponse<Manga>>('/random/manga');
  }

  /**
   * Get random character
   * @returns Promise with random character data
   */
  async getCharacter(): Promise<TenraiResponse<Character>> {
    return this.client.request<TenraiResponse<Character>>('/random/characters');
  }

  /**
   * Get random person
   * @returns Promise with random person data
   */
  async getPerson(): Promise<TenraiResponse<Person>> {
    return this.client.request<TenraiResponse<Person>>('/random/people');
  }
}
