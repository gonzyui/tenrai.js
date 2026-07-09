[**tenrai.js**](../index.md)

***

Defined in: [types/error.ts:4](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/error.ts#L4)

Represents the standard structured error response returned by the Tenrai API.

## Properties

### error?

> `optional` **error?**: `string`

Defined in: [types/error.ts:20](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/error.ts#L20)

Additional context or recovery guidance (optional).

***

### message

> **message**: `string`

Defined in: [types/error.ts:16](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/error.ts#L16)

The human-readable explanation of what happened.

***

### path

> **path**: `string`

Defined in: [types/error.ts:24](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/error.ts#L24)

The request path that produced the error.

***

### status

> **status**: `number`

Defined in: [types/error.ts:8](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/error.ts#L8)

The HTTP status code returned for the request.

***

### type

> **type**: `string`

Defined in: [types/error.ts:12](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/error.ts#L12)

The machine-readable category of the error.
