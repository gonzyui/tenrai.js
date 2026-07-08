[**tenrai.js**](../index.md)

***

Defined in: [endpoints/seasons.ts:10](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/seasons.ts#L10)

## Constructors

### Constructor

> **new SeasonsEndpoint**(`client`): `SeasonsEndpoint`

Defined in: [endpoints/seasons.ts:13](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/seasons.ts#L13)

#### Parameters

##### client

[`TenraiClient`](TenraiClient.md)

#### Returns

`SeasonsEndpoint`

## Methods

### getCurrent()

> **getCurrent**(`params?`): `Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`SeasonalAnime`](../interfaces/SeasonalAnime.md)\>\>

Defined in: [endpoints/seasons.ts:48](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/seasons.ts#L48)

Get current season anime

#### Parameters

##### params?

[`SeasonQueryParams`](../interfaces/SeasonQueryParams.md)

Query parameters

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`SeasonalAnime`](../interfaces/SeasonalAnime.md)\>\>

Promise with current season anime data

***

### getList()

> **getList**(): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Season`](../interfaces/Season.md)[]\>\>

Defined in: [endpoints/seasons.ts:21](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/seasons.ts#L21)

Get available seasons

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Season`](../interfaces/Season.md)[]\>\>

Promise with available seasons data

***

### getSeason()

> **getSeason**(`year`, `season`, `params?`): `Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`SeasonalAnime`](../interfaces/SeasonalAnime.md)\>\>

Defined in: [endpoints/seasons.ts:32](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/seasons.ts#L32)

Get seasonal anime

#### Parameters

##### year

`number`

Year

##### season

`"winter"` \| `"spring"` \| `"summer"` \| `"fall"`

Season (winter, spring, summer, fall)

##### params?

[`SeasonQueryParams`](../interfaces/SeasonQueryParams.md)

Query parameters

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`SeasonalAnime`](../interfaces/SeasonalAnime.md)\>\>

Promise with seasonal anime data

***

### getUpcoming()

> **getUpcoming**(`params?`): `Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`SeasonalAnime`](../interfaces/SeasonalAnime.md)\>\>

Defined in: [endpoints/seasons.ts:62](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/seasons.ts#L62)

Get upcoming season anime

#### Parameters

##### params?

[`SeasonQueryParams`](../interfaces/SeasonQueryParams.md)

Query parameters

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`SeasonalAnime`](../interfaces/SeasonalAnime.md)\>\>

Promise with upcoming season anime data
