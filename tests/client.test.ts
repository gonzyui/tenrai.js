import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { TenraiClient } from '../src/client';
import { TenraiError } from '../src/types/error';

// Mock global fetch
const mockFetch = vi.fn();
global.fetch = mockFetch;

describe('TenraiClient', () => {
  let client: TenraiClient;

  beforeEach(() => {
    client = new TenraiClient();
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('should initialize with default options', () => {
    expect(client).toBeDefined();
    expect(client.anime).toBeDefined();
    expect(client.manga).toBeDefined();
    expect(client.characters).toBeDefined();
  });

  it('should initialize with custom options', () => {
    const customClient = new TenraiClient({
      baseUrl: 'https://custom-api.example.com',
      timeout: 5000,
      headers: { 'X-Custom-Header': 'value' },
    });

    expect(customClient).toBeDefined();
  });

  it('should make a successful request', async () => {
    const mockResponse = {
      data: { id: 1, title: 'Test Anime' },
    };

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const result = await client.request('/anime/1');
    expect(result).toEqual(mockResponse);
    expect(mockFetch).toHaveBeenCalledTimes(1);

    // Use a more flexible assertion that doesn't care about the exact signal value
    expect(mockFetch).toHaveBeenCalledWith(
      'https://api.tenrai.org/v1/anime/1',
      expect.objectContaining({
        method: 'GET',
        headers: { Accept: 'application/json' },
        // Don't check the signal property specifically
      }),
    );

    // Verify that a signal was passed, but don't check its exact value
    const fetchCall = mockFetch.mock.calls[0][1];
    expect(fetchCall).toHaveProperty('signal');
  });

  it('should handle API errors', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
      json: async () => ({ message: 'Not found' }),
    });

    await expect(client.request('/anime/999999')).rejects.toThrow(TenraiError);
    expect(mockFetch).toHaveBeenCalledTimes(1);
  });

  it('should handle timeout errors', async () => {
    mockFetch.mockImplementationOnce(() => {
      const error = new Error('Aborted');
      error.name = 'AbortError';
      throw error;
    });

    await expect(client.request('/anime/1')).rejects.toThrow('Request timeout');
    expect(mockFetch).toHaveBeenCalledTimes(1);
  });

  it('should handle unexpected errors', async () => {
    mockFetch.mockImplementationOnce(() => {
      throw new Error('Network error');
    });

    await expect(client.request('/anime/1')).rejects.toThrow('Network error');
    expect(mockFetch).toHaveBeenCalledTimes(1);
  });

  it('should append query parameters to the URL', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ data: [] }),
    });

    await client.request('/anime', { q: 'naruto', limit: 10 });
    expect(mockFetch).toHaveBeenCalledWith(
      'https://api.tenrai.org/v1/anime?q=naruto&limit=10',
      expect.anything(),
    );
  });

  it('should skip null and undefined query parameters', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ data: [] }),
    });

    await client.request('/anime', {
      q: 'naruto',
      limit: null,
      page: undefined,
    });
    expect(mockFetch).toHaveBeenCalledWith(
      'https://api.tenrai.org/v1/anime?q=naruto',
      expect.anything(),
    );
  });

  it('should include X-Server-Key header when serverKey option is set', async () => {
    const customClient = new TenraiClient({
      serverKey: 'my-secret-server-key',
    });

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ data: {} }),
    });

    await customClient.request('/anime/1');
    expect(mockFetch).toHaveBeenCalledWith(
      'https://api.tenrai.org/v1/anime/1',
      expect.objectContaining({
        headers: expect.objectContaining({
          'X-Server-Key': 'my-secret-server-key',
        }),
      }),
    );
  });

  it('should cache GET responses when cache is enabled', async () => {
    const cachedClient = new TenraiClient({ cache: true, cacheTtl: 5000 });
    const mockResponse = { data: 'my-cached-data' };

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    // First request - cache miss, fetches from API
    const res1 = await cachedClient.request('/anime/1');
    // Second request - cache hit, returns from memory
    const res2 = await cachedClient.request('/anime/1');

    expect(res1).toEqual(mockResponse);
    expect(res2).toEqual(mockResponse);
    expect(mockFetch).toHaveBeenCalledTimes(1);

    // Clear cache - fetches from API again
    cachedClient.clearCache();
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });
    const res3 = await cachedClient.request('/anime/1');
    expect(res3).toEqual(mockResponse);
    expect(mockFetch).toHaveBeenCalledTimes(2);
  });

  it('should retry requests when encountering a 429 Rate Limit response', async () => {
    const retryClient = new TenraiClient({ maxRetries: 2, retryDelay: 10 });
    const mockResponse = { data: 'success' };

    // First call: 429 Rate Limit
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 429,
      headers: new Headers({ 'retry-after': '0' }),
      json: async () => ({}),
    });
    // Second call: 200 OK
    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => mockResponse,
    });

    const res = await retryClient.request('/anime/1');
    expect(res).toEqual(mockResponse);
    expect(mockFetch).toHaveBeenCalledTimes(2);
  });
});
