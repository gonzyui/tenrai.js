# Getting Started

Welcome to the **tenrai.js** documentation!

This library provides a complete, robust, and fully-typed interface to interact with the **tenrai.org** (MyAnimeList) API.

---

## Installation

Install the package into your project using your preferred package manager:

::: code-group

```bash [npm]
npm install tenrai.js
```

```bash [yarn]
yarn add tenrai.js
```

```bash [pnpm]
pnpm add tenrai.js
```

:::

### Prerequisites

- **Node.js** v16.0.0 or higher.
- **TypeScript** v4.7 or higher (if you are using TypeScript).

---

## Quick Start

Here is a simple example to get you up and running: initializing the client and fetching an anime by its ID.

```typescript
import { TenraiClient } from 'tenrai.js';

// 1. Initialize the client
const tenrai = new TenraiClient();

async function run() {
  try {
    // 2. Fetch anime details (e.g. Fullmetal Alchemist: Brotherhood, ID: 5114)
    const response = await tenrai.anime.getById(5114);
    
    console.log(`Title: ${response.data.title}`);
    console.log(`Score: ${response.data.score}`);
    console.log(`Episodes: ${response.data.episodes}`);
  } catch (error) {
    console.error("Error fetching anime:", error);
  }
}

run();
```

---

## Searching Anime

You can also perform advanced searches with specific queries and filters:

```typescript
import { TenraiClient } from 'tenrai.js';

const tenrai = new TenraiClient();

async function search() {
  const results = await tenrai.anime.search({
    q: 'Attack on Titan',
    limit: 5,
    type: 'tv'
  });

  results.data.forEach(anime => {
    console.log(`- ${anime.title} (${anime.year || 'N/A'}) - Score: ${anime.score}`);
  });
}

search();
```
