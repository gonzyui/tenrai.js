[**tenrai.js**](../index.md)

***

Defined in: [endpoints/people.ts:15](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/people.ts#L15)

## Constructors

### Constructor

> **new PeopleEndpoint**(`client`): `PeopleEndpoint`

Defined in: [endpoints/people.ts:18](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/people.ts#L18)

#### Parameters

##### client

[`TenraiClient`](TenraiClient.md)

#### Returns

`PeopleEndpoint`

## Methods

### getAllIds()

> **getAllIds**(): `Promise`\<[`PersonIdsResponse`](../interfaces/PersonIdsResponse.md)\>

Defined in: [endpoints/people.ts:147](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/people.ts#L147)

Retrieve all unique MAL person IDs that currently exist and are active.

**Requires a Server Key** — pass it via the `X-Server-Key` header
when constructing the client.

#### Returns

`Promise`\<[`PersonIdsResponse`](../interfaces/PersonIdsResponse.md)\>

Promise with an array of all person IDs

#### See

[Tenrai API](https://api.tenrai.org) — `GET /v1/people/ids`

#### Example

```ts
const client = new TenraiClient({
  headers: { 'X-Server-Key': 'your-server-key' },
});
const ids = await client.people.getAllIds();
console.log(ids.data); // [1, 2, 8, ...]
```

***

### getAnime()

> **getAnime**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`PersonAnimeRole`](../interfaces/PersonAnimeRole.md)[]\>\>

Defined in: [endpoints/people.ts:62](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/people.ts#L62)

Get anime roles of a person.

#### Parameters

##### id

`number`

The MAL person ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`PersonAnimeRole`](../interfaces/PersonAnimeRole.md)[]\>\>

Promise with person anime roles data

#### See

[Tenrai API](https://api.tenrai.org) — `GET /v1/people/{id}/anime`

#### Example

```ts
const roles = await client.people.getAnime(1);
roles.data.forEach(r => console.log(`${r.anime.title} - Position: ${r.position}`));
```

***

### getById()

> **getById**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Person`](../interfaces/Person.md)\>\>

Defined in: [endpoints/people.ts:27](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/people.ts#L27)

Get person by ID

#### Parameters

##### id

`number`

Person ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Person`](../interfaces/Person.md)\>\>

Promise with person data

***

### getFullById()

> **getFullById**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`PersonFull`](../interfaces/PersonFull.md)\>\>

Defined in: [endpoints/people.ts:44](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/people.ts#L44)

Get full person details by ID, including anime roles, manga roles, and voice acting roles.

#### Parameters

##### id

`number`

The MAL person ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`PersonFull`](../interfaces/PersonFull.md)\>\>

Promise with full person data

#### See

[Tenrai API](https://api.tenrai.org) — `GET /v1/people/{id}/full`

#### Example

```ts
const person = await client.people.getFullById(1);
console.log(person.data.anime);  // Anime roles
console.log(person.data.voices); // Voice acting roles
```

***

### getManga()

> **getManga**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`PersonMangaRole`](../interfaces/PersonMangaRole.md)[]\>\>

Defined in: [endpoints/people.ts:80](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/people.ts#L80)

Get manga roles of a person.

#### Parameters

##### id

`number`

The MAL person ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`PersonMangaRole`](../interfaces/PersonMangaRole.md)[]\>\>

Promise with person manga roles data

#### See

[Tenrai API](https://api.tenrai.org) — `GET /v1/people/{id}/manga`

#### Example

```ts
const roles = await client.people.getManga(1);
roles.data.forEach(r => console.log(`${r.manga.title} - Position: ${r.position}`));
```

***

### getPictures()

> **getPictures**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`PersonPicture`](../interfaces/PersonPicture.md)[]\>\>

Defined in: [endpoints/people.ts:109](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/people.ts#L109)

Get person pictures

#### Parameters

##### id

`number`

Person ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`PersonPicture`](../interfaces/PersonPicture.md)[]\>\>

Promise with person pictures data

***

### getVoices()

> **getVoices**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`PersonVoiceRole`](../interfaces/PersonVoiceRole.md)[]\>\>

Defined in: [endpoints/people.ts:98](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/people.ts#L98)

Get voice acting roles of a person.

#### Parameters

##### id

`number`

The MAL person ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`PersonVoiceRole`](../interfaces/PersonVoiceRole.md)[]\>\>

Promise with person voice acting roles data

#### See

[Tenrai API](https://api.tenrai.org) — `GET /v1/people/{id}/voices`

#### Example

```ts
const roles = await client.people.getVoices(1);
roles.data.forEach(r => console.log(`${r.anime.title} - Character: ${r.character.name} (${r.role})`));
```

***

### search()

> **search**(`params?`): `Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`Person`](../interfaces/Person.md)\>\>

Defined in: [endpoints/people.ts:120](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/people.ts#L120)

Search for people

#### Parameters

##### params?

[`PersonQueryParams`](../interfaces/PersonQueryParams.md)

Search parameters

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`Person`](../interfaces/Person.md)\>\>

Promise with people search results
