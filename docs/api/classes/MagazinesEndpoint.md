[**tenrai.js**](../index.md)

***

Defined in: [endpoints/magazines.ts:8](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/magazines.ts#L8)

## Constructors

### Constructor

> **new MagazinesEndpoint**(`client`): `MagazinesEndpoint`

Defined in: [endpoints/magazines.ts:11](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/magazines.ts#L11)

#### Parameters

##### client

[`TenraiClient`](TenraiClient.md)

#### Returns

`MagazinesEndpoint`

## Methods

### getAll()

> **getAll**(`params?`): `Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`Magazine`](../interfaces/Magazine.md)\>\>

Defined in: [endpoints/magazines.ts:38](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/magazines.ts#L38)

Get all magazines

#### Parameters

##### params?

[`MagazineQueryParams`](../interfaces/MagazineQueryParams.md)

Query parameters

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`Magazine`](../interfaces/Magazine.md)\>\>

Promise with magazines data

***

### getById()

> **getById**(`id`, `page?`, `limit?`): `Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`Magazine`](../interfaces/Magazine.md)\>\>

Defined in: [endpoints/magazines.ts:22](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/magazines.ts#L22)

Get magazine by ID

#### Parameters

##### id

`number`

Magazine ID

##### page?

`number`

Page number

##### limit?

`number`

Results per page

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`Magazine`](../interfaces/Magazine.md)\>\>

Promise with magazine data
