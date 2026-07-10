/**
 * Represents a news item.
 */
export interface News {
  /**
   * MyAnimeList ID of the news article.
   */
  mal_id: number;
  /**
   * MyAnimeList URL of the news article.
   */
  url: string;
  /**
   * Title of the news article.
   */
  title: string;
  /**
   * Post date in ISO8601 format. Nullable.
   */
  date: string | null;
  /**
   * Author MyAnimeList Username.
   */
  author_username: string;
  /**
   * Author Profile URL.
   */
  author_url: string;
  /**
   * Forum topic URL. Nullable.
   */
  forum_url: string | null;
  /**
   * Images associated with the news article.
   */
  images: {
    jpg: {
      image_url: string | null;
    };
  };
  /**
   * Number of comments on the news article.
   */
  comments: number;
  /**
   * Excerpt or short snippet of the news article.
   */
  excerpt: string;
}

/**
 * Represents a news tag.
 */
export interface NewsTag {
  /**
   * The name of the tag.
   */
  name: string;
  /**
   * The number of articles matching this tag.
   */
  count: number;
}

/**
 * Represents a reference to anime/manga in news relations.
 */
export interface NewsRelationEntry {
  /**
   * The MyAnimeList ID of the entry.
   */
  mal_id: number;
  /**
   * The name of the entry.
   */
  name: string;
  /**
   * The MyAnimeList URL of the entry.
   */
  url: string;
}

/**
 * Represents detailed information for a specific news article.
 */
export interface NewsDetails extends News {
  /**
   * Full HTML or text content of the news article.
   */
  content: string;
  /**
   * Relations linked to the news article (related anime and manga).
   */
  relations: {
    anime: NewsRelationEntry[];
    manga: NewsRelationEntry[];
  };
}

/**
 * Query parameters to filter and paginate news articles.
 */
export interface NewsQueryParams {
  /**
   * Page number to retrieve.
   */
  page?: number;
  /**
   * Number of results per page (default: 25, max: 50).
   */
  limit?: number;
  /**
   * Title search query.
   */
  q?: string;
  /**
   * Filter by tag.
   */
  tag?: string;
}
