[**tenrai.js**](../index.md)

***

Defined in: [endpoints/top.ts:12](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/top.ts#L12)

## Constructors

### Constructor

> **new TopEndpoint**(`client`): `TopEndpoint`

Defined in: [endpoints/top.ts:15](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/top.ts#L15)

#### Parameters

##### client

[`TenraiClient`](TenraiClient.md)

#### Returns

`TopEndpoint`

## Methods

### getAnime()

> **getAnime**(`params?`): `Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`TopAnime`](../interfaces/TopAnime.md)\>\>

Defined in: [endpoints/top.ts:24](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/top.ts#L24)

Get top anime

#### Parameters

##### params?

[`TopQueryParams`](../interfaces/TopQueryParams.md)

Query parameters

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`TopAnime`](../interfaces/TopAnime.md)\>\>

Promise with top anime data

***

### getCharacters()

> **getCharacters**(`params?`): `Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`TopCharacter`](../interfaces/TopCharacter.md)\>\>

Defined in: [endpoints/top.ts:52](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/top.ts#L52)

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

Defined in: [endpoints/top.ts:38](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/top.ts#L38)

Get top manga

#### Parameters

##### params?

[`TopQueryParams`](../interfaces/TopQueryParams.md)

Query parameters

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`TopManga`](../interfaces/TopManga.md)\>\>

Promise with top manga data

***

### getPeople()

> **getPeople**(`params?`): `Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`TopPerson`](../interfaces/TopPerson.md)\>\>

Defined in: [endpoints/top.ts:66](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/top.ts#L66)

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

Defined in: [endpoints/top.ts:80](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/top.ts#L80)

Get top reviews

#### Parameters

##### params?

[`TopQueryParams`](../interfaces/TopQueryParams.md)

Query parameters

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`TopReview`](../interfaces/TopReview.md)\>\>

Promise with top reviews data
