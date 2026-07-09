import type { Image } from './common';

export interface Review {
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
    images: Image;
    title: string;
  };
  user: {
    username: string;
    url: string;
    images: Image;
  };
}

/**
 * Query parameters for reviews search and filtering.
 */
export interface ReviewQueryParams {
  /**
   * Page number to retrieve (default: 1).
   */
  page?: number;
  /**
   * Results per page (default: 50, max: 100).
   */
  limit?: number;
  /**
   * Filter reviews by preliminary status.
   * Pass `true` to include them, `false` to exclude, or `'only'` to exclusively retrieve preliminary reviews.
   */
  preliminary?: boolean | 'only';
  /**
   * Filter reviews by spoiler status.
   * Pass `true` to include them, `false` to exclude, or `'only'` to exclusively retrieve spoiler reviews.
   */
  spoilers?: boolean | 'only';
  /**
   * Sort reviews by date or helpfulness (default: most_helpful).
   */
  sort?: 'newest' | 'oldest' | 'most_helpful';
  /**
   * Filter reviews by user sentiment.
   */
  sentiment?: 'recommended' | 'mixed_feelings' | 'not_recommended';
}
