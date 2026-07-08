[**tenrai.js**](../index.md)

***

Defined in: [endpoints/random.ts:4](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/random.ts#L4)

## Constructors

### Constructor

> **new RandomEndpoint**(`client`): `RandomEndpoint`

Defined in: [endpoints/random.ts:7](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/random.ts#L7)

#### Parameters

##### client

[`TenraiClient`](TenraiClient.md)

#### Returns

`RandomEndpoint`

## Methods

### getAnime()

> **getAnime**(): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Anime`](../interfaces/Anime.md)\>\>

Defined in: [endpoints/random.ts:15](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/random.ts#L15)

Get random anime

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Anime`](../interfaces/Anime.md)\>\>

Promise with random anime data

***

### getCharacter()

> **getCharacter**(): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Character`](../interfaces/Character.md)\>\>

Defined in: [endpoints/random.ts:31](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/random.ts#L31)

Get random character

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Character`](../interfaces/Character.md)\>\>

Promise with random character data

***

### getManga()

> **getManga**(): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Manga`](../interfaces/Manga.md)\>\>

Defined in: [endpoints/random.ts:23](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/random.ts#L23)

Get random manga

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Manga`](../interfaces/Manga.md)\>\>

Promise with random manga data

***

### getPerson()

> **getPerson**(): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Person`](../interfaces/Person.md)\>\>

Defined in: [endpoints/random.ts:39](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/random.ts#L39)

Get random person

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Person`](../interfaces/Person.md)\>\>

Promise with random person data

***

### getUser()

> **getUser**(): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<`any`\>\>

Defined in: [endpoints/random.ts:47](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/random.ts#L47)

Get random user

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<`any`\>\>

Promise with random user data
