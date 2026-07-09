[**tenrai.js**](../index.md)

***

Defined in: [endpoints/magazines.ts:12](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/magazines.ts#L12)

Endpoint wrapper for MAL magazines.
Provides access to the `/magazines` resource.

## Constructors

### Constructor

> **new MagazinesEndpoint**(`client`): `MagazinesEndpoint`

Defined in: [endpoints/magazines.ts:15](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/magazines.ts#L15)

#### Parameters

##### client

[`TenraiClient`](TenraiClient.md)

#### Returns

`MagazinesEndpoint`

## Methods

### getAll()

> **getAll**(`params?`): `Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`Magazine`](../interfaces/Magazine.md)\>\>

Defined in: [endpoints/magazines.ts:31](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/magazines.ts#L31)

Retrieve a paginated list of magazines, publishing counts, and metadata.

#### Parameters

##### params?

[`MagazineQueryParams`](../interfaces/MagazineQueryParams.md)

Optional query parameters for pagination, sorting, and name filtering

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`Magazine`](../interfaces/Magazine.md)\>\>

Promise with a paginated list of magazines

#### See

[Tenrai API](https://api.tenrai.org) — `GET /v1/magazines`

#### Example

```ts
const magazines = await client.magazines.getAll({ q: 'shonen', limit: 10 });
magazines.data.forEach(mag => console.log(`${mag.name} has ${mag.count} manga published`));
```
