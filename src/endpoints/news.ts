import type { TenraiClient } from '../client';
import type {
  News,
  NewsDetails,
  NewsQueryParams,
  NewsTag,
  TenraiPaginatedResponse,
  TenraiResponse,
} from '../types';

/**
 * Endpoint wrapper for recent news.
 * Provides access to the `/news` resources.
 */
export class NewsEndpoint {
  private client: TenraiClient;

  constructor(client: TenraiClient) {
    this.client = client;
  }

  /**
   * Retrieve a list of recent news articles.
   * Allows searching for articles and filtering by specific tags.
   *
   * @param params - Optional query parameters to filter and paginate news articles
   * @returns Promise with a paginated list of news articles
   * @see {@link https://api.tenrai.org/documentation#tag/news | Tenrai API} — `GET /v1/news`
   *
   * @example
   * ```ts
   * const news = await client.news.getNews({ q: 'Fruits Basket', limit: 5 });
   * news.data.forEach(article => console.log(`${article.title} (ID: ${article.mal_id})`));
   * ```
   */
  async getNews(
    params?: NewsQueryParams,
  ): Promise<TenraiPaginatedResponse<News>> {
    return this.client.request<TenraiPaginatedResponse<News>>('/news', params);
  }

  /**
   * Retrieve a list of all news tags and category counts.
   * Useful for showing filtering tags in a UI.
   *
   * @returns Promise with a list of all news tags
   * @see {@link https://api.tenrai.org/documentation#tag/news | Tenrai API} — `GET /v1/news/tags`
   *
   * @example
   * ```ts
   * const tags = await client.news.getNewsTags();
   * tags.data.forEach(tag => console.log(`${tag.name}: ${tag.count} articles`));
   * ```
   */
  async getNewsTags(): Promise<TenraiResponse<NewsTag[]>> {
    return this.client.request<TenraiResponse<NewsTag[]>>('/news/tags');
  }

  /**
   * Retrieve full details of a specific news article by ID.
   * Includes the full article content and relations to other anime/manga entries.
   *
   * @param id - The unique MyAnimeList News ID
   * @returns Promise with the news article details
   * @see {@link https://api.tenrai.org/documentation#tag/news | Tenrai API} — `GET /v1/news/{id}`
   *
   * @example
   * ```ts
   * const article = await client.news.getNewsById(56264086);
   * console.log(article.data.title);
   * console.log(article.data.content);
   * ```
   */
  async getNewsById(id: number): Promise<TenraiResponse<NewsDetails>> {
    return this.client.request<TenraiResponse<NewsDetails>>(`/news/${id}`);
  }
}
