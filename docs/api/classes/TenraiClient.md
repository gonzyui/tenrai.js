[**tenrai.js**](../index.md)

***

Defined in: [client.ts:55](https://github.com/gonzyui/tenrai.js/blob/dev/src/client.ts#L55)

Main client for interacting with the Tenrai API

## Constructors

### Constructor

> **new TenraiClient**(`options?`): `TenraiClient`

Defined in: [client.ts:84](https://github.com/gonzyui/tenrai.js/blob/dev/src/client.ts#L84)

Create a new TenraiClient instance

#### Parameters

##### options?

[`TenraiClientOptions`](../interfaces/TenraiClientOptions.md) = `{}`

Client configuration options

#### Returns

`TenraiClient`

## Properties

### anime

> **anime**: [`AnimeEndpoint`](AnimeEndpoint.md)

Defined in: [client.ts:66](https://github.com/gonzyui/tenrai.js/blob/dev/src/client.ts#L66)

***

### characters

> **characters**: [`CharactersEndpoint`](CharactersEndpoint.md)

Defined in: [client.ts:68](https://github.com/gonzyui/tenrai.js/blob/dev/src/client.ts#L68)

***

### genres

> **genres**: [`GenresEndpoint`](GenresEndpoint.md)

Defined in: [client.ts:73](https://github.com/gonzyui/tenrai.js/blob/dev/src/client.ts#L73)

***

### magazines

> **magazines**: [`MagazinesEndpoint`](MagazinesEndpoint.md)

Defined in: [client.ts:75](https://github.com/gonzyui/tenrai.js/blob/dev/src/client.ts#L75)

***

### manga

> **manga**: [`MangaEndpoint`](MangaEndpoint.md)

Defined in: [client.ts:67](https://github.com/gonzyui/tenrai.js/blob/dev/src/client.ts#L67)

***

### people

> **people**: [`PeopleEndpoint`](PeopleEndpoint.md)

Defined in: [client.ts:69](https://github.com/gonzyui/tenrai.js/blob/dev/src/client.ts#L69)

***

### producers

> **producers**: [`ProducersEndpoint`](ProducersEndpoint.md)

Defined in: [client.ts:74](https://github.com/gonzyui/tenrai.js/blob/dev/src/client.ts#L74)

***

### random

> **random**: [`RandomEndpoint`](RandomEndpoint.md)

Defined in: [client.ts:78](https://github.com/gonzyui/tenrai.js/blob/dev/src/client.ts#L78)

***

### recommendations

> **recommendations**: [`RecommendationsEndpoint`](RecommendationsEndpoint.md)

Defined in: [client.ts:77](https://github.com/gonzyui/tenrai.js/blob/dev/src/client.ts#L77)

***

### reviews

> **reviews**: [`ReviewsEndpoint`](ReviewsEndpoint.md)

Defined in: [client.ts:76](https://github.com/gonzyui/tenrai.js/blob/dev/src/client.ts#L76)

***

### schedules

> **schedules**: [`SchedulesEndpoint`](SchedulesEndpoint.md)

Defined in: [client.ts:71](https://github.com/gonzyui/tenrai.js/blob/dev/src/client.ts#L71)

***

### seasons

> **seasons**: [`SeasonsEndpoint`](SeasonsEndpoint.md)

Defined in: [client.ts:70](https://github.com/gonzyui/tenrai.js/blob/dev/src/client.ts#L70)

***

### top

> **top**: [`TopEndpoint`](TopEndpoint.md)

Defined in: [client.ts:72](https://github.com/gonzyui/tenrai.js/blob/dev/src/client.ts#L72)

## Methods

### clearCache()

> **clearCache**(): `void`

Defined in: [client.ts:120](https://github.com/gonzyui/tenrai.js/blob/dev/src/client.ts#L120)

Clears the in-memory response cache.

#### Returns

`void`

***

### request()

> **request**\<`T`\>(`endpoint`, `params?`): `Promise`\<`T`\>

Defined in: [client.ts:138](https://github.com/gonzyui/tenrai.js/blob/dev/src/client.ts#L138)

Make a request to the Tenrai API

#### Type Parameters

##### T

`T`

#### Parameters

##### endpoint

`string`

API endpoint path

##### params?

`Record`\<`string`, `any`\>

Query parameters

#### Returns

`Promise`\<`T`\>

Promise with the API response
