[**tenrai.js**](../index.md)

***

Defined in: [endpoints/manga.ts:17](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/manga.ts#L17)

## Constructors

### Constructor

> **new MangaEndpoint**(`client`): `MangaEndpoint`

Defined in: [endpoints/manga.ts:20](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/manga.ts#L20)

#### Parameters

##### client

[`TenraiClient`](TenraiClient.md)

#### Returns

`MangaEndpoint`

## Methods

### getById()

> **getById**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Manga`](../interfaces/Manga.md)\>\>

Defined in: [endpoints/manga.ts:29](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/manga.ts#L29)

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

Defined in: [endpoints/manga.ts:38](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/manga.ts#L38)

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

Defined in: [endpoints/manga.ts:138](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/manga.ts#L138)

Get manga external links

#### Parameters

##### id

`number`

Manga ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`MangaExternal`](../interfaces/MangaExternal.md)[]\>\>

Promise with manga external links data

***

### getMoreInfo()

> **getMoreInfo**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<`string`\>\>

Defined in: [endpoints/manga.ts:89](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/manga.ts#L89)

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

Defined in: [endpoints/manga.ts:50](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/manga.ts#L50)

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

Defined in: [endpoints/manga.ts:67](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/manga.ts#L67)

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

Defined in: [endpoints/manga.ts:98](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/manga.ts#L98)

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

Defined in: [endpoints/manga.ts:127](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/manga.ts#L127)

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

> **getReviews**(`id`, `page?`): `Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`MangaReview`](../interfaces/MangaReview.md)\>\>

Defined in: [endpoints/manga.ts:112](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/manga.ts#L112)

Get manga reviews

#### Parameters

##### id

`number`

Manga ID

##### page?

`number`

Page number

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`MangaReview`](../interfaces/MangaReview.md)\>\>

Promise with manga reviews data

***

### getStatistics()

> **getStatistics**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`MangaStatistics`](../interfaces/MangaStatistics.md)\>\>

Defined in: [endpoints/manga.ts:78](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/manga.ts#L78)

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

Defined in: [endpoints/manga.ts:149](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/manga.ts#L149)

Search for manga

#### Parameters

##### params?

[`MangaQueryParams`](../interfaces/MangaQueryParams.md)

Search parameters

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`Manga`](../interfaces/Manga.md)\>\>

Promise with manga search results
