[**tenrai.js**](../index.md)

***

Defined in: [endpoints/anime.ts:23](https://github.com/gonzyui/tenrai.js/blob/7cd0cdeffc6a1b40f20a8ca1b79e42b6c58295fd/src/endpoints/anime.ts#L23)

## Constructors

### Constructor

> **new AnimeEndpoint**(`client`): `AnimeEndpoint`

Defined in: [endpoints/anime.ts:26](https://github.com/gonzyui/tenrai.js/blob/7cd0cdeffc6a1b40f20a8ca1b79e42b6c58295fd/src/endpoints/anime.ts#L26)

#### Parameters

##### client

[`TenraiClient`](TenraiClient.md)

#### Returns

`AnimeEndpoint`

## Methods

### getById()

> **getById**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`Anime`](../interfaces/Anime.md)\>\>

Defined in: [endpoints/anime.ts:35](https://github.com/gonzyui/tenrai.js/blob/7cd0cdeffc6a1b40f20a8ca1b79e42b6c58295fd/src/endpoints/anime.ts#L35)

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

Defined in: [endpoints/anime.ts:44](https://github.com/gonzyui/tenrai.js/blob/7cd0cdeffc6a1b40f20a8ca1b79e42b6c58295fd/src/endpoints/anime.ts#L44)

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

Defined in: [endpoints/anime.ts:83](https://github.com/gonzyui/tenrai.js/blob/7cd0cdeffc6a1b40f20a8ca1b79e42b6c58295fd/src/endpoints/anime.ts#L83)

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

Defined in: [endpoints/anime.ts:67](https://github.com/gonzyui/tenrai.js/blob/7cd0cdeffc6a1b40f20a8ca1b79e42b6c58295fd/src/endpoints/anime.ts#L67)

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

Defined in: [endpoints/anime.ts:222](https://github.com/gonzyui/tenrai.js/blob/7cd0cdeffc6a1b40f20a8ca1b79e42b6c58295fd/src/endpoints/anime.ts#L222)

Get anime external links

#### Parameters

##### id

`number`

Anime ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeExternal`](../interfaces/AnimeExternal.md)[]\>\>

Promise with anime external links data

***

### getForum()

> **getForum**(`id`, `filter?`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeForum`](../interfaces/AnimeForum.md)[]\>\>

Defined in: [endpoints/anime.ts:114](https://github.com/gonzyui/tenrai.js/blob/7cd0cdeffc6a1b40f20a8ca1b79e42b6c58295fd/src/endpoints/anime.ts#L114)

Get anime forum topics

#### Parameters

##### id

`number`

Anime ID

##### filter?

`"other"` \| `"all"` \| `"episode"`

Filter topics (all, episode, other)

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`AnimeForum`](../interfaces/AnimeForum.md)[]\>\>

Promise with anime forum data

***

### getMoreInfo()

> **getMoreInfo**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<`string`\>\>

Defined in: [endpoints/anime.ts:162](https://github.com/gonzyui/tenrai.js/blob/7cd0cdeffc6a1b40f20a8ca1b79e42b6c58295fd/src/endpoints/anime.ts#L162)

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

Defined in: [endpoints/anime.ts:98](https://github.com/gonzyui/tenrai.js/blob/7cd0cdeffc6a1b40f20a8ca1b79e42b6c58295fd/src/endpoints/anime.ts#L98)

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

Defined in: [endpoints/anime.ts:140](https://github.com/gonzyui/tenrai.js/blob/7cd0cdeffc6a1b40f20a8ca1b79e42b6c58295fd/src/endpoints/anime.ts#L140)

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

Defined in: [endpoints/anime.ts:171](https://github.com/gonzyui/tenrai.js/blob/7cd0cdeffc6a1b40f20a8ca1b79e42b6c58295fd/src/endpoints/anime.ts#L171)

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

Defined in: [endpoints/anime.ts:200](https://github.com/gonzyui/tenrai.js/blob/7cd0cdeffc6a1b40f20a8ca1b79e42b6c58295fd/src/endpoints/anime.ts#L200)

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

Defined in: [endpoints/anime.ts:185](https://github.com/gonzyui/tenrai.js/blob/7cd0cdeffc6a1b40f20a8ca1b79e42b6c58295fd/src/endpoints/anime.ts#L185)

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

Defined in: [endpoints/anime.ts:55](https://github.com/gonzyui/tenrai.js/blob/7cd0cdeffc6a1b40f20a8ca1b79e42b6c58295fd/src/endpoints/anime.ts#L55)

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

Defined in: [endpoints/anime.ts:151](https://github.com/gonzyui/tenrai.js/blob/7cd0cdeffc6a1b40f20a8ca1b79e42b6c58295fd/src/endpoints/anime.ts#L151)

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

Defined in: [endpoints/anime.ts:233](https://github.com/gonzyui/tenrai.js/blob/7cd0cdeffc6a1b40f20a8ca1b79e42b6c58295fd/src/endpoints/anime.ts#L233)

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

Defined in: [endpoints/anime.ts:211](https://github.com/gonzyui/tenrai.js/blob/7cd0cdeffc6a1b40f20a8ca1b79e42b6c58295fd/src/endpoints/anime.ts#L211)

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

Defined in: [endpoints/anime.ts:129](https://github.com/gonzyui/tenrai.js/blob/7cd0cdeffc6a1b40f20a8ca1b79e42b6c58295fd/src/endpoints/anime.ts#L129)

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

Defined in: [endpoints/anime.ts:244](https://github.com/gonzyui/tenrai.js/blob/7cd0cdeffc6a1b40f20a8ca1b79e42b6c58295fd/src/endpoints/anime.ts#L244)

Search for anime

#### Parameters

##### params?

[`AnimeQueryParams`](../interfaces/AnimeQueryParams.md)

Search parameters

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`Anime`](../interfaces/Anime.md)\>\>

Promise with anime search results
