import { describe, it, expect, vi, beforeEach } from 'vitest';
import { PeopleEndpoint } from '../../src/endpoints/people';
import { TenraiClient } from '../../src/client';

/**
 * Unit tests for the PeopleEndpoint request mapping and parameter handling.
 *
 * @description Verifies that endpoint methods call the client with the expected path
 * and query parameters.
 * @see PeopleEndpoint
 */
describe('PeopleEndpoint', () => {
  let client: TenraiClient;
  let peopleEndpoint: PeopleEndpoint;

  beforeEach(() => {
    client = new TenraiClient();
    peopleEndpoint = new PeopleEndpoint(client);

    vi.spyOn(client, 'request').mockImplementation(async () => ({
      data: { id: 1 },
    }));
  });

  it('should get person by ID', async () => {
    await peopleEndpoint.getById(1);
    expect(client.request).toHaveBeenCalledWith('/people/1');
  });

  it('should get person pictures', async () => {
    await peopleEndpoint.getPictures(1);
    expect(client.request).toHaveBeenCalledWith('/people/1/pictures');
  });

  it('should search for people with parameters', async () => {
    await peopleEndpoint.search({ q: 'tanaka', limit: 10 });
    expect(client.request).toHaveBeenCalledWith('/people', {
      q: 'tanaka',
      limit: 10,
    });
  });

  it('should get full person details by ID', async () => {
    await peopleEndpoint.getFullById(1);
    expect(client.request).toHaveBeenCalledWith('/people/1/full');
  });

  it('should get person anime roles', async () => {
    await peopleEndpoint.getAnime(1);
    expect(client.request).toHaveBeenCalledWith('/people/1/anime');
  });

  it('should get person manga roles', async () => {
    await peopleEndpoint.getManga(1);
    expect(client.request).toHaveBeenCalledWith('/people/1/manga');
  });

  it('should get person voice acting roles', async () => {
    await peopleEndpoint.getVoices(1);
    expect(client.request).toHaveBeenCalledWith('/people/1/voices');
  });

  it('should get all person IDs', async () => {
    await peopleEndpoint.getAllIds();
    expect(client.request).toHaveBeenCalledWith('/people/ids');
  });
});

