[**tenrai.js**](../index.md)

***

Defined in: [endpoints/people.ts:10](https://github.com/gonzyui/tenrai.js/blob/7cd0cdeffc6a1b40f20a8ca1b79e42b6c58295fd/src/endpoints/people.ts#L10)

## Constructors

### Constructor

> **new PeopleEndpoint**(`client`): `PeopleEndpoint`

Defined in: [endpoints/people.ts:13](https://github.com/gonzyui/tenrai.js/blob/7cd0cdeffc6a1b40f20a8ca1b79e42b6c58295fd/src/endpoints/people.ts#L13)

#### Parameters

##### client

[`TenraiClient`](TenraiClient.md)

#### Returns

`PeopleEndpoint`

## Methods

### getById()

> **getById**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Person`](../interfaces/Person.md)\>\>

Defined in: [endpoints/people.ts:22](https://github.com/gonzyui/tenrai.js/blob/7cd0cdeffc6a1b40f20a8ca1b79e42b6c58295fd/src/endpoints/people.ts#L22)

Get person by ID

#### Parameters

##### id

`number`

Person ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Person`](../interfaces/Person.md)\>\>

Promise with person data

***

### getPictures()

> **getPictures**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`PersonPicture`](../interfaces/PersonPicture.md)[]\>\>

Defined in: [endpoints/people.ts:31](https://github.com/gonzyui/tenrai.js/blob/7cd0cdeffc6a1b40f20a8ca1b79e42b6c58295fd/src/endpoints/people.ts#L31)

Get person pictures

#### Parameters

##### id

`number`

Person ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`PersonPicture`](../interfaces/PersonPicture.md)[]\>\>

Promise with person pictures data

***

### search()

> **search**(`params?`): `Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`Person`](../interfaces/Person.md)\>\>

Defined in: [endpoints/people.ts:42](https://github.com/gonzyui/tenrai.js/blob/7cd0cdeffc6a1b40f20a8ca1b79e42b6c58295fd/src/endpoints/people.ts#L42)

Search for people

#### Parameters

##### params?

[`PersonQueryParams`](../interfaces/PersonQueryParams.md)

Search parameters

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`Person`](../interfaces/Person.md)\>\>

Promise with people search results
