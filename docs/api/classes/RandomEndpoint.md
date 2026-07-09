[**tenrai.js**](../index.md)

***

Defined in: [endpoints/random.ts:8](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/random.ts#L8)

Endpoint wrapper for pulling random MAL records.
Provides access to `/random/anime`, `/random/manga`, `/random/characters`, and `/random/people`.

## Constructors

### Constructor

> **new RandomEndpoint**(`client`): `RandomEndpoint`

Defined in: [endpoints/random.ts:11](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/random.ts#L11)

#### Parameters

##### client

[`TenraiClient`](TenraiClient.md)

#### Returns

`RandomEndpoint`

## Methods

### getAnime()

> **getAnime**(): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Anime`](../interfaces/Anime.md)\>\>

Defined in: [endpoints/random.ts:26](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/random.ts#L26)

Retrieve a random anime entry from the database.

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Anime`](../interfaces/Anime.md)\>\>

Promise with a random anime's details

#### See

[Tenrai API](https://api.tenrai.org) — `GET /v1/random/anime`

#### Example

```ts
const randomAnime = await client.random.getAnime();
console.log(`Random anime pick: ${randomAnime.data.title}`);
```

***

### getCharacter()

> **getCharacter**(): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Character`](../interfaces/Character.md)\>\>

Defined in: [endpoints/random.ts:56](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/random.ts#L56)

Retrieve a random character entry from the database.

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Character`](../interfaces/Character.md)\>\>

Promise with a random character's details

#### See

[Tenrai API](https://api.tenrai.org) — `GET /v1/random/characters`

#### Example

```ts
const randomChar = await client.random.getCharacter();
console.log(`Random character pick: ${randomChar.data.name}`);
```

***

### getManga()

> **getManga**(): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Manga`](../interfaces/Manga.md)\>\>

Defined in: [endpoints/random.ts:41](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/random.ts#L41)

Retrieve a random manga entry from the database.

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Manga`](../interfaces/Manga.md)\>\>

Promise with a random manga's details

#### See

[Tenrai API](https://api.tenrai.org) — `GET /v1/random/manga`

#### Example

```ts
const randomManga = await client.random.getManga();
console.log(`Random manga pick: ${randomManga.data.title}`);
```

***

### getPerson()

> **getPerson**(): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Person`](../interfaces/Person.md)\>\>

Defined in: [endpoints/random.ts:71](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/random.ts#L71)

Retrieve a random person entry from the database.

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Person`](../interfaces/Person.md)\>\>

Promise with a random person's details

#### See

[Tenrai API](https://api.tenrai.org) — `GET /v1/random/people`

#### Example

```ts
const randomPerson = await client.random.getPerson();
console.log(`Random person pick: ${randomPerson.data.name}`);
```
