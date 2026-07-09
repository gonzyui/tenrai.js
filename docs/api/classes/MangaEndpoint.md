[**tenrai.js**](../index.md)

***

Defined in: [endpoints/manga.ts:20](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/manga.ts#L20)

## Constructors

### Constructor

> **new MangaEndpoint**(`client`): `MangaEndpoint`

Defined in: [endpoints/manga.ts:23](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/manga.ts#L23)

#### Parameters

##### client

[`TenraiClient`](TenraiClient.md)

#### Returns

`MangaEndpoint`

## Methods

### getAllIds()

> **getAllIds**(): `Promise`\<[`MangaIdsResponse`](../interfaces/MangaIdsResponse.md)\>

Defined in: [endpoints/manga.ts:196](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/manga.ts#L196)

Retrieve all unique MAL manga IDs that currently exist and are active.

**Requires a Server Key** — pass it via the `X-Server-Key` header
when constructing the client.

#### Returns

`Promise`\<[`MangaIdsResponse`](../interfaces/MangaIdsResponse.md)\>

Promise with an array of all manga IDs

#### See

[Tenrai API](https://api.tenrai.org) — `GET /v1/manga/ids`

#### Example

```ts
const client = new TenraiClient({
  headers: { 'X-Server-Key': 'your-server-key' },
});
const ids = await client.manga.getAllIds();
console.log(ids.data); // [1, 2, 13, 21, ...]
```

***

### getById()

> **getById**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Manga`](../interfaces/Manga.md)\>\>

Defined in: [endpoints/manga.ts:32](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/manga.ts#L32)

Get manga by ID

#### Parameters

##### id

`number`

Manga ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Manga`](../interfaces/Manga.md)\>\>

Promise with manga data

***

### getCharacters()

> **getCharacters**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`MangaCharacter`](../interfaces/MangaCharacter.md)[]\>\>

Defined in: [endpoints/manga.ts:60](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/manga.ts#L60)

Get manga characters

#### Parameters

##### id

`number`

Manga ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`MangaCharacter`](../interfaces/MangaCharacter.md)[]\>\>

Promise with manga characters data

***

### getExternal()

> **getExternal**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`MangaExternal`](../interfaces/MangaExternal.md)[]\>\>

Defined in: [endpoints/manga.ts:158](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/manga.ts#L158)

Get manga external links

#### Parameters

##### id

`number`

Manga ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`MangaExternal`](../interfaces/MangaExternal.md)[]\>\>

Promise with manga external links data

***

### getFullById()

> **getFullById**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`MangaFullDetails`](../interfaces/MangaFullDetails.md)\>\>

Defined in: [endpoints/manga.ts:49](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/manga.ts#L49)

Get full manga details by ID, including relations and external links.

#### Parameters

##### id

`number`

The MAL manga ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`MangaFullDetails`](../interfaces/MangaFullDetails.md)\>\>

Promise with full manga data

#### See

[Tenrai API](https://api.tenrai.org) — `GET /v1/manga/{id}/full`

#### Example

```ts
const manga = await client.manga.getFullById(13);
console.log(manga.data.relations); // Related manga/anime
console.log(manga.data.external);  // External links
```

***

### getMoreInfo()

> **getMoreInfo**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<`string`\>\>

Defined in: [endpoints/manga.ts:109](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/manga.ts#L109)

Get more manga info

#### Parameters

##### id

`number`

Manga ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<`string`\>\>

Promise with more manga info

***

### getNews()

> **getNews**(`id`, `page?`): `Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`MangaNews`](../interfaces/MangaNews.md)\>\>

Defined in: [endpoints/manga.ts:72](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/manga.ts#L72)

Get manga news

#### Parameters

##### id

`number`

Manga ID

##### page?

`number`

Page number

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`MangaNews`](../interfaces/MangaNews.md)\>\>

Promise with manga news data

***

### getPictures()

> **getPictures**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`MangaPicture`](../interfaces/MangaPicture.md)[]\>\>

Defined in: [endpoints/manga.ts:87](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/manga.ts#L87)

Get manga pictures

#### Parameters

##### id

`number`

Manga ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`MangaPicture`](../interfaces/MangaPicture.md)[]\>\>

Promise with manga pictures data

***

### getRecommendations()

> **getRecommendations**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`MangaRecommendation`](../interfaces/MangaRecommendation.md)[]\>\>

Defined in: [endpoints/manga.ts:118](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/manga.ts#L118)

Get manga recommendations

#### Parameters

##### id

`number`

Manga ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`MangaRecommendation`](../interfaces/MangaRecommendation.md)[]\>\>

Promise with manga recommendations data

***

### getRelations()

> **getRelations**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`MangaRelation`](../interfaces/MangaRelation.md)[]\>\>

Defined in: [endpoints/manga.ts:147](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/manga.ts#L147)

Get manga relations

#### Parameters

##### id

`number`

Manga ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`MangaRelation`](../interfaces/MangaRelation.md)[]\>\>

Promise with manga relations data

***

### getReviews()

> **getReviews**(`id`, `params?`): `Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`MangaReview`](../interfaces/MangaReview.md)\>\>

Defined in: [endpoints/manga.ts:132](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/manga.ts#L132)

Get manga reviews

#### Parameters

##### id

`number`

Manga ID

##### params?

[`ReviewQueryParams`](../interfaces/ReviewQueryParams.md)

Query parameters (page, limit, spoilers, preliminary, sort, sentiment)

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`MangaReview`](../interfaces/MangaReview.md)\>\>

Promise with manga reviews data

***

### getStatistics()

> **getStatistics**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`MangaStatistics`](../interfaces/MangaStatistics.md)\>\>

Defined in: [endpoints/manga.ts:98](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/manga.ts#L98)

Get manga statistics

#### Parameters

##### id

`number`

Manga ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`MangaStatistics`](../interfaces/MangaStatistics.md)\>\>

Promise with manga statistics data

***

### search()

> **search**(`params?`): `Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`Manga`](../interfaces/Manga.md)\>\>

Defined in: [endpoints/manga.ts:169](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/manga.ts#L169)

Search for manga

#### Parameters

##### params?

[`MangaQueryParams`](../interfaces/MangaQueryParams.md)

Search parameters

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`Manga`](../interfaces/Manga.md)\>\>

Promise with manga search results
