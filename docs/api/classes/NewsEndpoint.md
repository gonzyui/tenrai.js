[**tenrai.js**](../index.md)

***

Defined in: endpoints/news.ts:15

Endpoint wrapper for recent news.
Provides access to the `/news` resources.

## Constructors

### Constructor

> **new NewsEndpoint**(`client`): `NewsEndpoint`

Defined in: endpoints/news.ts:18

#### Parameters

##### client

[`TenraiClient`](TenraiClient.md)

#### Returns

`NewsEndpoint`

## Methods

### getNews()

> **getNews**(`params?`): `Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`News`](../interfaces/News.md)\>\>

Defined in: endpoints/news.ts:36

Retrieve a list of recent news articles.
Allows searching for articles and filtering by specific tags.

#### Parameters

##### params?

[`NewsQueryParams`](../interfaces/NewsQueryParams.md)

Optional query parameters to filter and paginate news articles

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`News`](../interfaces/News.md)\>\>

Promise with a paginated list of news articles

#### See

[Tenrai API](https://api.tenrai.org/documentation#tag/news) — `GET /v1/news`

#### Example

```ts
const news = await client.news.getNews({ q: 'Fruits Basket', limit: 5 });
news.data.forEach(article => console.log(`${article.title} (ID: ${article.mal_id})`));
```

***

### getNewsById()

> **getNewsById**(`id`): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`NewsDetails`](../interfaces/NewsDetails.md)\>\>

Defined in: endpoints/news.ts:74

Retrieve full details of a specific news article by ID.
Includes the full article content and relations to other anime/manga entries.

#### Parameters

##### id

`number`

The unique MyAnimeList News ID

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`NewsDetails`](../interfaces/NewsDetails.md)\>\>

Promise with the news article details

#### See

[Tenrai API](https://api.tenrai.org/documentation#tag/news) — `GET /v1/news/{id}`

#### Example

```ts
const article = await client.news.getNewsById(56264086);
console.log(article.data.title);
console.log(article.data.content);
```

***

### getNewsTags()

> **getNewsTags**(): `Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`NewsTag`](../interfaces/NewsTag.md)[]\>\>

Defined in: endpoints/news.ts:55

Retrieve a list of all news tags and category counts.
Useful for showing filtering tags in a UI.

#### Returns

`Promise`\<[`TenraiResponse`](../interfaces/TenraiResponse.md)\<[`NewsTag`](../interfaces/NewsTag.md)[]\>\>

Promise with a list of all news tags

#### See

[Tenrai API](https://api.tenrai.org/documentation#tag/news) — `GET /v1/news/tags`

#### Example

```ts
const tags = await client.news.getNewsTags();
tags.data.forEach(tag => console.log(`${tag.name}: ${tag.count} articles`));
```
