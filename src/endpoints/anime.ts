import type { TenraiClient } from '../client';
import type {
  Anime,
  AnimeCharacter,
  AnimeEpisode,
  AnimeExternal,
  AnimeForum,
  AnimeNews,
  AnimePicture,
  AnimeQueryParams,
  AnimeRecommendation,
  AnimeRelation,
  AnimeReview,
  AnimeStaff,
  AnimeStatistics,
  AnimeStreaming,
  AnimeTheme,
  AnimeVideo,
  TenraiPaginatedResponse,
  TenraiResponse,
} from '../types';

export class AnimeEndpoint {
  private client: TenraiClient;

  constructor(client: TenraiClient) {
    this.client = client;
  }

  /**
   * Get anime by ID
   * @param id Anime ID
   * @returns Promise with anime data
   */
  async getById(id: number): Promise<TenraiResponse<Anime>> {
    return this.client.request<TenraiResponse<Anime>>(`/anime/${id}`);
  }

  /**
   * Get anime characters and voice actors
   * @param id Anime ID
   * @returns Promise with anime characters data
   */
  async getCharacters(id: number): Promise<TenraiResponse<AnimeCharacter[]>> {
    return this.client.request<TenraiResponse<AnimeCharacter[]>>(
      `/anime/${id}/characters`,
    );
  }

  /**
   * Get anime staff
   * @param id Anime ID
   * @returns Promise with anime staff data
   */
  async getStaff(id: number): Promise<TenraiResponse<AnimeStaff[]>> {
    return this.client.request<TenraiResponse<AnimeStaff[]>>(
      `/anime/${id}/staff`,
    );
  }

  /**
   * Get anime episodes
   * @param id Anime ID
   * @param page Page number
   * @returns Promise with anime episodes data
   */
  async getEpisodes(
    id: number,
    page?: number,
  ): Promise<TenraiPaginatedResponse<AnimeEpisode>> {
    return this.client.request<TenraiPaginatedResponse<AnimeEpisode>>(
      `/anime/${id}/episodes`,
      { page },
    );
  }

  /**
   * Get anime episode by ID
   * @param animeId Anime ID
   * @param episodeId Episode ID
   * @returns Promise with anime episode data
   */
  async getEpisodeById(
    animeId: number,
    episodeId: number,
  ): Promise<TenraiResponse<AnimeEpisode>> {
    return this.client.request<TenraiResponse<AnimeEpisode>>(
      `/anime/${animeId}/episodes/${episodeId}`,
    );
  }

  /**
   * Get anime news
   * @param id Anime ID
   * @param page Page number
   * @returns Promise with anime news data
   */
  async getNews(
    id: number,
    page?: number,
  ): Promise<TenraiPaginatedResponse<AnimeNews>> {
    return this.client.request<TenraiPaginatedResponse<AnimeNews>>(
      `/anime/${id}/news`,
      { page },
    );
  }

  /**
   * Get anime forum topics
   * @param id Anime ID
   * @param filter Filter topics (all, episode, other)
   * @returns Promise with anime forum data
   */
  async getForum(
    id: number,
    filter?: 'all' | 'episode' | 'other',
  ): Promise<TenraiResponse<AnimeForum[]>> {
    return this.client.request<TenraiResponse<AnimeForum[]>>(
      `/anime/${id}/forum`,
      { filter },
    );
  }

  /**
   * Get anime videos
   * @param id Anime ID
   * @returns Promise with anime videos data
   */
  async getVideos(id: number): Promise<TenraiResponse<AnimeVideo>> {
    return this.client.request<TenraiResponse<AnimeVideo>>(
      `/anime/${id}/videos`,
    );
  }

  /**
   * Get anime pictures
   * @param id Anime ID
   * @returns Promise with anime pictures data
   */
  async getPictures(id: number): Promise<TenraiResponse<AnimePicture[]>> {
    return this.client.request<TenraiResponse<AnimePicture[]>>(
      `/anime/${id}/pictures`,
    );
  }

  /**
   * Get anime statistics
   * @param id Anime ID
   * @returns Promise with anime statistics data
   */
  async getStatistics(id: number): Promise<TenraiResponse<AnimeStatistics>> {
    return this.client.request<TenraiResponse<AnimeStatistics>>(
      `/anime/${id}/statistics`,
    );
  }

  /**
   * Get more anime info
   * @param id Anime ID
   * @returns Promise with more anime info
   */
  async getMoreInfo(id: number): Promise<TenraiResponse<string>> {
    return this.client.request<TenraiResponse<string>>(`/anime/${id}/moreinfo`);
  }

  /**
   * Get anime recommendations
   * @param id Anime ID
   * @returns Promise with anime recommendations data
   */
  async getRecommendations(
    id: number,
  ): Promise<TenraiResponse<AnimeRecommendation[]>> {
    return this.client.request<TenraiResponse<AnimeRecommendation[]>>(
      `/anime/${id}/recommendations`,
    );
  }

  /**
   * Get anime reviews
   * @param id Anime ID
   * @param page Page number
   * @returns Promise with anime reviews data
   */
  async getReviews(
    id: number,
    page?: number,
  ): Promise<TenraiPaginatedResponse<AnimeReview>> {
    return this.client.request<TenraiPaginatedResponse<AnimeReview>>(
      `/anime/${id}/reviews`,
      { page },
    );
  }

  /**
   * Get anime relations
   * @param id Anime ID
   * @returns Promise with anime relations data
   */
  async getRelations(id: number): Promise<TenraiResponse<AnimeRelation[]>> {
    return this.client.request<TenraiResponse<AnimeRelation[]>>(
      `/anime/${id}/relations`,
    );
  }

  /**
   * Get anime themes
   * @param id Anime ID
   * @returns Promise with anime themes data
   */
  async getThemes(id: number): Promise<TenraiResponse<AnimeTheme>> {
    return this.client.request<TenraiResponse<AnimeTheme>>(
      `/anime/${id}/themes`,
    );
  }

  /**
   * Get anime external links
   * @param id Anime ID
   * @returns Promise with anime external links data
   */
  async getExternal(id: number): Promise<TenraiResponse<AnimeExternal[]>> {
    return this.client.request<TenraiResponse<AnimeExternal[]>>(
      `/anime/${id}/external`,
    );
  }

  /**
   * Get anime streaming links
   * @param id Anime ID
   * @returns Promise with anime streaming links data
   */
  async getStreaming(id: number): Promise<TenraiResponse<AnimeStreaming[]>> {
    return this.client.request<TenraiResponse<AnimeStreaming[]>>(
      `/anime/${id}/streaming`,
    );
  }

  /**
   * Search for anime
   * @param params Search parameters
   * @returns Promise with anime search results
   */
  async search(
    params?: AnimeQueryParams,
  ): Promise<TenraiPaginatedResponse<Anime>> {
    return this.client.request<TenraiPaginatedResponse<Anime>>(
      '/anime',
      params,
    );
  }
}
