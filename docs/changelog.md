---
outline: deep
---

# Changelog

This project adheres to [Semantic Versioning](https://semver.org/).

## 1.0.1 - 2026-07-09

### Added
- Added `anime.getFullById()` endpoint — fetches full anime details including relations, themes, external links, and streaming data (`GET /v1/anime/{id}/full`).
- Added `anime.getVideoEpisodes()` endpoint — fetches paginated episode videos (`GET /v1/anime/{id}/videos/episodes`).
- Added `anime.getAllIds()` endpoint — retrieves all active MAL anime IDs, requires Server Key (`GET /v1/anime/ids`).
- Added `AnimeFullDetails`, `AnimeVideoEpisode`, and `AnimeIdsResponse` type interfaces.
- Added `manga.getFullById()` endpoint — fetches full manga details including relations and external links (`GET /v1/manga/{id}/full`).
- Added `manga.getAllIds()` endpoint — retrieves all active MAL manga IDs, requires Server Key (`GET /v1/manga/ids`).
- Added `MangaFullDetails` and `MangaIdsResponse` type interfaces.

### Removed
- Removed `anime.getForum()` endpoint — `/anime/{id}/forum` does not exist in the Tenrai API (Jikan-only endpoint).
- Removed `manga.getForum()` endpoint — `/manga/{id}/forum` does not exist in the Tenrai API (Jikan-only endpoint).
- Removed `random.getUser()` endpoint — `/random/users` does not exist in the Tenrai API (no user data endpoints).
- Removed `AnimeForum` and `MangaForum` type interfaces (unused after endpoint removal).
- Removed associated unit tests for the above ghost endpoints.
---

<details>
<summary><strong>1.0.0 - 2026-07-08</strong> <em>(click to expand)</em></summary>

### Added
- Fork of the original "MyAnimeList-Wrapper" (https://github.com/firrthecreator/myanimelist-wrapper).
- Complete migration of the wrapper to support the **Tenrai API** due to the announced Jikan shutdown.
- Renamed the project package to `tenrai.js`.
- Migrated the package manager from `npm` to `pnpm`.
- Switched linting and formatting tools from ESLint and Prettier to **Biome**.
- Upgraded all dev dependencies to their latest major versions:
  - `@biomejs/biome` 1.9.4 → 2.5.2
  - `@types/node` 20.x → 26.1.0
  - `typescript` 5.9.3 → 6.0.3
  - `vitest` 0.34.6 → 4.1.10
  - `@vitest/coverage-v8` 0.34.6 → 4.1.10
- Fixed `tsconfig.json` to explicitly set `rootDir` required by TypeScript 6.
- Added GitHub Actions workflow to automatically publish `tenrai.js` to npm upon release creation.
- Added GitHub Actions workflow for CI (lint, test, build) on push and pull requests to `main`.

### Removed
- Removed `users`, and `clubs` endpoint.
- Removed `userMangaUpdate` and `userAnimeUpdate`.
- Temporarily removed Husky and pre-commit hooks until the project is ready for release.
- Removed old GitHub Actions CI/CD workflows.

</details>

<style>
details {
  margin-top: 2rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 0 1rem;
}

details summary {
  cursor: pointer;
  padding: 0.75rem 0;
  font-size: 1.1rem;
  color: var(--vp-c-text-2);
  transition: color 0.2s;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

details summary::before {
  content: '▶';
  font-size: 0.7rem;
  transition: transform 0.2s;
}

details[open] summary::before {
  transform: rotate(90deg);
}

details summary:hover {
  color: var(--vp-c-brand-1);
}

details summary em {
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
}

details[open] summary {
  border-bottom: 1px solid var(--vp-c-divider);
  margin-bottom: 0.5rem;
}
</style>
