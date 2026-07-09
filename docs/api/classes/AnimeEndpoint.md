[**tenrai.js**](../index.md)

***

Defined in: [endpoints/anime.ts:26](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/anime.ts#L26)

## Constructors

### Constructor

> **new AnimeEndpoint**(`client`): `AnimeEndpoint`

Defined in: [endpoints/anime.ts:29](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/anime.ts#L29)

#### Parameters

##### client

[`TenraiClient`](TenraiClient.md)

#### Returns

`AnimeEndpoint`

## Methods

### getAllIds()

> **getAllIds**(): `Promise`\<[`AnimeIdsResponse`](../interfaces/AnimeIdsResponse.md)\>

Defined in: [endpoints/anime.ts:300](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/anime.ts#L300)

Retrieve all unique MAL anime IDs that currently exist and are active.

**Requires a Server Key** — pass it via the `X-Server-Key` header
when constructing the client, or use the `serverKey` option.

#### Returns

`Promise`\<[`AnimeIdsResponse`](../interfaces/AnimeIdsResponse.md)\>

Promise with an array of all anime IDs

#### See

[Tenrai API](https://api.tenrai.org) — `GET /v1/anime/ids`

#### Example

```ts
const client = new TenraiClient({
  headers: { 'X-Server-Key': 'your-server-key' },
});
const ids = await client.anime.getAllIds();
console.log(ids.data); // [1, 5, 6, 20, ...]
```

***

### getById()

> **getById**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Anime`](../interfaces/Anime.md)\>\>

Defined in: [endpoints/anime.ts:38](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/anime.ts#L38)

Get anime by ID

#### Parameters

##### id

`number`

Anime ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Anime`](../interfaces/Anime.md)\>\>

Promise with anime data

***

### getCharacters()

> **getCharacters**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeCharacter`](../interfaces/AnimeCharacter.md)[]\>\>

Defined in: [endpoints/anime.ts:66](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/anime.ts#L66)

Get anime characters and voice actors

#### Parameters

##### id

`number`

Anime ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeCharacter`](../interfaces/AnimeCharacter.md)[]\>\>

Promise with anime characters data

***

### getEpisodeById()

> **getEpisodeById**(`animeId`, `episodeId`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeEpisode`](../interfaces/AnimeEpisode.md)\>\>

Defined in: [endpoints/anime.ts:105](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/anime.ts#L105)

Get anime episode by ID

#### Parameters

##### animeId

`number`

Anime ID

##### episodeId

`number`

Episode ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeEpisode`](../interfaces/AnimeEpisode.md)\>\>

Promise with anime episode data

***

### getEpisodes()

> **getEpisodes**(`id`, `page?`): `Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`AnimeEpisode`](../interfaces/AnimeEpisode.md)\>\>

Defined in: [endpoints/anime.ts:89](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/anime.ts#L89)

Get anime episodes

#### Parameters

##### id

`number`

Anime ID

##### page?

`number`

Page number

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`AnimeEpisode`](../interfaces/AnimeEpisode.md)\>\>

Promise with anime episodes data

***

### getExternal()

> **getExternal**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeExternal`](../interfaces/AnimeExternal.md)[]\>\>

Defined in: [endpoints/anime.ts:251](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/anime.ts#L251)

Get anime external links

#### Parameters

##### id

`number`

Anime ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeExternal`](../interfaces/AnimeExternal.md)[]\>\>

Promise with anime external links data

***

### getFullById()

> **getFullById**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeFullDetails`](../interfaces/AnimeFullDetails.md)\>\>

Defined in: [endpoints/anime.ts:55](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/anime.ts#L55)

Get full anime details by ID, including relations, themes, external links, and streaming data.

#### Parameters

##### id

`number`

The MAL anime ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeFullDetails`](../interfaces/AnimeFullDetails.md)\>\>

Promise with full anime data

#### See

[Tenrai API](https://api.tenrai.org) — `GET /v1/anime/{id}/full`

#### Example

```ts
const anime = await client.anime.getFullById(5114);
console.log(anime.data.relations); // Related anime/manga
console.log(anime.data.streaming); // Streaming links
```

***

### getMoreInfo()

> **getMoreInfo**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<`string`\>\>

Defined in: [endpoints/anime.ts:191](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/anime.ts#L191)

Get more anime info

#### Parameters

##### id

`number`

Anime ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<`string`\>\>

Promise with more anime info

***

### getNews()

> **getNews**(`id`, `page?`): `Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`AnimeNews`](../interfaces/AnimeNews.md)\>\>

Defined in: [endpoints/anime.ts:120](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/anime.ts#L120)

Get anime news

#### Parameters

##### id

`number`

Anime ID

##### page?

`number`

Page number

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`AnimeNews`](../interfaces/AnimeNews.md)\>\>

Promise with anime news data

***

### getPictures()

> **getPictures**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimePicture`](../interfaces/AnimePicture.md)[]\>\>

Defined in: [endpoints/anime.ts:169](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/anime.ts#L169)

Get anime pictures

#### Parameters

##### id

`number`

Anime ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimePicture`](../interfaces/AnimePicture.md)[]\>\>

Promise with anime pictures data

***

### getRecommendations()

> **getRecommendations**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeRecommendation`](../interfaces/AnimeRecommendation.md)[]\>\>

Defined in: [endpoints/anime.ts:200](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/anime.ts#L200)

Get anime recommendations

#### Parameters

##### id

`number`

Anime ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeRecommendation`](../interfaces/AnimeRecommendation.md)[]\>\>

Promise with anime recommendations data

***

### getRelations()

> **getRelations**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeRelation`](../interfaces/AnimeRelation.md)[]\>\>

Defined in: [endpoints/anime.ts:229](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/anime.ts#L229)

Get anime relations

#### Parameters

##### id

`number`

Anime ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeRelation`](../interfaces/AnimeRelation.md)[]\>\>

Promise with anime relations data

***

### getReviews()

> **getReviews**(`id`, `params?`): `Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`AnimeReview`](../interfaces/AnimeReview.md)\>\>

Defined in: [endpoints/anime.ts:214](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/anime.ts#L214)

Get anime reviews

#### Parameters

##### id

`number`

Anime ID

##### params?

[`ReviewQueryParams`](../interfaces/ReviewQueryParams.md)

Query parameters (page, limit, spoilers, preliminary, sort, sentiment)

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`AnimeReview`](../interfaces/AnimeReview.md)\>\>

Promise with anime reviews data

***

### getStaff()

> **getStaff**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeStaff`](../interfaces/AnimeStaff.md)[]\>\>

Defined in: [endpoints/anime.ts:77](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/anime.ts#L77)

Get anime staff

#### Parameters

##### id

`number`

Anime ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeStaff`](../interfaces/AnimeStaff.md)[]\>\>

Promise with anime staff data

***

### getStatistics()

> **getStatistics**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeStatistics`](../interfaces/AnimeStatistics.md)\>\>

Defined in: [endpoints/anime.ts:180](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/anime.ts#L180)

Get anime statistics

#### Parameters

##### id

`number`

Anime ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeStatistics`](../interfaces/AnimeStatistics.md)\>\>

Promise with anime statistics data

***

### getStreaming()

> **getStreaming**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeStreaming`](../interfaces/AnimeStreaming.md)[]\>\>

Defined in: [endpoints/anime.ts:262](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/anime.ts#L262)

Get anime streaming links

#### Parameters

##### id

`number`

Anime ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeStreaming`](../interfaces/AnimeStreaming.md)[]\>\>

Promise with anime streaming links data

***

### getThemes()

> **getThemes**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeTheme`](../interfaces/AnimeTheme.md)\>\>

Defined in: [endpoints/anime.ts:240](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/anime.ts#L240)

Get anime themes

#### Parameters

##### id

`number`

Anime ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeTheme`](../interfaces/AnimeTheme.md)\>\>

Promise with anime themes data

***

### getVideoEpisodes()

> **getVideoEpisodes**(`id`, `page?`): `Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`AnimeVideoEpisode`](../interfaces/AnimeVideoEpisode.md)\>\>

Defined in: [endpoints/anime.ts:154](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/anime.ts#L154)

Get paginated episode videos for an anime.

#### Parameters

##### id

`number`

The MAL anime ID

##### page?

`number`

Page number (default: 1)

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`AnimeVideoEpisode`](../interfaces/AnimeVideoEpisode.md)\>\>

Promise with paginated episode video data

#### See

[Tenrai API](https://api.tenrai.org) — `GET /v1/anime/{id}/videos/episodes`

#### Example

```ts
const videos = await client.anime.getVideoEpisodes(5114, 2);
videos.data.forEach(ep => console.log(ep.title));
```

***

### getVideos()

> **getVideos**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeVideo`](../interfaces/AnimeVideo.md)\>\>

Defined in: [endpoints/anime.ts:135](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/anime.ts#L135)

Get anime videos

#### Parameters

##### id

`number`

Anime ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeVideo`](../interfaces/AnimeVideo.md)\>\>

Promise with anime videos data

***

### search()

> **search**(`params?`): `Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`Anime`](../interfaces/Anime.md)\>\>

Defined in: [endpoints/anime.ts:273](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/anime.ts#L273)

Search for anime

#### Parameters

##### params?

[`AnimeQueryParams`](../interfaces/AnimeQueryParams.md)

Search parameters

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`Anime`](../interfaces/Anime.md)\>\>

Promise with anime search results
