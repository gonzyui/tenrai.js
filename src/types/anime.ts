import type { DateRange, Image, Title } from './common';

export interface Anime {
  mal_id: number;
  url: string;
  images: Image;
  trailer: {
    youtube_id: string | null;
    url: string | null;
    embed_url: string | null;
    images: {
      image_url: string | null;
      small_image_url: string | null;
      medium_image_url: string | null;
      large_image_url: string | null;
      maximum_image_url: string | null;
    };
  };
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string | null;
  title_japanese: string | null;
  title_synonyms: string[];
  type: string | null;
  source: string | null;
  episodes: number | null;
  status: string | null;
  airing: boolean;
  aired: DateRange;
  duration: string | null;
  rating: string | null;
  score: number | null;
  scored_by: number | null;
  rank: number | null;
  popularity: number | null;
  members: number | null;
  favorites: number | null;
  synopsis: string | null;
  background: string | null;
  season: string | null;
  year: number | null;
  broadcast: {
    day: string | null;
    time: string | null;
    timezone: string | null;
    string: string | null;
  };
  producers: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  licensors: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  studios: {
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
 * Full anime details including relations, themes, external links, and streaming data.
 * Returned by the `/anime/{id}/full` endpoint.
 */
export interface AnimeFullDetails extends Anime {
  relations: AnimeRelation[];
  theme: AnimeTheme;
  external: AnimeExternal[];
  streaming: AnimeStreaming[];
}

export interface AnimeCharacter {
  character: {
    mal_id: number;
    url: string;
    images: Image;
    name: string;
  };
  role: string;
  favorites: number;
  voice_actors: {
    person: {
      mal_id: number;
      url: string;
      images: Image;
      name: string;
    };
    language: string;
  }[];
}

export interface AnimeStaff {
  person: {
    mal_id: number;
    url: string;
    images: Image;
    name: string;
  };
  positions: string[];
}

export interface AnimeEpisode {
  mal_id: number;
  url: string | null;
  title: string | null;
  title_japanese: string | null;
  title_romanji: string | null;
  duration: number | null;
  aired: string | null;
  filler: boolean;
  recap: boolean;
  forum_url: string | null;
}

export interface AnimeNews {
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

export interface AnimeVideo {
  promo: {
    title: string;
    trailer: {
      youtube_id: string | null;
      url: string | null;
      embed_url: string | null;
      images: {
        image_url: string | null;
        small_image_url: string | null;
        medium_image_url: string | null;
        large_image_url: string | null;
        maximum_image_url: string | null;
      };
    };
  }[];
  episodes: {
    mal_id: number;
    url: string | null;
    title: string | null;
    episode: string | null;
    images: Image;
  }[];
}

/**
 * A single episode video entry returned by the `/anime/{id}/videos/episodes` paginated endpoint.
 */
export interface AnimeVideoEpisode {
  mal_id: number;
  url: string | null;
  title: string | null;
  episode: string | null;
  images: Image;
}

export interface AnimePicture {
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

export interface AnimeStatistics {
  watching: number;
  completed: number;
  on_hold: number;
  dropped: number;
  plan_to_watch: number;
  total: number;
  scores: {
    score: number;
    votes: number;
    percentage: number;
  }[];
}

export interface AnimeRecommendation {
  entry: {
    mal_id: number;
    url: string;
    images: Image;
    title: string;
  };
  url: string;
  votes: number;
}

export interface AnimeReview {
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
  episodes_watched: number | null;
  user: {
    username: string;
    url: string;
    images: Image;
  };
}

export interface AnimeRelation {
  relation: string;
  entry: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
}

export interface AnimeTheme {
  openings: string[];
  endings: string[];
}

export interface AnimeExternal {
  name: string;
  url: string;
}

export interface AnimeStreaming {
  name: string;
  url: string;
}

/**
 * Response returned by the `/anime/ids` endpoint.
 * Contains all unique MAL anime IDs that currently exist and are active.
 * Requires a Server Key (`X-Server-Key` header) for authentication.
 */
export interface AnimeIdsResponse {
  data: number[];
}

/**
 * Query parameters for anime search and filtering.
 */
export interface AnimeQueryParams {
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
  type?: 'tv' | 'movie' | 'ova' | 'special' | 'ona' | 'music' | 'cm' | 'pv' | 'tv_special';
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
   * Filter by airing status.
   */
  status?: 'airing' | 'complete' | 'upcoming';
  /**
   * Filter by age rating.
   */
  rating?: 'g' | 'pg' | 'pg13' | 'r17' | 'r' | 'rplus' | 'rx';
  /**
   * Flag — pass `true` to filter out NSFW entries.
   */
  sfw?: boolean;
  /**
   * Include unapproved entries in results.
   */
  unapproved?: boolean;
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
    | 'episodes'
    | 'score'
    | 'scored_by'
    | 'rank'
    | 'popularity'
    | 'members';
  /**
   * Sorting order (default: asc).
   */
  sort?: 'desc' | 'asc';
  /**
   * Filter by the first letter of the title.
   */
  letter?: string;
  /**
   * Comma-separated list of producer IDs (max 25 IDs).
   */
  producers?: string;
  /**
   * Filter by start date (YYYY-MM-DD format).
   */
  start_date?: string;
  /**
   * Filter by end date (YYYY-MM-DD format).
   */
  end_date?: string;
}
