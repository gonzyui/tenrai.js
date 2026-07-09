import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ProducersEndpoint } from '../../src/endpoints/producers';
import { TenraiClient } from '../../src/client';

/**
 * Unit tests for the ProducersEndpoint request mapping and parameter handling.
 *
 * @description Verifies that endpoint methods call the client with the expected path
 * and query parameters.
 * @see ProducersEndpoint
 */
describe('ProducersEndpoint', () => {
  let client: TenraiClient;
  let producersEndpoint: ProducersEndpoint;

  beforeEach(() => {
    client = new TenraiClient();
    producersEndpoint = new ProducersEndpoint(client);

    vi.spyOn(client, 'request').mockImplementation(async () => ({
      data: { id: 1 },
    }));
  });

  it('should get producer by ID with pagination', async () => {
    await producersEndpoint.getById(1, 2, 10);
    expect(client.request).toHaveBeenCalledWith('/producers/1', {
      page: 2,
      limit: 10,
    });
  });

  it('should get all producers with parameters', async () => {
    await producersEndpoint.getAll({ q: 'bones', page: 1 });
    expect(client.request).toHaveBeenCalledWith('/producers', {
      q: 'bones',
      page: 1,
    });
  });

  it('should get full producer details by ID', async () => {
    await producersEndpoint.getFullById(1);
    expect(client.request).toHaveBeenCalledWith('/producers/1/full');
  });

  it('should get producer external links', async () => {
    await producersEndpoint.getExternal(1);
    expect(client.request).toHaveBeenCalledWith('/producers/1/external');
  });

  it('should get all producer IDs', async () => {
    await producersEndpoint.getAllIds();
    expect(client.request).toHaveBeenCalledWith('/producers/ids');
  });
});

