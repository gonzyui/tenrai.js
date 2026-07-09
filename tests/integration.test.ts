import { describe, it, expect } from 'vitest';
import { TenraiClient } from '../src/client';

// Only run these tests if the INTEGRATION environment variable is set to 'true'
const runIntegration = process.env.INTEGRATION === 'true';

describe.runIf(runIntegration)('Tenrai API Integration Tests', () => {
  const client = new TenraiClient();

  it('should fetch real anime details from Tenrai API', async () => {
    const anime = await client.anime.getById(5114); // FMAB
    expect(anime.data).toBeDefined();
    expect(anime.data.mal_id).toBe(5114);
    expect(anime.data.title).toContain('Fullmetal Alchemist');
    expect(anime.data.images.jpg.image_url).toBeDefined();
  });

  it('should fetch full anime details from Tenrai API', async () => {
    const anime = await client.anime.getFullById(5114);
    expect(anime.data).toBeDefined();
    expect(anime.data.relations).toBeInstanceOf(Array);
    expect(anime.data.streaming).toBeInstanceOf(Array);
  });

  it('should search for manga from Tenrai API', async () => {
    const searchResult = await client.manga.search({ q: 'berserk', limit: 1 });
    expect(searchResult.data).toBeInstanceOf(Array);
    expect(searchResult.data.length).toBeGreaterThan(0);
    expect(searchResult.data[0].title.toLowerCase()).toContain('berserk');
  });

  it('should fetch character details from Tenrai API', async () => {
    const character = await client.characters.getById(1); // Spike Spiegel
    expect(character.data).toBeDefined();
    expect(character.data.name).toContain('Spike');
  });

  it('should fetch person details from Tenrai API', async () => {
    const person = await client.people.getById(1);
    expect(person.data).toBeDefined();
    expect(person.data.name).toBeDefined();
  });
});

