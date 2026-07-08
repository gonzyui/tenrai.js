[**tenrai.js**](../index.md)

***

Defined in: [endpoints/genres.ts:4](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/genres.ts#L4)

## Constructors

### Constructor

> **new GenresEndpoint**(`client`): `GenresEndpoint`

Defined in: [endpoints/genres.ts:7](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/genres.ts#L7)

#### Parameters

##### client

[`TenraiClient`](TenraiClient.md)

#### Returns

`GenresEndpoint`

## Methods

### getAnimeGenres()

> **getAnimeGenres**(`params?`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Genre`](../interfaces/Genre.md)[]\>\>

Defined in: [endpoints/genres.ts:16](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/genres.ts#L16)

Get anime genres

#### Parameters

##### params?

[`GenreQueryParams`](../interfaces/GenreQueryParams.md)

Query parameters

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Genre`](../interfaces/Genre.md)[]\>\>

Promise with anime genres data

***

### getMangaGenres()

> **getMangaGenres**(`params?`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Genre`](../interfaces/Genre.md)[]\>\>

Defined in: [endpoints/genres.ts:30](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/genres.ts#L30)

Get manga genres

#### Parameters

##### params?

[`GenreQueryParams`](../interfaces/GenreQueryParams.md)

Query parameters

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Genre`](../interfaces/Genre.md)[]\>\>

Promise with manga genres data
