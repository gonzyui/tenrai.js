import { AnimeEndpoint } from './endpoints/anime';
import { MangaEndpoint } from './endpoints/manga';
import { CharactersEndpoint } from './endpoints/characters';
import { PeopleEndpoint } from './endpoints/people';
import { SeasonsEndpoint } from './endpoints/seasons';
import { SchedulesEndpoint } from './endpoints/schedules';
import { TopEndpoint } from './endpoints/top';
import { GenresEndpoint } from './endpoints/genres';
import { ProducersEndpoint } from './endpoints/producers';
import { MagazinesEndpoint } from './endpoints/magazines';
import { ReviewsEndpoint } from './endpoints/reviews';
import { RecommendationsEndpoint } from './endpoints/recommendations';
import { RandomEndpoint } from './endpoints/random';
import { TenraiError, type TenraiApiErrorResponse } from './types/error';

export interface TenraiClientOptions {
  /**
   * The base URL of the Tenrai API (default: 'https://api.tenrai.org/v1').
   */
  baseUrl?: string;
  /**
   * The request timeout in milliseconds (default: 30000ms).
   */
  timeout?: number;
  /**
   * Custom HTTP headers to include with every request.
   */
  headers?: Record<string, string>;
  /**
   * The Server Key to authenticate requests and increase rate limits.
   * Will be sent via the `X-Server-Key` header.
   */
  serverKey?: string;
  /**
   * Enable in-memory caching for GET requests (default: false).
   */
  cache?: boolean;
  /**
   * Time-to-live for cached responses in milliseconds (default: 300000ms / 5 minutes).
   */
  cacheTtl?: number;
  /**
   * Maximum number of retry attempts for 429 Rate Limit responses (default: 3).
   */
  maxRetries?: number;
  /**
   * Delay multiplier or starting delay in milliseconds for retrying rate-limited requests (default: 1000ms).
   */
  retryDelay?: number;
}

/**
 * Main client for interacting with the Tenrai API
 */
export class TenraiClient {
  private baseUrl: string;
  private timeout: number;
  private headers: Record<string, string>;
  private cacheEnabled: boolean;
  private cacheTtl: number;
  private maxRetries: number;
  private retryDelay: number;
  private cacheStore = new Map<string, { data: any; expires: number }>();

  // Endpoints
  public anime: AnimeEndpoint;
  public manga: MangaEndpoint;
  public characters: CharactersEndpoint;
  public people: PeopleEndpoint;
  public seasons: SeasonsEndpoint;
  public schedules: SchedulesEndpoint;
  public top: TopEndpoint;
  public genres: GenresEndpoint;
  public producers: ProducersEndpoint;
  public magazines: MagazinesEndpoint;
  public reviews: ReviewsEndpoint;
  public recommendations: RecommendationsEndpoint;
  public random: RandomEndpoint;

  /**
   * Create a new TenraiClient instance
   * @param options - Client configuration options
   */
  constructor(options: TenraiClientOptions = {}) {
    this.baseUrl = options.baseUrl || 'https://api.tenrai.org/v1';
    this.timeout = options.timeout || 30000;
    this.cacheEnabled = options.cache || false;
    this.cacheTtl = options.cacheTtl || 300000; // 5 minutes
    this.maxRetries = options.maxRetries !== undefined ? options.maxRetries : 3;
    this.retryDelay = options.retryDelay || 1000;

    this.headers = {
      Accept: 'application/json',
      ...options.headers,
    };

    if (options.serverKey) {
      this.headers['X-Server-Key'] = options.serverKey;
    }

    // Initialize endpoints
    this.anime = new AnimeEndpoint(this);
    this.manga = new MangaEndpoint(this);
    this.characters = new CharactersEndpoint(this);
    this.people = new PeopleEndpoint(this);
    this.seasons = new SeasonsEndpoint(this);
    this.schedules = new SchedulesEndpoint(this);
    this.top = new TopEndpoint(this);
    this.genres = new GenresEndpoint(this);
    this.producers = new ProducersEndpoint(this);
    this.magazines = new MagazinesEndpoint(this);
    this.reviews = new ReviewsEndpoint(this);
    this.recommendations = new RecommendationsEndpoint(this);
    this.random = new RandomEndpoint(this);
  }

  /**
   * Clears the in-memory response cache.
   */
  public clearCache(): void {
    this.cacheStore.clear();
  }

  /**
   * Helper function to delay execution
   */
  private sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /**
   * Make a request to the Tenrai API
   * @param endpoint - API endpoint path
   * @param params - Query parameters
   * @returns Promise with the API response
   */
  async request<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
    const url = new URL(`${this.baseUrl}${endpoint}`);

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          url.searchParams.append(key, String(value));
        }
      });
    }

    const urlString = url.toString();

    // Check cache if enabled
    if (this.cacheEnabled) {
      const cached = this.cacheStore.get(urlString);
      if (cached && cached.expires > Date.now()) {
        return cached.data as T;
      }
    }

    let attempts = 0;
    while (true) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.timeout);

        const response = await fetch(urlString, {
          method: 'GET',
          headers: this.headers,
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        // Handle Rate Limiting (429)
        if (response.status === 429 && attempts < this.maxRetries) {
          attempts++;

          const retryAfterHeader = response.headers.get('retry-after');
          let delay = this.retryDelay * 2 ** (attempts - 1); // Exponential backoff fallback

          if (retryAfterHeader) {
            const parsedSeconds = parseInt(retryAfterHeader, 10);
            if (!Number.isNaN(parsedSeconds)) {
              delay = parsedSeconds * 1000;
            }
          }

          await this.sleep(delay);
          continue; // Retry the request
        }

        if (!response.ok) {
          const errorData = (await response
            .json()
            .catch(() => ({}))) as TenraiApiErrorResponse;
          throw new TenraiError(
            `API request failed with status ${response.status}`,
            response.status,
            errorData,
          );
        }

        const data = (await response.json()) as T;

        // Store in cache if enabled
        if (this.cacheEnabled) {
          this.cacheStore.set(urlString, {
            data,
            expires: Date.now() + this.cacheTtl,
          });
        }

        return data;
      } catch (error) {
        if (error instanceof TenraiError) {
          throw error;
        }

        if (error instanceof Error && error.name === 'AbortError') {
          throw new TenraiError('Request timeout', 408);
        }

        throw new TenraiError(
          error instanceof Error ? error.message : 'Unknown error occurred',
          500,
        );
      }
    }
  }
}
