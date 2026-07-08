# Changelog

This project adheres to Semantic Versioning.

## 1.0.0 - 2026-07-08

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

### Removed
- Removed `users`, and `clubs` endpoint.
- Removed `userMangaUpdate` and `userAnimeUpdate`.
- Temporarily removed Husky and pre-commit hooks until the project is ready for release.
- Removed GitHub Actions workflows.
