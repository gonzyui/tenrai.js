[**tenrai.js**](../index.md)

***

Defined in: [endpoints/producers.ts:12](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/producers.ts#L12)

## Constructors

### Constructor

> **new ProducersEndpoint**(`client`): `ProducersEndpoint`

Defined in: [endpoints/producers.ts:15](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/producers.ts#L15)

#### Parameters

##### client

[`TenraiClient`](TenraiClient.md)

#### Returns

`ProducersEndpoint`

## Methods

### getAll()

> **getAll**(`params?`): `Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`Producer`](../interfaces/Producer.md)\>\>

Defined in: [endpoints/producers.ts:79](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/producers.ts#L79)

Get all producers

#### Parameters

##### params?

[`ProducerQueryParams`](../interfaces/ProducerQueryParams.md)

Query parameters

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`Producer`](../interfaces/Producer.md)\>\>

Promise with producers data

***

### getAllIds()

> **getAllIds**(): `Promise`\<[`ProducerIdsResponse`](../interfaces/ProducerIdsResponse.md)\>

Defined in: [endpoints/producers.ts:106](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/producers.ts#L106)

Retrieve all unique MAL producer IDs that currently exist and are active.

**Requires a Server Key** — pass it via the `X-Server-Key` header
when constructing the client.

#### Returns

`Promise`\<[`ProducerIdsResponse`](../interfaces/ProducerIdsResponse.md)\>

Promise with an array of all producer IDs

#### See

[Tenrai API](https://api.tenrai.org) — `GET /v1/producers/ids`

#### Example

```ts
const client = new TenraiClient({
  headers: { 'X-Server-Key': 'your-server-key' },
});
const ids = await client.producers.getAllIds();
console.log(ids.data); // [1, 2, 3, ...]
```

***

### getById()

> **getById**(`id`, `page?`, `limit?`): `Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`Producer`](../interfaces/Producer.md)\>\>

Defined in: [endpoints/producers.ts:26](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/producers.ts#L26)

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

***

### getExternal()

> **getExternal**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`ProducerExternal`](../interfaces/ProducerExternal.md)[]\>\>

Defined in: [endpoints/producers.ts:68](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/producers.ts#L68)

Get external links for a producer.

#### Parameters

##### id

`number`

The MAL producer ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`ProducerExternal`](../interfaces/ProducerExternal.md)[]\>\>

Promise with producer external links data

#### See

[Tenrai API](https://api.tenrai.org) — `GET /v1/producers/{id}/external`

#### Example

```ts
const links = await client.producers.getExternal(1);
links.data.forEach(link => console.log(`${link.name}: ${link.url}`));
```

***

### getFullById()

> **getFullById**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`ProducerFull`](../interfaces/ProducerFull.md)\>\>

Defined in: [endpoints/producers.ts:50](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/producers.ts#L50)

Get full producer details by ID, including titles, external links, etc.

#### Parameters

##### id

`number`

The MAL producer ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`ProducerFull`](../interfaces/ProducerFull.md)\>\>

Promise with full producer data

#### See

[Tenrai API](https://api.tenrai.org) — `GET /v1/producers/{id}/full`

#### Example

```ts
const producer = await client.producers.getFullById(1);
console.log(producer.data.established); // Established date
console.log(producer.data.external);    // External links
```
