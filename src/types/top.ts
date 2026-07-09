import type { Anime } from './anime';
import type { Manga } from './manga';
import type { Character } from './characters';
import type { Person } from './people';

export interface TopAnime extends Anime {
  // Additional properties specific to top anime
}

export interface TopManga extends Manga {
  // Additional properties specific to top manga
}

export interface TopCharacter extends Character {
  // Additional properties specific to top characters
}

export interface TopPerson extends Person {
  // Additional properties specific to top people
}

export interface TopReview {
  mal_id: number;
  url: string;
  type: string;
  reactions: {
    overall: number;
    nice: number;
    love_it: number;
    funny: number;
    confusing: number;
    informative: number;
    well_written: number;
    creative: number;
  };
  date: string;
  review: string;
  score: number;
  tags: string[];
  is_spoiler: boolean;
  is_preliminary: boolean;
  episodes_watched?: number;
  chapters_read?: number;
  entry: {
    mal_id: number;
    url: string;
    images: {
      jpg: {
        image_url: string;
        small_image_url?: string;
        large_image_url?: string;
      };
      webp?: {
        image_url: string;
        small_image_url?: string;
        large_image_url?: string;
      };
    };
    title: string;
  };
  user: {
    username: string;
    url: string;
    images: {
      jpg: {
        image_url: string;
      };
      webp?: {
        image_url: string;
      };
    };
  };
}

/**
 * Base query parameters for top lists.
 */
export interface TopQueryParams {
  /**
   * Page number to retrieve (default: 1).
   */
  page?: number;
  /**
   * Results per page (default: 25, max: 50).
   */
  limit?: number;
}

/**
 * Query parameters for top anime retrieval.
 */
export interface TopAnimeQueryParams extends TopQueryParams {
  /**
   * Filter top anime by entry type.
   */
  type?: 'tv' | 'movie' | 'ova' | 'special' | 'ona' | 'music' | 'cm' | 'pv' | 'tv_special';
  /**
   * Filter top anime by category/ranking type.
   */
  filter?: 'airing' | 'upcoming' | 'bypopularity' | 'favorite';
  /**
   * Filter by age rating.
   */
  rating?: 'g' | 'pg' | 'pg13' | 'r17' | 'r' | 'rx';
  /**
   * Flag — pass `true` to filter out NSFW entries.
   */
  sfw?: boolean;
}

/**
 * Query parameters for top manga retrieval.
 */
export interface TopMangaQueryParams extends TopQueryParams {
  /**
   * Filter top manga by entry type.
   */
  type?: 'manga' | 'novel' | 'lightnovel' | 'oneshot' | 'doujin' | 'manhwa' | 'manhua';
  /**
   * Filter top manga by publishing/ranking status.
   */
  filter?: 'publishing' | 'upcoming' | 'bypopularity' | 'favorite';
}

/**
 * Query parameters for top reviews retrieval.
 */
export interface TopReviewQueryParams extends TopQueryParams {
  /**
   * Filter reviews by resource type.
   */
  type?: 'anime' | 'manga';
}

