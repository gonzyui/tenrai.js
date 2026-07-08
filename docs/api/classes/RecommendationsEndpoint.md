[**tenrai.js**](../index.md)

***

Defined in: [endpoints/recommendations.ts:8](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/recommendations.ts#L8)

## Constructors

### Constructor

> **new RecommendationsEndpoint**(`client`): `RecommendationsEndpoint`

Defined in: [endpoints/recommendations.ts:11](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/recommendations.ts#L11)

#### Parameters

##### client

[`TenraiClient`](TenraiClient.md)

#### Returns

`RecommendationsEndpoint`

## Methods

### getAnimeRecommendations()

> **getAnimeRecommendations**(`params?`): `Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`Recommendation`](../interfaces/Recommendation.md)\>\>

Defined in: [endpoints/recommendations.ts:20](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/recommendations.ts#L20)

Get recent anime recommendations

#### Parameters

##### params?

[`RecommendationQueryParams`](../interfaces/RecommendationQueryParams.md)

Query parameters

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`Recommendation`](../interfaces/Recommendation.md)\>\>

Promise with anime recommendations data

***

### getMangaRecommendations()

> **getMangaRecommendations**(`params?`): `Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`Recommendation`](../interfaces/Recommendation.md)\>\>

Defined in: [endpoints/recommendations.ts:34](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/recommendations.ts#L34)

Get recent manga recommendations

#### Parameters

##### params?

[`RecommendationQueryParams`](../interfaces/RecommendationQueryParams.md)

Query parameters

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`Recommendation`](../interfaces/Recommendation.md)\>\>

Promise with manga recommendations data
