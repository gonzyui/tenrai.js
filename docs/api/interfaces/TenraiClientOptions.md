[**tenrai.js**](../index.md)

***

Defined in: [client.ts:16](https://github.com/gonzyui/tenrai.js/blob/dev/src/client.ts#L16)

## Properties

### baseUrl?

> `optional` **baseUrl?**: `string`

Defined in: [client.ts:20](https://github.com/gonzyui/tenrai.js/blob/dev/src/client.ts#L20)

The base URL of the Tenrai API (default: 'https://api.tenrai.org/v1').

***

### cache?

> `optional` **cache?**: `boolean`

Defined in: [client.ts:37](https://github.com/gonzyui/tenrai.js/blob/dev/src/client.ts#L37)

Enable in-memory caching for GET requests (default: false).

***

### cacheTtl?

> `optional` **cacheTtl?**: `number`

Defined in: [client.ts:41](https://github.com/gonzyui/tenrai.js/blob/dev/src/client.ts#L41)

Time-to-live for cached responses in milliseconds (default: 300000ms / 5 minutes).

***

### headers?

> `optional` **headers?**: `Record`\<`string`, `string`\>

Defined in: [client.ts:28](https://github.com/gonzyui/tenrai.js/blob/dev/src/client.ts#L28)

Custom HTTP headers to include with every request.

***

### maxRetries?

> `optional` **maxRetries?**: `number`

Defined in: [client.ts:45](https://github.com/gonzyui/tenrai.js/blob/dev/src/client.ts#L45)

Maximum number of retry attempts for 429 Rate Limit responses (default: 3).

***

### retryDelay?

> `optional` **retryDelay?**: `number`

Defined in: [client.ts:49](https://github.com/gonzyui/tenrai.js/blob/dev/src/client.ts#L49)

Delay multiplier or starting delay in milliseconds for retrying rate-limited requests (default: 1000ms).

***

### serverKey?

> `optional` **serverKey?**: `string`

Defined in: [client.ts:33](https://github.com/gonzyui/tenrai.js/blob/dev/src/client.ts#L33)

The Server Key to authenticate requests and increase rate limits.
Will be sent via the `X-Server-Key` header.

***

### timeout?

> `optional` **timeout?**: `number`

Defined in: [client.ts:24](https://github.com/gonzyui/tenrai.js/blob/dev/src/client.ts#L24)

The request timeout in milliseconds (default: 30000ms).
