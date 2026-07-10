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

  it('should fetch news list from Tenrai API', async () => {
    const news = await client.news.getNews({ limit: 5 });
    expect(news.data).toBeInstanceOf(Array);
    expect(news.data.length).toBeGreaterThan(0);
    expect(news.data[0].mal_id).toBeDefined();
    expect(news.data[0].title).toBeDefined();
  });

  it('should fetch news tags from Tenrai API', async () => {
    const tags = await client.news.getNewsTags();
    expect(tags.data).toBeInstanceOf(Array);
    expect(tags.data.length).toBeGreaterThan(0);
    expect(tags.data[0].name).toBeDefined();
  });

  it('should fetch news details by ID from Tenrai API', async () => {
    const news = await client.news.getNews({ limit: 1 });
    if (news.data.length > 0) {
      const id = news.data[0].mal_id;
      const details = await client.news.getNewsById(id);
      expect(details.data).toBeDefined();
      expect(details.data.mal_id).toBe(id);
      expect(details.data.content).toBeDefined();
    }
  });
});
