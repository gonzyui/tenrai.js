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

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## License

[MIT](LICENSE) © 2026 [gonzyui](https://github.com/gonzyui)

## Acknowledgments

- [Tenrai API](https://tenrai.org/) - The unofficial MyAnimeList API
- [MyAnimeList](https://myanimelist.net/) - The source of all anime/manga data