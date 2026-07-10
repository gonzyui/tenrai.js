/**
 * Represents a genre returned by MAL/Tenrai.
 */
export interface Genre {
  /**
   * The MAL ID of the genre.
   */
  mal_id: number;
  /**
   * The name of the genre.
   */
  name: string;
  /**
   * The MyAnimeList URL of the genre.
   */
  url: string;
  /**
   * Total entries matching this genre in the database.
   */
  count: number;
}

/**
 * Query parameters to filter genres.
 */
export interface GenreQueryParams {
  /**
   * Filter genres by category.
   */
  filter?: 'genres' | 'explicit_genres' | 'themes' | 'demographics';
}
