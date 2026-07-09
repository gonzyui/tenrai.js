import type { TenraiClient } from '../client';
import type { Anime, Character, TenraiResponse, Manga, Person } from '../types';

/**
 * Endpoint wrapper for pulling random MAL records.
 * Provides access to `/random/anime`, `/random/manga`, `/random/characters`, and `/random/people`.
 */
export class RandomEndpoint {
  private client: TenraiClient;

  constructor(client: TenraiClient) {
    this.client = client;
  }

  /**
   * Retrieve a random anime entry from the database.
   * @returns Promise with a random anime's details
   * @see {@link https://api.tenrai.org | Tenrai API} — `GET /v1/random/anime`
   *
   * @example
   * ```ts
   * const randomAnime = await client.random.getAnime();
   * console.log(`Random anime pick: ${randomAnime.data.title}`);
   * ```
   */
  async getAnime(): Promise<TenraiResponse<Anime>> {
    return this.client.request<TenraiResponse<Anime>>('/random/anime');
  }

  /**
   * Retrieve a random manga entry from the database.
   * @returns Promise with a random manga's details
   * @see {@link https://api.tenrai.org | Tenrai API} — `GET /v1/random/manga`
   *
   * @example
   * ```ts
   * const randomManga = await client.random.getManga();
   * console.log(`Random manga pick: ${randomManga.data.title}`);
   * ```
   */
  async getManga(): Promise<TenraiResponse<Manga>> {
    return this.client.request<TenraiResponse<Manga>>('/random/manga');
  }

  /**
   * Retrieve a random character entry from the database.
   * @returns Promise with a random character's details
   * @see {@link https://api.tenrai.org | Tenrai API} — `GET /v1/random/characters`
   *
   * @example
   * ```ts
   * const randomChar = await client.random.getCharacter();
   * console.log(`Random character pick: ${randomChar.data.name}`);
   * ```
   */
  async getCharacter(): Promise<TenraiResponse<Character>> {
    return this.client.request<TenraiResponse<Character>>('/random/characters');
  }

  /**
   * Retrieve a random person entry from the database.
   * @returns Promise with a random person's details
   * @see {@link https://api.tenrai.org | Tenrai API} — `GET /v1/random/people`
   *
   * @example
   * ```ts
   * const randomPerson = await client.random.getPerson();
   * console.log(`Random person pick: ${randomPerson.data.name}`);
   * ```
   */
  async getPerson(): Promise<TenraiResponse<Person>> {
    return this.client.request<TenraiResponse<Person>>('/random/people');
  }
}
