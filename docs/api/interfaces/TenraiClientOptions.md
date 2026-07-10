[**tenrai.js**](../index.md)

***

Defined in: [client.ts:17](https://github.com/gonzyui/tenrai.js/blob/dev/src/client.ts#L17)

## Properties

### baseUrl?

> `optional` **baseUrl?**: `string`

Defined in: [client.ts:21](https://github.com/gonzyui/tenrai.js/blob/dev/src/client.ts#L21)

The base URL of the Tenrai API (default: 'https://api.tenrai.org/v1').

***

### cache?

> `optional` **cache?**: `boolean`

Defined in: [client.ts:38](https://github.com/gonzyui/tenrai.js/blob/dev/src/client.ts#L38)

Enable in-memory caching for GET requests (default: false).

***

### cacheTtl?

> `optional` **cacheTtl?**: `number`

Defined in: [client.ts:42](https://github.com/gonzyui/tenrai.js/blob/dev/src/client.ts#L42)

Time-to-live for cached responses in milliseconds (default: 300000ms / 5 minutes).

***

### headers?

> `optional` **headers?**: `Record`\<`string`, `string`\>

Defined in: [client.ts:29](https://github.com/gonzyui/tenrai.js/blob/dev/src/client.ts#L29)

Custom HTTP headers to include with every request.

***

### maxRetries?

> `optional` **maxRetries?**: `number`

Defined in: [client.ts:46](https://github.com/gonzyui/tenrai.js/blob/dev/src/client.ts#L46)

Maximum number of retry attempts for 429 Rate Limit responses (default: 3).

***

### retryDelay?

> `optional` **retryDelay?**: `number`

Defined in: [client.ts:50](https://github.com/gonzyui/tenrai.js/blob/dev/src/client.ts#L50)

Delay multiplier or starting delay in milliseconds for retrying rate-limited requests (default: 1000ms).

***

### serverKey?

> `optional` **serverKey?**: `string`

Defined in: [client.ts:34](https://github.com/gonzyui/tenrai.js/blob/dev/src/client.ts#L34)

The Server Key to authenticate requests and increase rate limits.
Will be sent via the `X-Server-Key` header.

***

### timeout?

> `optional` **timeout?**: `number`

Defined in: [client.ts:25](https://github.com/gonzyui/tenrai.js/blob/dev/src/client.ts#L25)

The request timeout in milliseconds (default: 30000ms).
