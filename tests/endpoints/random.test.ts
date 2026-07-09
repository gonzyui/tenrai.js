import { describe, it, expect, vi, beforeEach } from 'vitest';
import { RandomEndpoint } from '../../src/endpoints/random';
import { TenraiClient } from '../../src/client';

/**
 * Unit tests for the RandomEndpoint request mapping and parameter handling.
 *
 * @description Verifies that endpoint methods call the client with the expected path
 * and query parameters.
 * @see RandomEndpoint
 */
describe('RandomEndpoint', () => {
  let client: TenraiClient;
  let randomEndpoint: RandomEndpoint;

  beforeEach(() => {
    client = new TenraiClient();
    randomEndpoint = new RandomEndpoint(client);

    vi.spyOn(client, 'request').mockImplementation(async () => ({
      data: { id: 1 },
    }));
  });

  it('should get random anime', async () => {
    await randomEndpoint.getAnime();
    expect(client.request).toHaveBeenCalledWith('/random/anime');
  });

  it('should get random manga', async () => {
    await randomEndpoint.getManga();
    expect(client.request).toHaveBeenCalledWith('/random/manga');
  });

  it('should get random character', async () => {
    await randomEndpoint.getCharacter();
    expect(client.request).toHaveBeenCalledWith('/random/characters');
  });

  it('should get random person', async () => {
    await randomEndpoint.getPerson();
    expect(client.request).toHaveBeenCalledWith('/random/people');
  });
});
