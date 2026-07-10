import { describe, it, expect, vi, beforeEach } from 'vitest';
import { NewsEndpoint } from '../../src/endpoints/news';
import { TenraiClient } from '../../src/client';

/**
 * Unit tests for the NewsEndpoint request mapping and parameter handling.
 *
 * @description Verifies that endpoint methods call the client with the expected path
 * and query parameters.
 * @see NewsEndpoint
 */
describe('NewsEndpoint', () => {
  let client: TenraiClient;
  let newsEndpoint: NewsEndpoint;

  beforeEach(() => {
    client = new TenraiClient();
    newsEndpoint = new NewsEndpoint(client);

    vi.spyOn(client, 'request').mockImplementation(async () => ({
      data: { id: 1 },
    }));
  });

  it('should get news list without query parameters', async () => {
    await newsEndpoint.getNews();
    expect(client.request).toHaveBeenCalledWith('/news', undefined);
  });

  it('should get news list with query parameters', async () => {
    await newsEndpoint.getNews({
      q: 'Fruits Basket',
      page: 2,
      limit: 10,
      tag: 'Preview',
    });
    expect(client.request).toHaveBeenCalledWith('/news', {
      q: 'Fruits Basket',
      page: 2,
      limit: 10,
      tag: 'Preview',
    });
  });

  it('should get news tags', async () => {
    await newsEndpoint.getNewsTags();
    expect(client.request).toHaveBeenCalledWith('/news/tags');
  });

  it('should get news details by ID', async () => {
    await newsEndpoint.getNewsById(56264086);
    expect(client.request).toHaveBeenCalledWith('/news/56264086');
  });
});
