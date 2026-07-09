[**tenrai.js**](../index.md)

***

Defined in: [endpoints/top.ts:15](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/top.ts#L15)

## Constructors

### Constructor

> **new TopEndpoint**(`client`): `TopEndpoint`

Defined in: [endpoints/top.ts:18](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/top.ts#L18)

#### Parameters

##### client

[`TenraiClient`](TenraiClient.md)

#### Returns

`TopEndpoint`

## Methods

### getAnime()

> **getAnime**(`params?`): `Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`TopAnime`](../interfaces/TopAnime.md)\>\>

Defined in: [endpoints/top.ts:27](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/top.ts#L27)

Get top anime

#### Parameters

##### params?

[`TopAnimeQueryParams`](../interfaces/TopAnimeQueryParams.md)

Query parameters

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`TopAnime`](../interfaces/TopAnime.md)\>\>

Promise with top anime data

***

### getCharacters()

> **getCharacters**(`params?`): `Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`TopCharacter`](../interfaces/TopCharacter.md)\>\>

Defined in: [endpoints/top.ts:55](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/top.ts#L55)

Get top characters

#### Parameters

##### params?

[`TopQueryParams`](../interfaces/TopQueryParams.md)

Query parameters

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`TopCharacter`](../interfaces/TopCharacter.md)\>\>

Promise with top characters data

***

### getManga()

> **getManga**(`params?`): `Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`TopManga`](../interfaces/TopManga.md)\>\>

Defined in: [endpoints/top.ts:41](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/top.ts#L41)

Get top manga

#### Parameters

##### params?

[`TopMangaQueryParams`](../interfaces/TopMangaQueryParams.md)

Query parameters

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`TopManga`](../interfaces/TopManga.md)\>\>

Promise with top manga data

***

### getPeople()

> **getPeople**(`params?`): `Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`TopPerson`](../interfaces/TopPerson.md)\>\>

Defined in: [endpoints/top.ts:69](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/top.ts#L69)

Get top people

#### Parameters

##### params?

[`TopQueryParams`](../interfaces/TopQueryParams.md)

Query parameters

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`TopPerson`](../interfaces/TopPerson.md)\>\>

Promise with top people data

***

### getReviews()

> **getReviews**(`params?`): `Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`TopReview`](../interfaces/TopReview.md)\>\>

Defined in: [endpoints/top.ts:83](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/top.ts#L83)

Get top reviews

#### Parameters

##### params?

[`TopReviewQueryParams`](../interfaces/TopReviewQueryParams.md)

Query parameters

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`TopReview`](../interfaces/TopReview.md)\>\>

Promise with top reviews data
