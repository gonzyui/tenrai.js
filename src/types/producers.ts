import type { Title } from './common';

export interface Producer {
  mal_id: number;
  name: string;
  url: string;
  count: number;
}

/**
 * Full details of a producer, including titles, external links, etc.
 * Returned by the `/producers/{id}/full` endpoint.
 */
export interface ProducerFull extends Producer {
  titles: Title[];
  established: string | null;
  about: string | null;
  external: ProducerExternal[];
}

/**
 * An external link reference for a producer.
 */
export interface ProducerExternal {
  name: string;
  url: string;
}

/**
 * Response returned by the `/producers/ids` endpoint.
 * Contains all unique MAL producer IDs that currently exist and are active.
 * Requires a Server Key (`X-Server-Key` header) for authentication.
 */
export interface ProducerIdsResponse {
  data: number[];
}

/**
 * Query parameters for producers search and filtering.
 */
export interface ProducerQueryParams {
  /**
   * Page number to retrieve (default: 1).
   */
  page?: number;
  /**
   * Results per page (default: 25, max: 50).
   */
  limit?: number;
  /**
   * Search query to filter producers by name.
   */
  q?: string;
  /**
   * Field to order results by (default: mal_id).
   */
  order_by?: 'mal_id' | 'name' | 'count' | 'favorites' | 'established';
  /**
   * Sorting order (default: asc).
   */
  sort?: 'desc' | 'asc';
  /**
   * Filter producers by the first letter of their name.
   */
  letter?: string;
}
