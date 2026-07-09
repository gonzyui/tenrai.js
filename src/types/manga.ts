import type { DateRange, Image, Title } from './common';

export interface Manga {
  mal_id: number;
  url: string;
  images: Image;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string | null;
  title_japanese: string | null;
  title_synonyms: string[];
  type: string | null;
  chapters: number | null;
  volumes: number | null;
  status: string | null;
  publishing: boolean;
  published: DateRange;
  score: number | null;
  scored_by: number | null;
  rank: number | null;
  popularity: number | null;
  members: number | null;
  favorites: number | null;
  synopsis: string | null;
  background: string | null;
  authors: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  serializations: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  genres: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  explicit_genres: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  themes: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  demographics: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
}

/**
 * Full manga details including relations and external links.
 * Returned by the `/manga/{id}/full` endpoint.
 */
export interface MangaFullDetails extends Manga {
  relations: MangaRelation[];
  external: MangaExternal[];
}

export interface MangaCharacter {
  character: {
    mal_id: number;
    url: string;
    images: Image;
    name: string;
  };
  role: string;
}

export interface MangaNews {
  mal_id: number;
  url: string;
  title: string;
  date: string;
  author_username: string;
  author_url: string;
  forum_url: string;
  images: Image;
  comments: number;
  excerpt: string;
}

export interface MangaPicture {
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
}

export interface MangaStatistics {
  reading: number;
  completed: number;
  on_hold: number;
  dropped: number;
  plan_to_read: number;
  total: number;
  scores: {
    score: number;
    votes: number;
    percentage: number;
  }[];
}

export interface MangaRecommendation {
  entry: {
    mal_id: number;
    url: string;
    images: Image;
    title: string;
  };
  url: string;
  votes: number;
}

export interface MangaReview {
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
  chapters_read: number | null;
  user: {
    username: string;
    url: string;
    images: Image;
  };
}

export interface MangaRelation {
  relation: string;
  entry: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
}

export interface MangaExternal {
  name: string;
  url: string;
}

/**
 * Response returned by the `/manga/ids` endpoint.
 * Contains all unique MAL manga IDs that currently exist and are active.
 * Requires a Server Key (`X-Server-Key` header) for authentication.
 */
export interface MangaIdsResponse {
  data: number[];
}

/**
 * Query parameters for manga search and filtering.
 */
export interface MangaQueryParams {
  /**
   * Page number to retrieve (default: 1, max: 1000).
   */
  page?: number;
  /**
   * Results per page (default: 25, max: 50).
   */
  limit?: number;
  /**
   * Title search query (fuzzy matched; min 3 chars, max 200 chars).
   */
  q?: string;
  /**
   * Filter by entry type.
   */
  type?:
    | 'manga'
    | 'novel'
    | 'lightnovel'
    | 'oneshot'
    | 'doujin'
    | 'manhwa'
    | 'manhua';
  /**
   * Filter by exact score.
   */
  score?: number;
  /**
   * Filter by minimum score.
   */
  min_score?: number;
  /**
   * Filter by maximum score.
   */
  max_score?: number;
  /**
   * Filter by publishing status.
   */
  status?: 'publishing' | 'complete' | 'hiatus' | 'discontinued' | 'upcoming';
  /**
   * Flag — pass `true` to filter out NSFW entries.
   */
  sfw?: boolean;
  /**
   * Comma-separated list of genre IDs (max 25 IDs).
   */
  genres?: string;
  /**
   * Comma-separated list of genre IDs to exclude (max 25 IDs).
   */
  genres_exclude?: string;
  /**
   * Field to order results by.
   */
  order_by?:
    | 'mal_id'
    | 'title'
    | 'start_date'
    | 'end_date'
    | 'chapters'
    | 'volumes'
    | 'score'
    | 'scored_by'
    | 'rank'
    | 'popularity'
    | 'members'
    | 'favorites';
  /**
   * Sorting order (default: asc).
   */
  sort?: 'desc' | 'asc';
  /**
   * Filter by the first letter of the title.
   */
  letter?: string;
  /**
   * Comma-separated list of magazine IDs (max 25 IDs).
   */
  magazines?: string;
  /**
   * Filter by publishing start date (YYYY-MM-DD format).
   */
  start_date?: string;
  /**
   * Filter by publishing end date (YYYY-MM-DD format).
   */
  end_date?: string;
}
