[**tenrai.js**](../index.md)

***

Defined in: types/news.ts:86

Represents detailed information for a specific news article.

## Extends

- [`News`](News.md)

## Properties

### author\_url

> **author\_url**: `string`

Defined in: types/news.ts:28

Author Profile URL.

#### Inherited from

[`News`](News.md).[`author_url`](News.md#author_url)

***

### author\_username

> **author\_username**: `string`

Defined in: types/news.ts:24

Author MyAnimeList Username.

#### Inherited from

[`News`](News.md).[`author_username`](News.md#author_username)

***

### comments

> **comments**: `number`

Defined in: types/news.ts:44

Number of comments on the news article.

#### Inherited from

[`News`](News.md).[`comments`](News.md#comments)

***

### content

> **content**: `string`

Defined in: types/news.ts:90

Full HTML or text content of the news article.

***

### date

> **date**: `string` \| `null`

Defined in: types/news.ts:20

Post date in ISO8601 format. Nullable.

#### Inherited from

[`News`](News.md).[`date`](News.md#date)

***

### excerpt

> **excerpt**: `string`

Defined in: types/news.ts:48

Excerpt or short snippet of the news article.

#### Inherited from

[`News`](News.md).[`excerpt`](News.md#excerpt)

***

### forum\_url

> **forum\_url**: `string` \| `null`

Defined in: types/news.ts:32

Forum topic URL. Nullable.

#### Inherited from

[`News`](News.md).[`forum_url`](News.md#forum_url)

***

### images

> **images**: `object`

Defined in: types/news.ts:36

Images associated with the news article.

#### jpg

> **jpg**: `object`

##### jpg.image\_url

> **image\_url**: `string` \| `null`

#### Inherited from

[`News`](News.md).[`images`](News.md#images)

***

### mal\_id

> **mal\_id**: `number`

Defined in: types/news.ts:8

MyAnimeList ID of the news article.

#### Inherited from

[`News`](News.md).[`mal_id`](News.md#mal_id)

***

### relations

> **relations**: `object`

Defined in: types/news.ts:94

Relations linked to the news article (related anime and manga).

#### anime

> **anime**: [`NewsRelationEntry`](NewsRelationEntry.md)[]

#### manga

> **manga**: [`NewsRelationEntry`](NewsRelationEntry.md)[]

***

### title

> **title**: `string`

Defined in: types/news.ts:16

Title of the news article.

#### Inherited from

[`News`](News.md).[`title`](News.md#title)

***

### url

> **url**: `string`

Defined in: types/news.ts:12

MyAnimeList URL of the news article.

#### Inherited from

[`News`](News.md).[`url`](News.md#url)
