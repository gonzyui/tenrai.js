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
- Added `characters.getFullById()` endpoint — fetches full character details including anime/manga appearances and voice actors (`GET /v1/characters/{id}/full`).
- Added `characters.getAnime()` endpoint — fetches character anime appearances (`GET /v1/characters/{id}/anime`).
- Added `characters.getManga()` endpoint — fetches character manga appearances (`GET /v1/characters/{id}/manga`).
- Added `characters.getVoices()` endpoint — fetches character voice actors (`GET /v1/characters/{id}/voices`).
- Added `characters.getAllIds()` endpoint — retrieves all active MAL character IDs, requires Server Key (`GET /v1/characters/ids`).
- Added `CharacterFull`, `CharacterAnimeAppearance`, `CharacterMangaAppearance`, `CharacterVoiceActor`, and `CharacterIdsResponse` type interfaces.
- Added `people.getFullById()` endpoint — fetches full person details including anime, manga, and voice acting roles (`GET /v1/people/{id}/full`).
- Added `people.getAnime()` endpoint — fetches person anime roles (`GET /v1/people/{id}/anime`).
- Added `people.getManga()` endpoint — fetches person manga roles (`GET /v1/people/{id}/manga`).
- Added `people.getVoices()` endpoint — fetches person voice acting roles (`GET /v1/people/{id}/voices`).
- Added `people.getAllIds()` endpoint — retrieves all active MAL person IDs, requires Server Key (`GET /v1/people/ids`).
- Added `PersonFull`, `PersonAnimeRole`, `PersonMangaRole`, `PersonVoiceRole`, and `PersonIdsResponse` type interfaces.
- Added `producers.getFullById()` endpoint — fetches full producer details (`GET /v1/producers/{id}/full`).
- Added `producers.getExternal()` endpoint — fetches producer external links (`GET /v1/producers/{id}/external`).
- Added `producers.getAllIds()` endpoint — retrieves all active MAL producer IDs, requires Server Key (`GET /v1/producers/ids`).
- Added `ProducerFull`, `ProducerExternal`, and `ProducerIdsResponse` type interfaces.

### Changed
- Updated `AnimeQueryParams` in `src/types/anime.ts` to support all Tenrai API parameters:
  - Added `cm | pv | tv_special` to `type`.
  - Added `rplus` to `rating`.
  - Restructured `order_by` (removed `type`, `rating`, `favorites` which are not supported).
  - Added missing parameters: `unapproved`, `start_date`, and `end_date`.
  - Added clear JSDoc documentation for all parameters.
- Updated `MangaQueryParams` in `src/types/manga.ts`:
  - Added `start_date` and `end_date` parameters.
  - Added JSDoc documentation.
- Updated `SeasonQueryParams` in `src/types/seasons.ts`:
  - Enforced correct `filter` type values (removed `unknown`, added `music`).
  - Added `continuing`, `kids`, `order_by`, and `sort` parameters.
  - Added JSDoc documentation.
- Updated `ScheduleQueryParams` in `src/types/schedules.ts`:
  - Added `kids` and `unapproved` parameters.
  - Added JSDoc documentation.
- Revamped `TopQueryParams` and signatures in `src/types/top.ts` & `src/endpoints/top.ts`:
  - Split into specific typed interfaces: `TopAnimeQueryParams`, `TopMangaQueryParams`, and `TopReviewQueryParams` to match Tenrai API constraints.
  - Added JSDoc documentation.
- Updated `ReviewQueryParams` in `src/types/reviews.ts`:
  - Added `sort` and `sentiment` parameters.
  - Aligned `preliminary` and `spoilers` (renamed from `spoiler`) to support `boolean | 'only'`.
  - Added JSDoc documentation.
- Updated endpoint-level `getReviews` signatures in `AnimeEndpoint` and `MangaEndpoint` to accept `ReviewQueryParams`.
- Updated `TenraiError` in `src/types/error.ts` to be type-safe by defining a structured `TenraiApiErrorResponse` interface.
- Expanded `DateRange` in `src/types/common.ts` to fully model the nested `prop` and `string` properties.
- Deprecated `RandomQueryParams` in `src/types/random.ts` since `/random/*` endpoints do not accept query parameters.
- Updated `ProducerQueryParams` in `src/types/producers.ts` to add `favorites` and `established` to `order_by`.
- Added `serverKey`, `cache`, `cacheTtl`, `maxRetries`, and `retryDelay` options to `TenraiClientOptions` in `src/client.ts`.
- Implemented automatic header injection of `X-Server-Key` when using a Server Key.
- Implemented a lightweight in-memory cache system for successful GET requests with configurable TTL and `clearCache()` support.
- Implemented automatic rate limit handling for HTTP `429` status responses with custom Retry-After header parsing and exponential backoff retries.
- Updated `README.md` to accurately describe implemented features (caching, server key, automatic 429 retries) and linked to the documentation website (`https://tenrai.js.org/`).
- Added `test:integration` script to `package.json` to run tests against the live Tenrai API.
- Implemented integration tests in `tests/integration.test.ts` to validate real network requests, data formats, and type consistency (skipped by default unless `INTEGRATION=true` environment variable is set).
- Corrected incorrect feature claims in `README.md` (removed non-existent batching and connection pooling, updated badges to Node.js 18+).
- Corrected project structure layout in `CONTRIBUTING.md` (removed reference to non-existent `examples/` directory) and added links to the official documentation website (`https://tenrai.js.org/`).




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
