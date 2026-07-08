[**tenrai.js**](../index.md)

***

Defined in: [endpoints/characters.ts:10](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/characters.ts#L10)

## Constructors

### Constructor

> **new CharactersEndpoint**(`client`): `CharactersEndpoint`

Defined in: [endpoints/characters.ts:13](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/characters.ts#L13)

#### Parameters

##### client

[`TenraiClient`](TenraiClient.md)

#### Returns

`CharactersEndpoint`

## Methods

### getById()

> **getById**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Character`](../interfaces/Character.md)\>\>

Defined in: [endpoints/characters.ts:22](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/characters.ts#L22)

Get character by ID

#### Parameters

##### id

`number`

Character ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Character`](../interfaces/Character.md)\>\>

Promise with character data

***

### getPictures()

> **getPictures**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`CharacterPicture`](../interfaces/CharacterPicture.md)[]\>\>

Defined in: [endpoints/characters.ts:31](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/characters.ts#L31)

Get character pictures

#### Parameters

##### id

`number`

Character ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`CharacterPicture`](../interfaces/CharacterPicture.md)[]\>\>

Promise with character pictures data

***

### search()

> **search**(`params?`): `Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`Character`](../interfaces/Character.md)\>\>

Defined in: [endpoints/characters.ts:42](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/characters.ts#L42)

Search for characters

#### Parameters

##### params?

[`CharacterQueryParams`](../interfaces/CharacterQueryParams.md)

Search parameters

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`Character`](../interfaces/Character.md)\>\>

Promise with character search results
