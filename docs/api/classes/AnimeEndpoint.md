[**tenrai.js**](../index.md)

***

Defined in: [endpoints/anime.ts:22](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/anime.ts#L22)

## Constructors

### Constructor

> **new AnimeEndpoint**(`client`): `AnimeEndpoint`

Defined in: [endpoints/anime.ts:25](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/anime.ts#L25)

#### Parameters

##### client

[`TenraiClient`](TenraiClient.md)

#### Returns

`AnimeEndpoint`

## Methods

### getById()

> **getById**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Anime`](../interfaces/Anime.md)\>\>

Defined in: [endpoints/anime.ts:34](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/anime.ts#L34)

Get anime by ID

#### Parameters

##### id

`number`

Anime ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Anime`](../interfaces/Anime.md)\>\>

Promise with anime data

***

### getCharacters()

> **getCharacters**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeCharacter`](../interfaces/AnimeCharacter.md)[]\>\>

Defined in: [endpoints/anime.ts:43](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/anime.ts#L43)

Get anime characters and voice actors

#### Parameters

##### id

`number`

Anime ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeCharacter`](../interfaces/AnimeCharacter.md)[]\>\>

Promise with anime characters data

***

### getEpisodeById()

> **getEpisodeById**(`animeId`, `episodeId`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeEpisode`](../interfaces/AnimeEpisode.md)\>\>

Defined in: [endpoints/anime.ts:82](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/anime.ts#L82)

Get anime episode by ID

#### Parameters

##### animeId

`number`

Anime ID

##### episodeId

`number`

Episode ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeEpisode`](../interfaces/AnimeEpisode.md)\>\>

Promise with anime episode data

***

### getEpisodes()

> **getEpisodes**(`id`, `page?`): `Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`AnimeEpisode`](../interfaces/AnimeEpisode.md)\>\>

Defined in: [endpoints/anime.ts:66](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/anime.ts#L66)

Get anime episodes

#### Parameters

##### id

`number`

Anime ID

##### page?

`number`

Page number

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`AnimeEpisode`](../interfaces/AnimeEpisode.md)\>\>

Promise with anime episodes data

***

### getExternal()

> **getExternal**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeExternal`](../interfaces/AnimeExternal.md)[]\>\>

Defined in: [endpoints/anime.ts:207](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/anime.ts#L207)

Get anime external links

#### Parameters

##### id

`number`

Anime ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeExternal`](../interfaces/AnimeExternal.md)[]\>\>

Promise with anime external links data

***

### getMoreInfo()

> **getMoreInfo**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<`string`\>\>

Defined in: [endpoints/anime.ts:147](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/anime.ts#L147)

Get more anime info

#### Parameters

##### id

`number`

Anime ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<`string`\>\>

Promise with more anime info

***

### getNews()

> **getNews**(`id`, `page?`): `Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`AnimeNews`](../interfaces/AnimeNews.md)\>\>

Defined in: [endpoints/anime.ts:97](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/anime.ts#L97)

Get anime news

#### Parameters

##### id

`number`

Anime ID

##### page?

`number`

Page number

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`AnimeNews`](../interfaces/AnimeNews.md)\>\>

Promise with anime news data

***

### getPictures()

> **getPictures**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimePicture`](../interfaces/AnimePicture.md)[]\>\>

Defined in: [endpoints/anime.ts:125](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/anime.ts#L125)

Get anime pictures

#### Parameters

##### id

`number`

Anime ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimePicture`](../interfaces/AnimePicture.md)[]\>\>

Promise with anime pictures data

***

### getRecommendations()

> **getRecommendations**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeRecommendation`](../interfaces/AnimeRecommendation.md)[]\>\>

Defined in: [endpoints/anime.ts:156](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/anime.ts#L156)

Get anime recommendations

#### Parameters

##### id

`number`

Anime ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeRecommendation`](../interfaces/AnimeRecommendation.md)[]\>\>

Promise with anime recommendations data

***

### getRelations()

> **getRelations**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeRelation`](../interfaces/AnimeRelation.md)[]\>\>

Defined in: [endpoints/anime.ts:185](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/anime.ts#L185)

Get anime relations

#### Parameters

##### id

`number`

Anime ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeRelation`](../interfaces/AnimeRelation.md)[]\>\>

Promise with anime relations data

***

### getReviews()

> **getReviews**(`id`, `page?`): `Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`AnimeReview`](../interfaces/AnimeReview.md)\>\>

Defined in: [endpoints/anime.ts:170](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/anime.ts#L170)

Get anime reviews

#### Parameters

##### id

`number`

Anime ID

##### page?

`number`

Page number

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`AnimeReview`](../interfaces/AnimeReview.md)\>\>

Promise with anime reviews data

***

### getStaff()

> **getStaff**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeStaff`](../interfaces/AnimeStaff.md)[]\>\>

Defined in: [endpoints/anime.ts:54](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/anime.ts#L54)

Get anime staff

#### Parameters

##### id

`number`

Anime ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeStaff`](../interfaces/AnimeStaff.md)[]\>\>

Promise with anime staff data

***

### getStatistics()

> **getStatistics**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeStatistics`](../interfaces/AnimeStatistics.md)\>\>

Defined in: [endpoints/anime.ts:136](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/anime.ts#L136)

Get anime statistics

#### Parameters

##### id

`number`

Anime ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeStatistics`](../interfaces/AnimeStatistics.md)\>\>

Promise with anime statistics data

***

### getStreaming()

> **getStreaming**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeStreaming`](../interfaces/AnimeStreaming.md)[]\>\>

Defined in: [endpoints/anime.ts:218](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/anime.ts#L218)

Get anime streaming links

#### Parameters

##### id

`number`

Anime ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeStreaming`](../interfaces/AnimeStreaming.md)[]\>\>

Promise with anime streaming links data

***

### getThemes()

> **getThemes**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeTheme`](../interfaces/AnimeTheme.md)\>\>

Defined in: [endpoints/anime.ts:196](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/anime.ts#L196)

Get anime themes

#### Parameters

##### id

`number`

Anime ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeTheme`](../interfaces/AnimeTheme.md)\>\>

Promise with anime themes data

***

### getVideos()

> **getVideos**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeVideo`](../interfaces/AnimeVideo.md)\>\>

Defined in: [endpoints/anime.ts:114](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/anime.ts#L114)

Get anime videos

#### Parameters

##### id

`number`

Anime ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeVideo`](../interfaces/AnimeVideo.md)\>\>

Promise with anime videos data

***

### search()

> **search**(`params?`): `Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`Anime`](../interfaces/Anime.md)\>\>

Defined in: [endpoints/anime.ts:229](https://github.com/gonzyui/tenrai.js/blob/dev/src/endpoints/anime.ts#L229)

Search for anime

#### Parameters

##### params?

[`AnimeQueryParams`](../interfaces/AnimeQueryParams.md)

Search parameters

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`Anime`](../interfaces/Anime.md)\>\>

Promise with anime search results
