[**tenrai.js**](../index.md)

***

Defined in: [endpoints/characters.ts:15](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/characters.ts#L15)

## Constructors

### Constructor

> **new CharactersEndpoint**(`client`): `CharactersEndpoint`

Defined in: [endpoints/characters.ts:18](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/characters.ts#L18)

#### Parameters

##### client

[`TenraiClient`](TenraiClient.md)

#### Returns

`CharactersEndpoint`

## Methods

### getAllIds()

> **getAllIds**(): `Promise`\<[`CharacterIdsResponse`](../interfaces/CharacterIdsResponse.md)\>

Defined in: [endpoints/characters.ts:151](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/characters.ts#L151)

Retrieve all unique MAL character IDs that currently exist and are active.

**Requires a Server Key** — pass it via the `X-Server-Key` header
when constructing the client.

#### Returns

`Promise`\<[`CharacterIdsResponse`](../interfaces/CharacterIdsResponse.md)\>

Promise with an array of all character IDs

#### See

[Tenrai API](https://api.tenrai.org) — `GET /v1/characters/ids`

#### Example

```ts
const client = new TenraiClient({
  headers: { 'X-Server-Key': 'your-server-key' },
});
const ids = await client.characters.getAllIds();
console.log(ids.data); // [1, 2, 30, ...]
```

***

### getAnime()

> **getAnime**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`CharacterAnimeAppearance`](../interfaces/CharacterAnimeAppearance.md)[]\>\>

Defined in: [endpoints/characters.ts:62](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/characters.ts#L62)

Get anime appearances of a character.

#### Parameters

##### id

`number`

The MAL character ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`CharacterAnimeAppearance`](../interfaces/CharacterAnimeAppearance.md)[]\>\>

Promise with character anime appearances data

#### See

[Tenrai API](https://api.tenrai.org) — `GET /v1/characters/{id}/anime`

#### Example

```ts
const appearances = await client.characters.getAnime(1);
appearances.data.forEach(app => console.log(`${app.anime.title} - Role: ${app.role}`));
```

***

### getById()

> **getById**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Character`](../interfaces/Character.md)\>\>

Defined in: [endpoints/characters.ts:27](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/characters.ts#L27)

Get character by ID

#### Parameters

##### id

`number`

Character ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Character`](../interfaces/Character.md)\>\>

Promise with character data

***

### getFullById()

> **getFullById**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`CharacterFull`](../interfaces/CharacterFull.md)\>\>

Defined in: [endpoints/characters.ts:44](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/characters.ts#L44)

Get full character details by ID, including animeography, mangaography, and voice actors.

#### Parameters

##### id

`number`

The MAL character ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`CharacterFull`](../interfaces/CharacterFull.md)\>\>

Promise with full character data

#### See

[Tenrai API](https://api.tenrai.org) — `GET /v1/characters/{id}/full`

#### Example

```ts
const char = await client.characters.getFullById(1);
console.log(char.data.animeography); // Anime appearances
console.log(char.data.voices);       // Voice actors
```

***

### getManga()

> **getManga**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`CharacterMangaAppearance`](../interfaces/CharacterMangaAppearance.md)[]\>\>

Defined in: [endpoints/characters.ts:82](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/characters.ts#L82)

Get manga appearances of a character.

#### Parameters

##### id

`number`

The MAL character ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`CharacterMangaAppearance`](../interfaces/CharacterMangaAppearance.md)[]\>\>

Promise with character manga appearances data

#### See

[Tenrai API](https://api.tenrai.org) — `GET /v1/characters/{id}/manga`

#### Example

```ts
const appearances = await client.characters.getManga(1);
appearances.data.forEach(app => console.log(`${app.manga.title} - Role: ${app.role}`));
```

***

### getPictures()

> **getPictures**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`CharacterPicture`](../interfaces/CharacterPicture.md)[]\>\>

Defined in: [endpoints/characters.ts:113](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/characters.ts#L113)

Get character pictures

#### Parameters

##### id

`number`

Character ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`CharacterPicture`](../interfaces/CharacterPicture.md)[]\>\>

Promise with character pictures data

***

### getVoices()

> **getVoices**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`CharacterVoiceActor`](../interfaces/CharacterVoiceActor.md)[]\>\>

Defined in: [endpoints/characters.ts:102](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/characters.ts#L102)

Get voice actors for a character.

#### Parameters

##### id

`number`

The MAL character ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`CharacterVoiceActor`](../interfaces/CharacterVoiceActor.md)[]\>\>

Promise with character voice actors data

#### See

[Tenrai API](https://api.tenrai.org) — `GET /v1/characters/{id}/voices`

#### Example

```ts
const voiceActors = await client.characters.getVoices(1);
voiceActors.data.forEach(va => console.log(`${va.person.name} (${va.language})`));
```

***

### search()

> **search**(`params?`): `Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`Character`](../interfaces/Character.md)\>\>

Defined in: [endpoints/characters.ts:124](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/characters.ts#L124)

Search for characters

#### Parameters

##### params?

[`CharacterQueryParams`](../interfaces/CharacterQueryParams.md)

Search parameters

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`Character`](../interfaces/Character.md)\>\>

Promise with character search results
