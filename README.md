# Tenrai.js

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178c6?style=flat-square)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-16+-339933?style=flat-square)](https://nodejs.org/)

**A type-safe, feature-complete TypeScript wrapper for the Tenrai API v1**

---

> 📖 **Full Documentation**: Visit [tenrai.js.org](https://tenrai.js.org/) for complete guides and API Reference.

## Overview

A comprehensive, production-ready TypeScript wrapper for the **Tenrai API v1** (unofficial MyAnimeList API). Built with type safety, performance, and developer experience in mind.

Provides seamless access to MyAnimeList data including anime, manga, characters, people, and more with full TypeScript support and robust error handling.

## Features

- **Type-Safe**: Full TypeScript support with comprehensive type definitions for all API responses
- **Complete Coverage**: All Tenrai API v1 endpoints implemented and tested
- **Built-in Caching**: Optional in-memory caching system with configurable Time-To-Live (TTL)
- **Robust Error Handling**: Custom error classes with detailed API error responses and status codes
- **Rate Limit Aware**: Automatic rate limit (`429`) handling with built-in retry mechanism and exponential backoff
- **Server Key Support**: Fully compatible with Tenrai Server Keys to leverage higher throughput limits
- **Zero Dependencies**: Minimal footprint using native Node.js APIs

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

- Node.js 18 or higher (utilizes native fetch)
- TypeScript 4.7 or higher (for TypeScript projects)

## Quick Start

### Basic Usage

```typescript
import { TenraiClient } from 'tenrai.js';

// Initialize the client with optional caching and server key
const Tenrai = new TenraiClient({
  serverKey: 'your_secret_server_key', // Optional, increases rate limits
  cache: true,                         // Enable in-memory caching (default: false)
  cacheTtl: 300000,                    // Cache TTL in ms (default: 5 minutes)
  maxRetries: 3                        // Auto-retry 429 rate limits (default: 3)
});

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

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## License

[MIT](LICENSE) © 2026 [gonzyui](https://github.com/gonzyui)

## Acknowledgments

- [Tenrai API](https://tenrai.org/) - The unofficial MyAnimeList API
- [MyAnimeList](https://myanimelist.net/) - The source of all anime/manga data