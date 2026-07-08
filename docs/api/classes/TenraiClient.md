[**tenrai.js**](../index.md)

***

Defined in: [client.ts:25](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/client.ts#L25)

Main client for interacting with the Tenrai API

## Constructors

### Constructor

> **new TenraiClient**(`options?`): `TenraiClient`

Defined in: [client.ts:49](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/client.ts#L49)

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

Defined in: [client.ts:31](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/client.ts#L31)

***

### characters

> **characters**: [`CharactersEndpoint`](CharactersEndpoint.md)

Defined in: [client.ts:33](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/client.ts#L33)

***

### genres

> **genres**: [`GenresEndpoint`](GenresEndpoint.md)

Defined in: [client.ts:38](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/client.ts#L38)

***

### magazines

> **magazines**: [`MagazinesEndpoint`](MagazinesEndpoint.md)

Defined in: [client.ts:40](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/client.ts#L40)

***

### manga

> **manga**: [`MangaEndpoint`](MangaEndpoint.md)

Defined in: [client.ts:32](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/client.ts#L32)

***

### people

> **people**: [`PeopleEndpoint`](PeopleEndpoint.md)

Defined in: [client.ts:34](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/client.ts#L34)

***

### producers

> **producers**: [`ProducersEndpoint`](ProducersEndpoint.md)

Defined in: [client.ts:39](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/client.ts#L39)

***

### random

> **random**: [`RandomEndpoint`](RandomEndpoint.md)

Defined in: [client.ts:43](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/client.ts#L43)

***

### recommendations

> **recommendations**: [`RecommendationsEndpoint`](RecommendationsEndpoint.md)

Defined in: [client.ts:42](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/client.ts#L42)

***

### reviews

> **reviews**: [`ReviewsEndpoint`](ReviewsEndpoint.md)

Defined in: [client.ts:41](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/client.ts#L41)

***

### schedules

> **schedules**: [`SchedulesEndpoint`](SchedulesEndpoint.md)

Defined in: [client.ts:36](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/client.ts#L36)

***

### seasons

> **seasons**: [`SeasonsEndpoint`](SeasonsEndpoint.md)

Defined in: [client.ts:35](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/client.ts#L35)

***

### top

> **top**: [`TopEndpoint`](TopEndpoint.md)

Defined in: [client.ts:37](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/client.ts#L37)

## Methods

### request()

> **request**\<`T`\>(`endpoint`, `params?`): `Promise`\<`T`\>

Defined in: [client.ts:79](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/client.ts#L79)

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
