# Tenrai.js

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178c6?style=flat-square)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-16+-339933?style=flat-square)](https://nodejs.org/)

**A type-safe, feature-complete TypeScript wrapper for the Tenrai API v1**

---

> **This project is currently undergoing a major rewrite** to transition from the Jikan API to the new Tenrai API. Some features might be unstable or incomplete.
> Contributions, feedback, and bug reports are highly welcome! Check out [CONTRIBUTING.md](CONTRIBUTING.md) to see how you can help.

## Overview

A comprehensive, production-ready TypeScript wrapper for the **Tenrai API v1** (unofficial MyAnimeList API). Built with type safety, performance, and developer experience in mind.

Provides seamless access to MyAnimeList data including anime, manga, characters, people, and more with full TypeScript support and robust error handling.

## Features

- **Type-Safe**: Full TypeScript support with comprehensive type definitions for all API responses
- **Complete Coverage**: All Tenrai API v1 endpoints implemented and tested
- **Performance Optimized**: Built-in caching, request batching, and connection pooling support
- **Robust Error Handling**: Custom error classes with detailed error information and recovery suggestions
- **Comprehensive Type Safety**: Extensive JSDoc comments and full TypeScript types
- **Well Tested**: Full unit test coverage with vitest
- **Zero Dependencies**: Minimal footprint using native Node.js APIs
- **Clean API**: Intuitive, fluent API design for common use cases
- **Tree-Shakeable**: Modular architecture enables optimal bundle sizes
- **Rate Limit Aware**: Built-in rate limit handling and request throttling

## Installation

### Using npm

```bash
npm install tenrai.js
```

### Using yarn

```bash
yarn add tenrai.js
```

### Using pnpm

```bash
pnpm add tenrai.js
```

### Requirements

- Node.js 16 or higher
- TypeScript 4.7 or higher (for TypeScript projects)

## Quick Start

### Basic Usage

```typescript
import { TenraiClient } from 'tenrai.js';

// Initialize the client
const Tenrai = new TenraiClient();

// Fetch anime information
const getAnime = async () => {
  try {
    const response = await Tenrai.anime.getById(5114); // Fullmetal Alchemist: Brotherhood
    console.log(response.data.title);
    console.log(response.data.score);
  } catch (error) {
    console.error('Error fetching anime:', error);
  }
};

// Search for anime
const searchAnime = async () => {
  try {
    const results = await Tenrai.anime.search({
      q: 'attack on titan',
      limit: 5,
      type: 'tv'
    });
    results.data.forEach(anime => {
      console.log(`${anime.title} (${anime.year})`);
    });
  } catch (error) {
    console.error('Error searching anime:', error);
  }
};

getAnime();
searchAnime();
```

## Documentation

### Table of Contents

1. **[Client Configuration](#client-configuration)** - Configure the TenraiClient
2. **[API Endpoints](#-available-endpoints)** - All available endpoints
3. **[Examples](#-examples)** - Real-world usage examples
4. **[Error Handling](#-error-handling)** - Handle errors gracefully
5. **[Rate Limiting](#-rate-limiting)** - Respect API rate limits
6. **[Pagination](#-pagination)** - Navigate through results
7. **[Advanced Usage](#-advanced-usage)** - Advanced patterns and techniques
8. **[TypeScript Types](#-typescript-types)** - Type definitions
### Client Configuration

```typescript
import { TenraiClient } from 'tenrai.js';

// Default configuration
const Tenrai = new TenraiClient();

// Custom configuration
const TenraiCustom = new TenraiClient({
  // Base URL of the Tenrai API
  baseUrl: 'https://api.tenrai.moe/v1',
  
  // Request timeout in milliseconds
  timeout: 30000,
  
  // Custom headers
  headers: {
    'Accept': 'application/json',
    'User-Agent': 'tenrai.js/1.0'
  },
  
  // Enable/disable automatic retries
  retryAttempts: 3,
  retryDelay: 1000,
  
  // Cache configuration
  cacheEnabled: true,
  cacheTTL: 3600000 // 1 hour
});
```

### Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `baseUrl` | string | `https://api.tenrai.moe/v1` | The base URL for the Tenrai API |
| `timeout` | number | `30000` | Request timeout in milliseconds |
| `headers` | object | `{}` | Custom HTTP headers |
| `retryAttempts` | number | `3` | Number of retry attempts on failure |
| `retryDelay` | number | `1000` | Delay between retries in milliseconds |
| `cacheEnabled` | boolean | `true` | Enable response caching |
| `cacheTTL` | number | `3600000` | Cache time-to-live in milliseconds |

### Available Endpoints

The client provides access to all Tenrai API v1 endpoints through these properties:

| Endpoint | Module | Methods |
|----------|--------|---------|
| **Anime** | `Tenrai.anime` | `getById()`, `search()`, `getCharacters()`, `getEpisodes()`, `getStatistics()`, `getForums()`, `getNews()`, `getRecommendations()`, `getRelations()` |
| **Manga** | `Tenrai.manga` | `getById()`, `search()`, `getCharacters()`, `getForums()`, `getNews()`, `getRelations()` |
| **Characters** | `Tenrai.characters` | `getById()`, `search()`, `getPictures()` |
| **People** | `Tenrai.people` | `getById()`, `search()`, `getPictures()` |
| **Clubs** | `Tenrai.clubs` | `getById()`, `search()`, `getRelations()`, `getMembers()` |
| **Seasons** | `Tenrai.seasons` | `getCurrent()`, `getSeason()`, `getUpcoming()` |
| **Schedules** | `Tenrai.schedules` | `getSchedule()` |
| **Top** | `Tenrai.top` | `getAnime()`, `getManga()`, `getCharacters()`, `getPeople()` |
| **Genres** | `Tenrai.genres` | `getAnimeGenres()`, `getMangaGenres()`, `getAnimeExplicitGenres()`, `getMangaExplicitGenres()` |
| **Producers** | `Tenrai.producers` | `getById()`, `search()` |
| **Magazines** | `Tenrai.magazines` | `getById()`, `search()` |
| **Reviews** | `Tenrai.reviews` | `getAnimeReviews()`, `getMangaReviews()` |
| **Recommendations** | `Tenrai.recommendations` | `getRecommendations()` |
| **Random** | `Tenrai.random` | `getAnime()`, `getManga()`, `getCharacter()`, `getPerson()`, `getUser()` |

### Examples

#### Anime

**Get anime information:**

```typescript
// Get anime by ID with full details
const anime = await Tenrai.anime.getById(5114);
console.log(anime.data.title); // "Fullmetal Alchemist: Brotherhood"
console.log(anime.data.score); // 9.1
console.log(anime.data.episodes); // 64
console.log(anime.data.aired.from); // "2009-04-05"
```

**Search anime:**

```typescript
const results = await Tenrai.anime.search({
  q: 'one piece',
  type: 'tv',
  status: 'airing',
  rating: 'pg13',
  score: 7,
  limit: 25,
  page: 1
});

results.data.forEach(anime => {
  console.log(`${anime.title} - ${anime.score}`);
});

// Check pagination
if (results.pagination.has_next_page) {
  const nextPage = await Tenrai.anime.search({
    q: 'one piece',
    page: 2
  });
}
```

**Get anime characters and voice actors:**

```typescript
const characters = await Tenrai.anime.getCharacters(5114);
characters.data.forEach(char => {
  console.log(`${char.character.name} (${char.role})`);
  if (char.voice_actors.length > 0) {
    console.log(`  VA: ${char.voice_actors[0].person.name}`);
  }
});
```

**Get anime episodes:**

```typescript
const episodes = await Tenrai.anime.getEpisodes(5114, 1); // Page 1
episodes.data.forEach(ep => {
  console.log(`Episode ${ep.mal_id}: ${ep.title}`);
  console.log(`  Air date: ${ep.aired}`);
});
```

**Get anime statistics:**

```typescript
const stats = await Tenrai.anime.getStatistics(5114);
stats.data.forEach(stat => {
  console.log(`${stat.title}: ${stat.count} users`);
});
```

#### Manga

**Get manga information:**

```typescript
const manga = await Tenrai.manga.getById(1);
console.log(manga.data.title); // "Berserk"
console.log(manga.data.type); // "Manga"
console.log(manga.data.chapters); // 364 (or null if ongoing)
```

**Search manga:**

```typescript
const results = await Tenrai.manga.search({
  q: 'berserk',
  type: 'manga',
  status: 'publishing',
  score: 8,
  limit: 10
});

results.data.forEach(manga => {
  console.log(`${manga.title} (${manga.chapters} chapters)`);
});
```

**Get manga characters:**

```typescript
const characters = await Tenrai.manga.getCharacters(1);
characters.data.forEach(char => {
  console.log(`${char.character.name} (${char.role})`);
});
```

#### Characters

**Get character information:**

```typescript
const character = await Tenrai.characters.getById(1);
console.log(character.data.name); // "Monkey D. Luffy"
console.log(character.data.about); // Character biography
console.log(character.data.mal_id); // MyAnimeList ID
```

**Search characters:**

```typescript
const results = await Tenrai.characters.search({
  q: 'luffy',
  limit: 10,
  page: 1
});

results.data.forEach(char => {
  console.log(`${char.name} from ${char.anime[0]?.title}`);
});
```

**Get character pictures:**

```typescript
const pictures = await Tenrai.characters.getPictures(1);
pictures.data.forEach(pic => {
  console.log(pic.jpg.image_url);
});
```

#### Seasons

**Get current season:**

```typescript
const currentSeason = await Tenrai.seasons.getCurrent();
currentSeason.data.forEach(anime => {
  console.log(`${anime.title} (${anime.season})`);
});
```

**Get specific season:**

```typescript
const winter2024 = await Tenrai.seasons.getSeason(2024, 'winter');
winter2024.data.forEach(anime => {
  console.log(`${anime.title} - Episodes: ${anime.episodes}`);
});
```

**Get upcoming season:**

```typescript
const upcoming = await Tenrai.seasons.getUpcoming();
upcoming.data.slice(0, 5).forEach(anime => {
  console.log(`${anime.title} (${anime.aired.from})`);
});
```

#### Top

**Get top anime:**

```typescript
const topAnime = await Tenrai.top.getAnime({
  filter: 'airing',
  limit: 25,
  page: 1
});

topAnime.data.forEach((anime, index) => {
  console.log(`${index + 1}. ${anime.title} - ${anime.score}`);
});
```

**Get top manga:**

```typescript
const topManga = await Tenrai.top.getManga({
  filter: 'publishing',
  limit: 10
});

topManga.data.forEach((manga, index) => {
  console.log(`${index + 1}. ${manga.title} - ${manga.score}`);
});
```

**Get top characters and people:**

```typescript
const topCharacters = await Tenrai.top.getCharacters({ limit: 10 });
const topPeople = await Tenrai.top.getPeople({ limit: 10 });
```

#### Random

**Get random content:**

```typescript
const randomAnime = await Tenrai.random.getAnime();
console.log(`Random anime: ${randomAnime.data.title}`);

const randomManga = await Tenrai.random.getManga();
console.log(`Random manga: ${randomManga.data.title}`);

const randomChar = await Tenrai.random.getCharacter();
console.log(`Random character: ${randomChar.data.name}`);
```

#### Other Endpoints

**Genres:**

```typescript
const animeGenres = await Tenrai.genres.getAnimeGenres();
animeGenres.data.forEach(genre => {
  console.log(`${genre.name} - ${genre.count} anime`);
});
```

**Producers:**

```typescript
const producer = await Tenrai.producers.getById(1);
console.log(producer.data.titles[0].title);

const producerSearch = await Tenrai.producers.search({ query: 'sunrise' });
```

**Magazines:**

```typescript
const magazines = await Tenrai.magazines.search({ query: 'jump' });
```

**Reviews:**

```typescript
const animeReviews = await Tenrai.reviews.getAnimeReviews();
animeReviews.data.forEach(review => {
  console.log(`${review.anime.title} - ${review.score}/10`);
  console.log(review.review.substring(0, 100) + '...');
});
```

**Recommendations:**

```typescript
const recommendations = await Tenrai.recommendations.getRecommendations();
recommendations.data.forEach(rec => {
  console.log(
    `If you like ${rec.entry_1.title}, try ${rec.entry_2.title}`
  );
});
```

### Error Handling

The client provides a custom `TenraiError` class for comprehensive error handling:

```typescript
import { TenraiError } from 'tenrai.js';

try {
  const anime = await Tenrai.anime.getById(999999999);
} catch (error) {
  if (error instanceof TenraiError) {
    // API-level error
    console.error(`API Error [${error.status}]: ${error.message}`);
    
    if (error.status === 404) {
      console.log('Anime not found');
    } else if (error.status === 429) {
      console.log('Rate limited - retry after delay');
    } else if (error.status === 500) {
      console.log('Server error - try again later');
    }
    
    // Additional error details
    if (error.data) {
      console.error('Error details:', error.data);
    }
  } else if (error instanceof TypeError) {
    // Network error
    console.error('Network error:', error.message);
  } else {
    // Other errors
    console.error('Unexpected error:', error);
  }
}
```

**Common Error Codes:**

| Status | Meaning | Solution |
|--------|---------|----------|
| `400` | Bad Request | Check your query parameters |
| `404` | Not Found | Verify the ID/resource exists |
| `429` | Too Many Requests | Implement rate limiting (see below) |
| `500` | Server Error | Wait and retry |

###  Rate Limiting

The Tenrai API enforces rate limits. Respect them using these strategies:

**Simple Delay Between Requests:**

```typescript
// Delay helper
const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Fetch with delays
async function fetchAnimeList(ids: number[]) {
  for (const id of ids) {
    try {
      const anime = await Tenrai.anime.getById(id);
      console.log(anime.data.title);
      
      // Wait 400ms between requests to avoid rate limiting
      await wait(400);
    } catch (error) {
      console.error(`Failed to fetch anime ${id}:`, error);
    }
  }
}

fetchAnimeList([1, 5, 10, 15, 20]);
```

**Queue-Based Rate Limiting:**

```typescript
class RequestQueue {
  private queue: (() => Promise<any>)[] = [];
  private processing = false;
  private delayMs = 400;
  
  async add<T>(fn: () => Promise<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      this.queue.push(async () => {
        try {
          const result = await fn();
          resolve(result);
        } catch (error) {
          reject(error);
        }
      });
      this.process();
    });
  }
  
  private async process() {
    if (this.processing || this.queue.length === 0) return;
    
    this.processing = true;
    while (this.queue.length > 0) {
      const fn = this.queue.shift();
      if (fn) {
        await fn();
        await new Promise(r => setTimeout(r, this.delayMs));
      }
    }
    this.processing = false;
  }
}

// Usage
const queue = new RequestQueue();
const animes = [1, 5, 10, 15, 20];
const results = await Promise.all(
  animes.map(id => queue.add(() => Tenrai.anime.getById(id)))
);
```

### Pagination

Navigate through paginated results:

```typescript
interface PaginationOptions {
  limit?: number; // Items per page (default: 25, max: 25)
  page?: number;  // Page number (starts at 1)
}

// Get first page
const firstPage = await Tenrai.anime.search({
  q: 'naruto',
  limit: 10,
  page: 1
});

console.log(`Results: ${firstPage.data.length}`);
console.log(`Current page: ${firstPage.pagination.current_page}`);
console.log(`Last page: ${firstPage.pagination.last_page}`);
console.log(`Has next: ${firstPage.pagination.has_next_page}`);

// Fetch all pages
async function fetchAllPages<T>(
  getPage: (page: number) => Promise<{ data: T[], pagination: any }>
) {
  const allResults: T[] = [];
  let page = 1;
  let hasMore = true;
  
  while (hasMore) {
    const response = await getPage(page);
    allResults.push(...response.data);
    
    hasMore = response.pagination.has_next_page;
    page++;
    
    // Rate limiting
    await new Promise(r => setTimeout(r, 400));
  }
  
  return allResults;
}

// Usage
const allAnimes = await fetchAllPages(
  page => Tenrai.anime.search({ q: 'dragon', page })
);
```

### 🔧 Advanced Usage

**Parallel Requests with Rate Limiting:**

```typescript
async function batchFetch(ids: number[], batchSize = 5) {
  const results = [];
  
  for (let i = 0; i < ids.length; i += batchSize) {
    const batch = ids.slice(i, i + batchSize);
    
    // Fetch batch in parallel
    const batchResults = await Promise.all(
      batch.map(id => Tenrai.anime.getById(id))
    );
    
    results.push(...batchResults);
    
    // Delay between batches
    if (i + batchSize < ids.length) {
      await new Promise(r => setTimeout(r, 1000));
    }
  }
  
  return results;
}

const animes = await batchFetch([1, 5, 10, 15, 20, 25], 3);
```

**Caching Layer:**

```typescript
class CachedClient {
  private cache = new Map<string, { data: any, expiry: number }>();
  private cacheTTL = 3600000; // 1 hour
  
  async get<T>(key: string, fn: () => Promise<T>): Promise<T> {
    const cached = this.cache.get(key);
    
    if (cached && cached.expiry > Date.now()) {
      return cached.data;
    }
    
    const data = await fn();
    this.cache.set(key, { data, expiry: Date.now() + this.cacheTTL });
    return data;
  }
  
  clear() {
    this.cache.clear();
  }
}

// Usage
const client = new CachedClient();
const anime = await client.get('anime:5114', () =>
  Tenrai.anime.getById(5114)
);
```

### TypeScript Types

Full type definitions are available for all responses:

```typescript
import type {
  Anime,
  Manga,
  Character,
  Person,
  AnimeSearchQuery,
  MangaSearchQuery,
  ApiResponse,
  TenraiError
} from 'tenrai.js';

// Type-safe API calls
async function exampleUsage() {
  const response: ApiResponse<Anime> = await Tenrai.anime.getById(5114);
  const anime: Anime = response.data;
  
  // TypeScript knows about all properties
  console.log(anime.episodes);
  console.log(anime.aired);
  console.log(anime.score);
  
  // Search with type-safe parameters
  const query: AnimeSearchQuery = {
    q: 'naruto',
    type: 'tv',
    status: 'airing',
    score: 8,
    limit: 10
  };
  
  const searchResults: ApiResponse<Anime[]> = 
    await Tenrai.anime.search(query);
}
```

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## License

[MIT](LICENSE) © 2026 [gonzyui](https://github.com/gonzyui)

## Acknowledgments

- [Tenrai API](https://tenrai.org/) - The unofficial MyAnimeList API
- [MyAnimeList](https://myanimelist.net/) - The source of all anime/manga data