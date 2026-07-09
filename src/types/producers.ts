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

export interface ProducerQueryParams {
  page?: number;
  limit?: number;
  q?: string;
  order_by?: 'mal_id' | 'name' | 'count';
  sort?: 'desc' | 'asc';
  letter?: string;
}

