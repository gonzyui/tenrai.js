export interface TenraiResponse<T> {
  data: T;
}

export interface TenraiPaginatedResponse<T> {
  data: T[];
  pagination: PaginationInfo;
}

export interface PaginationInfo {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
}

export interface Image {
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

export interface Title {
  type: string;
  title: string;
}

/**
 * Represents a date range returned by MyAnimeList/Tenrai.
 */
export interface DateRange {
  /**
   * Start date in ISO8601 format.
   */
  from: string | null;
  /**
   * End date in ISO8601 format.
   */
  to: string | null;
  /**
   * Structured date components.
   */
  prop: {
    from: {
      day: number | null;
      month: number | null;
      year: number | null;
    };
    to: {
      day: number | null;
      month: number | null;
      year: number | null;
    };
  };
  /**
   * Human-readable date range string.
   */
  string: string | null;
}

export interface CommonQueryParams {
  page?: number;
  limit?: number;
  q?: string;
  order_by?: string;
  sort?: 'desc' | 'asc';
  letter?: string;
}
