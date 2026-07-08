[**tenrai.js**](../index.md)

***

Defined in: [endpoints/manga.ts:18](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/manga.ts#L18)

## Constructors

### Constructor

> **new MangaEndpoint**(`client`): `MangaEndpoint`

Defined in: [endpoints/manga.ts:21](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/manga.ts#L21)

#### Parameters

##### client

[`TenraiClient`](TenraiClient.md)

#### Returns

`MangaEndpoint`

## Methods

### getById()

> **getById**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Manga`](../interfaces/Manga.md)\>\>

Defined in: [endpoints/manga.ts:30](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/manga.ts#L30)

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

Defined in: [endpoints/manga.ts:39](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/manga.ts#L39)

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

Defined in: [endpoints/manga.ts:148](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/manga.ts#L148)

Get manga external links

#### Parameters

##### id

`number`

Manga ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`MangaExternal`](../interfaces/MangaExternal.md)[]\>\>

Promise with manga external links data

***

### getForum()

> **getForum**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`MangaForum`](../interfaces/MangaForum.md)[]\>\>

Defined in: [endpoints/manga.ts:66](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/manga.ts#L66)

Get manga forum topics

#### Parameters

##### id

`number`

Manga ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`MangaForum`](../interfaces/MangaForum.md)[]\>\>

Promise with manga forum data

***

### getMoreInfo()

> **getMoreInfo**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<`string`\>\>

Defined in: [endpoints/manga.ts:99](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/manga.ts#L99)

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

Defined in: [endpoints/manga.ts:51](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/manga.ts#L51)

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

Defined in: [endpoints/manga.ts:77](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/manga.ts#L77)

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

Defined in: [endpoints/manga.ts:108](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/manga.ts#L108)

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

Defined in: [endpoints/manga.ts:137](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/manga.ts#L137)

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

Defined in: [endpoints/manga.ts:122](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/manga.ts#L122)

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

Defined in: [endpoints/manga.ts:88](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/manga.ts#L88)

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

Defined in: [endpoints/manga.ts:159](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/manga.ts#L159)

Search for manga

#### Parameters

##### params?

[`MangaQueryParams`](../interfaces/MangaQueryParams.md)

Search parameters

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`Manga`](../interfaces/Manga.md)\>\>

Promise with manga search results
