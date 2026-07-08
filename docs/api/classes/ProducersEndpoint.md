[**tenrai.js**](../index.md)

***

Defined in: [endpoints/producers.ts:8](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/producers.ts#L8)

## Constructors

### Constructor

> **new ProducersEndpoint**(`client`): `ProducersEndpoint`

Defined in: [endpoints/producers.ts:11](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/producers.ts#L11)

#### Parameters

##### client

[`TenraiClient`](TenraiClient.md)

#### Returns

`ProducersEndpoint`

## Methods

### getAll()

> **getAll**(`params?`): `Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`Producer`](../interfaces/Producer.md)\>\>

Defined in: [endpoints/producers.ts:38](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/producers.ts#L38)

Get all producers

#### Parameters

##### params?

[`ProducerQueryParams`](../interfaces/ProducerQueryParams.md)

Query parameters

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`Producer`](../interfaces/Producer.md)\>\>

Promise with producers data

***

### getById()

> **getById**(`id`, `page?`, `limit?`): `Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`Producer`](../interfaces/Producer.md)\>\>

Defined in: [endpoints/producers.ts:22](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/producers.ts#L22)

Get producer by ID

#### Parameters

##### id

`number`

Producer ID

##### page?

`number`

Page number

##### limit?

`number`

Results per page

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`Producer`](../interfaces/Producer.md)\>\>

Promise with producer data
