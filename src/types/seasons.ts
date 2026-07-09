import type { Anime } from './anime';

export interface Season {
  year: number;
  seasons: string[];
}

export interface SeasonalAnime extends Anime {
  // Additional properties specific to seasonal anime
}

/**
 * Query parameters for seasonal anime retrieval.
 */
export interface SeasonQueryParams {
  /**
   * Filter seasonal anime by entry type.
   */
  filter?: 'tv' | 'movie' | 'ova' | 'special' | 'ona' | 'music';
  /**
   * Flag — pass `true` to filter out NSFW entries.
   */
  sfw?: boolean;
  /**
   * Flag — pass `true` to include unapproved entries in results.
   */
  unapproved?: boolean;
  /**
   * Flag — pass `true` to include TV series continuing from a previous season.
   */
  continuing?: boolean;
  /**
   * Flag — pass `true` to filter out kids entries.
   */
  kids?: boolean;
  /**
   * Field to order results by (default: score).
   */
  order_by?: 'score' | 'members' | 'start_date';
  /**
   * Sorting order (default: desc).
   */
  sort?: 'asc' | 'desc';
  /**
   * Page number to retrieve (default: 1).
   */
  page?: number;
  /**
   * Results per page (default: 25, max: 50).
   */
  limit?: number;
}
