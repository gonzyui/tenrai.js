import type { TenraiClient } from '../client';
import type {
  Character,
  CharacterAnimeAppearance,
  CharacterFull,
  CharacterIdsResponse,
  CharacterMangaAppearance,
  CharacterPicture,
  CharacterQueryParams,
  CharacterVoiceActor,
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
   * Get full character details by ID, including animeography, mangaography, and voice actors.
   * @param id - The MAL character ID
   * @returns Promise with full character data
   * @see {@link https://api.tenrai.org | Tenrai API} — `GET /v1/characters/{id}/full`
   *
   * @example
   * ```ts
   * const char = await client.characters.getFullById(1);
   * console.log(char.data.animeography); // Anime appearances
   * console.log(char.data.voices);       // Voice actors
   * ```
   */
  async getFullById(id: number): Promise<TenraiResponse<CharacterFull>> {
    return this.client.request<TenraiResponse<CharacterFull>>(
      `/characters/${id}/full`,
    );
  }

  /**
   * Get anime appearances of a character.
   * @param id - The MAL character ID
   * @returns Promise with character anime appearances data
   * @see {@link https://api.tenrai.org | Tenrai API} — `GET /v1/characters/{id}/anime`
   *
   * @example
   * ```ts
   * const appearances = await client.characters.getAnime(1);
   * appearances.data.forEach(app => console.log(`${app.anime.title} - Role: ${app.role}`));
   * ```
   */
  async getAnime(
    id: number,
  ): Promise<TenraiResponse<CharacterAnimeAppearance[]>> {
    return this.client.request<TenraiResponse<CharacterAnimeAppearance[]>>(
      `/characters/${id}/anime`,
    );
  }

  /**
   * Get manga appearances of a character.
   * @param id - The MAL character ID
   * @returns Promise with character manga appearances data
   * @see {@link https://api.tenrai.org | Tenrai API} — `GET /v1/characters/{id}/manga`
   *
   * @example
   * ```ts
   * const appearances = await client.characters.getManga(1);
   * appearances.data.forEach(app => console.log(`${app.manga.title} - Role: ${app.role}`));
   * ```
   */
  async getManga(
    id: number,
  ): Promise<TenraiResponse<CharacterMangaAppearance[]>> {
    return this.client.request<TenraiResponse<CharacterMangaAppearance[]>>(
      `/characters/${id}/manga`,
    );
  }

  /**
   * Get voice actors for a character.
   * @param id - The MAL character ID
   * @returns Promise with character voice actors data
   * @see {@link https://api.tenrai.org | Tenrai API} — `GET /v1/characters/{id}/voices`
   *
   * @example
   * ```ts
   * const voiceActors = await client.characters.getVoices(1);
   * voiceActors.data.forEach(va => console.log(`${va.person.name} (${va.language})`));
   * ```
   */
  async getVoices(id: number): Promise<TenraiResponse<CharacterVoiceActor[]>> {
    return this.client.request<TenraiResponse<CharacterVoiceActor[]>>(
      `/characters/${id}/voices`,
    );
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

  /**
   * Retrieve all unique MAL character IDs that currently exist and are active.
   *
   * **Requires a Server Key** — pass it via the `X-Server-Key` header
   * when constructing the client.
   *
   * @returns Promise with an array of all character IDs
   * @see {@link https://api.tenrai.org | Tenrai API} — `GET /v1/characters/ids`
   *
   * @example
   * ```ts
   * const client = new TenraiClient({
   *   headers: { 'X-Server-Key': 'your-server-key' },
   * });
   * const ids = await client.characters.getAllIds();
   * console.log(ids.data); // [1, 2, 30, ...]
   * ```
   */
  async getAllIds(): Promise<CharacterIdsResponse> {
    return this.client.request<CharacterIdsResponse>('/characters/ids');
  }
}
