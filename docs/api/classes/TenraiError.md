[**tenrai.js**](../index.md)

***

Defined in: [types/error.ts:30](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/error.ts#L30)

Standard error class thrown by the Tenrai client when request failures occur.

## Extends

- `Error`

## Constructors

### Constructor

> **new TenraiError**(`message`, `status`, `data?`): `TenraiError`

Defined in: [types/error.ts:40](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/error.ts#L40)

#### Parameters

##### message

`string`

##### status

`number`

##### data?

[`TenraiApiErrorResponse`](../interfaces/TenraiApiErrorResponse.md)

#### Returns

`TenraiError`

#### Overrides

`Error.constructor`

## Properties

### data?

> `optional` **data?**: [`TenraiApiErrorResponse`](../interfaces/TenraiApiErrorResponse.md)

Defined in: [types/error.ts:38](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/error.ts#L38)

Structured error details from the Tenrai API.

***

### status

> **status**: `number`

Defined in: [types/error.ts:34](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/error.ts#L34)

The HTTP status code of the error.
