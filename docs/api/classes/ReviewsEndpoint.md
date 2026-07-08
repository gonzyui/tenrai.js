[**tenrai.js**](../index.md)

***

Defined in: [endpoints/reviews.ts:8](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/reviews.ts#L8)

## Constructors

### Constructor

> **new ReviewsEndpoint**(`client`): `ReviewsEndpoint`

Defined in: [endpoints/reviews.ts:11](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/reviews.ts#L11)

#### Parameters

##### client

[`TenraiClient`](TenraiClient.md)

#### Returns

`ReviewsEndpoint`

## Methods

### getAnimeReviews()

> **getAnimeReviews**(`params?`): `Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`Review`](../interfaces/Review.md)\>\>

Defined in: [endpoints/reviews.ts:20](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/reviews.ts#L20)

Get recent anime reviews

#### Parameters

##### params?

[`ReviewQueryParams`](../interfaces/ReviewQueryParams.md)

Query parameters

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`Review`](../interfaces/Review.md)\>\>

Promise with anime reviews data

***

### getMangaReviews()

> **getMangaReviews**(`params?`): `Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`Review`](../interfaces/Review.md)\>\>

Defined in: [endpoints/reviews.ts:34](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/reviews.ts#L34)

Get recent manga reviews

#### Parameters

##### params?

[`ReviewQueryParams`](../interfaces/ReviewQueryParams.md)

Query parameters

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`Review`](../interfaces/Review.md)\>\>

Promise with manga reviews data
