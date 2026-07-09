/**
 * Represents a manga magazine publisher.
 */
export interface Magazine {
  /**
   * The MAL ID of the magazine.
   */
  mal_id: number;
  /**
   * The name of the magazine.
   */
  name: string;
  /**
   * The MyAnimeList URL of the magazine.
   */
  url: string;
  /**
   * Total manga entries published in this magazine.
   */
  count: number;
}

/**
 * Query parameters for magazines pagination and sorting.
 */
export interface MagazineQueryParams {
  /**
   * Page number to retrieve (default: 1).
   */
  page?: number;
  /**
   * Results per page (default: 25, max: 50).
   */
  limit?: number;
  /**
   * Filter magazines by name.
   */
  q?: string;
  /**
   * Field to order results by (default: mal_id).
   */
  order_by?: 'mal_id' | 'name' | 'count';
  /**
   * Sorting order (default: asc).
   */
  sort?: 'desc' | 'asc';
  /**
   * Filter magazines by the first letter of their name.
   */
  letter?: string;
}

