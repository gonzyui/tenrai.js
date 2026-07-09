import type { TenraiClient } from '../client';
import type {
  TenraiPaginatedResponse,
  TenraiResponse,
  Person,
  PersonAnimeRole,
  PersonFull,
  PersonIdsResponse,
  PersonMangaRole,
  PersonPicture,
  PersonQueryParams,
  PersonVoiceRole,
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
   * Get full person details by ID, including anime roles, manga roles, and voice acting roles.
   * @param id - The MAL person ID
   * @returns Promise with full person data
   * @see {@link https://api.tenrai.org | Tenrai API} — `GET /v1/people/{id}/full`
   *
   * @example
   * ```ts
   * const person = await client.people.getFullById(1);
   * console.log(person.data.anime);  // Anime roles
   * console.log(person.data.voices); // Voice acting roles
   * ```
   */
  async getFullById(id: number): Promise<TenraiResponse<PersonFull>> {
    return this.client.request<TenraiResponse<PersonFull>>(`/people/${id}/full`);
  }

  /**
   * Get anime roles of a person.
   * @param id - The MAL person ID
   * @returns Promise with person anime roles data
   * @see {@link https://api.tenrai.org | Tenrai API} — `GET /v1/people/{id}/anime`
   *
   * @example
   * ```ts
   * const roles = await client.people.getAnime(1);
   * roles.data.forEach(r => console.log(`${r.anime.title} - Position: ${r.position}`));
   * ```
   */
  async getAnime(id: number): Promise<TenraiResponse<PersonAnimeRole[]>> {
    return this.client.request<TenraiResponse<PersonAnimeRole[]>>(
      `/people/${id}/anime`,
    );
  }

  /**
   * Get manga roles of a person.
   * @param id - The MAL person ID
   * @returns Promise with person manga roles data
   * @see {@link https://api.tenrai.org | Tenrai API} — `GET /v1/people/{id}/manga`
   *
   * @example
   * ```ts
   * const roles = await client.people.getManga(1);
   * roles.data.forEach(r => console.log(`${r.manga.title} - Position: ${r.position}`));
   * ```
   */
  async getManga(id: number): Promise<TenraiResponse<PersonMangaRole[]>> {
    return this.client.request<TenraiResponse<PersonMangaRole[]>>(
      `/people/${id}/manga`,
    );
  }

  /**
   * Get voice acting roles of a person.
   * @param id - The MAL person ID
   * @returns Promise with person voice acting roles data
   * @see {@link https://api.tenrai.org | Tenrai API} — `GET /v1/people/{id}/voices`
   *
   * @example
   * ```ts
   * const roles = await client.people.getVoices(1);
   * roles.data.forEach(r => console.log(`${r.anime.title} - Character: ${r.character.name} (${r.role})`));
   * ```
   */
  async getVoices(id: number): Promise<TenraiResponse<PersonVoiceRole[]>> {
    return this.client.request<TenraiResponse<PersonVoiceRole[]>>(
      `/people/${id}/voices`,
    );
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

  /**
   * Retrieve all unique MAL person IDs that currently exist and are active.
   *
   * **Requires a Server Key** — pass it via the `X-Server-Key` header
   * when constructing the client.
   *
   * @returns Promise with an array of all person IDs
   * @see {@link https://api.tenrai.org | Tenrai API} — `GET /v1/people/ids`
   *
   * @example
   * ```ts
   * const client = new TenraiClient({
   *   headers: { 'X-Server-Key': 'your-server-key' },
   * });
   * const ids = await client.people.getAllIds();
   * console.log(ids.data); // [1, 2, 8, ...]
   * ```
   */
  async getAllIds(): Promise<PersonIdsResponse> {
    return this.client.request<PersonIdsResponse>('/people/ids');
  }
}
