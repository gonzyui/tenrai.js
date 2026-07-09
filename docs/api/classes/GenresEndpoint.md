[**tenrai.js**](../index.md)

***

Defined in: [endpoints/genres.ts:8](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/genres.ts#L8)

Endpoint wrapper for anime and manga genres.
Provides access to the `/genres/anime` and `/genres/manga` resources.

## Constructors

### Constructor

> **new GenresEndpoint**(`client`): `GenresEndpoint`

Defined in: [endpoints/genres.ts:11](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/genres.ts#L11)

#### Parameters

##### client

[`TenraiClient`](TenraiClient.md)

#### Returns

`GenresEndpoint`

## Methods

### getAnimeGenres()

> **getAnimeGenres**(`params?`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Genre`](../interfaces/Genre.md)[]\>\>

Defined in: [endpoints/genres.ts:27](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/genres.ts#L27)

Retrieve a list of all anime genres (including explicit genres, themes, and demographics).

#### Parameters

##### params?

[`GenreQueryParams`](../interfaces/GenreQueryParams.md)

Optional query parameters to filter the list of genres

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Genre`](../interfaces/Genre.md)[]\>\>

Promise with the list of anime genres

#### See

[Tenrai API](https://api.tenrai.org) — `GET /v1/genres/anime`

#### Example

```ts
const genres = await client.genres.getAnimeGenres({ filter: 'themes' });
genres.data.forEach(g => console.log(`${g.name} (MAL ID: ${g.mal_id})`));
```

***

### getMangaGenres()

> **getMangaGenres**(`params?`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Genre`](../interfaces/Genre.md)[]\>\>

Defined in: [endpoints/genres.ts:48](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/genres.ts#L48)

Retrieve a list of all manga genres (including explicit genres, themes, and demographics).

#### Parameters

##### params?

[`GenreQueryParams`](../interfaces/GenreQueryParams.md)

Optional query parameters to filter the list of genres

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Genre`](../interfaces/Genre.md)[]\>\>

Promise with the list of manga genres

#### See

[Tenrai API](https://api.tenrai.org) — `GET /v1/genres/manga`

#### Example

```ts
const genres = await client.genres.getMangaGenres({ filter: 'demographics' });
genres.data.forEach(g => console.log(`${g.name} (MAL ID: ${g.mal_id})`));
```
