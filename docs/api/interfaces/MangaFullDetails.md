[**tenrai.js**](../index.md)

***

Defined in: [types/manga.ts:69](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L69)

Full manga details including relations and external links.
Returned by the `/manga/{id}/full` endpoint.

## Extends

- [`Manga`](Manga.md)

## Properties

### approved

> **approved**: `boolean`

Defined in: [types/manga.ts:7](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L7)

#### Inherited from

[`Manga`](Manga.md).[`approved`](Manga.md#approved)

***

### authors

> **authors**: `object`[]

Defined in: [types/manga.ts:27](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L27)

#### mal\_id

> **mal\_id**: `number`

#### name

> **name**: `string`

#### type

> **type**: `string`

#### url

> **url**: `string`

#### Inherited from

[`Manga`](Manga.md).[`authors`](Manga.md#authors)

***

### background

> **background**: `string` \| `null`

Defined in: [types/manga.ts:26](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L26)

#### Inherited from

[`Manga`](Manga.md).[`background`](Manga.md#background)

***

### chapters

> **chapters**: `number` \| `null`

Defined in: [types/manga.ts:14](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L14)

#### Inherited from

[`Manga`](Manga.md).[`chapters`](Manga.md#chapters)

***

### demographics

> **demographics**: `object`[]

Defined in: [types/manga.ts:57](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L57)

#### mal\_id

> **mal\_id**: `number`

#### name

> **name**: `string`

#### type

> **type**: `string`

#### url

> **url**: `string`

#### Inherited from

[`Manga`](Manga.md).[`demographics`](Manga.md#demographics)

***

### explicit\_genres

> **explicit\_genres**: `object`[]

Defined in: [types/manga.ts:45](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L45)

#### mal\_id

> **mal\_id**: `number`

#### name

> **name**: `string`

#### type

> **type**: `string`

#### url

> **url**: `string`

#### Inherited from

[`Manga`](Manga.md).[`explicit_genres`](Manga.md#explicit_genres)

***

### external

> **external**: [`MangaExternal`](MangaExternal.md)[]

Defined in: [types/manga.ts:71](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L71)

***

### favorites

> **favorites**: `number` \| `null`

Defined in: [types/manga.ts:24](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L24)

#### Inherited from

[`Manga`](Manga.md).[`favorites`](Manga.md#favorites)

***

### genres

> **genres**: `object`[]

Defined in: [types/manga.ts:39](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L39)

#### mal\_id

> **mal\_id**: `number`

#### name

> **name**: `string`

#### type

> **type**: `string`

#### url

> **url**: `string`

#### Inherited from

[`Manga`](Manga.md).[`genres`](Manga.md#genres)

***

### images

> **images**: [`Image`](Image.md)

Defined in: [types/manga.ts:6](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L6)

#### Inherited from

[`Manga`](Manga.md).[`images`](Manga.md#images)

***

### mal\_id

> **mal\_id**: `number`

Defined in: [types/manga.ts:4](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L4)

#### Inherited from

[`Manga`](Manga.md).[`mal_id`](Manga.md#mal_id)

***

### members

> **members**: `number` \| `null`

Defined in: [types/manga.ts:23](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L23)

#### Inherited from

[`Manga`](Manga.md).[`members`](Manga.md#members)

***

### popularity

> **popularity**: `number` \| `null`

Defined in: [types/manga.ts:22](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L22)

#### Inherited from

[`Manga`](Manga.md).[`popularity`](Manga.md#popularity)

***

### published

> **published**: [`DateRange`](DateRange.md)

Defined in: [types/manga.ts:18](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L18)

#### Inherited from

[`Manga`](Manga.md).[`published`](Manga.md#published)

***

### publishing

> **publishing**: `boolean`

Defined in: [types/manga.ts:17](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L17)

#### Inherited from

[`Manga`](Manga.md).[`publishing`](Manga.md#publishing)

***

### rank

> **rank**: `number` \| `null`

Defined in: [types/manga.ts:21](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L21)

#### Inherited from

[`Manga`](Manga.md).[`rank`](Manga.md#rank)

***

### relations

> **relations**: [`MangaRelation`](MangaRelation.md)[]

Defined in: [types/manga.ts:70](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L70)

***

### score

> **score**: `number` \| `null`

Defined in: [types/manga.ts:19](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L19)

#### Inherited from

[`Manga`](Manga.md).[`score`](Manga.md#score)

***

### scored\_by

> **scored\_by**: `number` \| `null`

Defined in: [types/manga.ts:20](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L20)

#### Inherited from

[`Manga`](Manga.md).[`scored_by`](Manga.md#scored_by)

***

### serializations

> **serializations**: `object`[]

Defined in: [types/manga.ts:33](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L33)

#### mal\_id

> **mal\_id**: `number`

#### name

> **name**: `string`

#### type

> **type**: `string`

#### url

> **url**: `string`

#### Inherited from

[`Manga`](Manga.md).[`serializations`](Manga.md#serializations)

***

### status

> **status**: `string` \| `null`

Defined in: [types/manga.ts:16](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L16)

#### Inherited from

[`Manga`](Manga.md).[`status`](Manga.md#status)

***

### synopsis

> **synopsis**: `string` \| `null`

Defined in: [types/manga.ts:25](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L25)

#### Inherited from

[`Manga`](Manga.md).[`synopsis`](Manga.md#synopsis)

***

### themes

> **themes**: `object`[]

Defined in: [types/manga.ts:51](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L51)

#### mal\_id

> **mal\_id**: `number`

#### name

> **name**: `string`

#### type

> **type**: `string`

#### url

> **url**: `string`

#### Inherited from

[`Manga`](Manga.md).[`themes`](Manga.md#themes)

***

### title

> **title**: `string`

Defined in: [types/manga.ts:9](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L9)

#### Inherited from

[`Manga`](Manga.md).[`title`](Manga.md#title)

***

### title\_english

> **title\_english**: `string` \| `null`

Defined in: [types/manga.ts:10](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L10)

#### Inherited from

[`Manga`](Manga.md).[`title_english`](Manga.md#title_english)

***

### title\_japanese

> **title\_japanese**: `string` \| `null`

Defined in: [types/manga.ts:11](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L11)

#### Inherited from

[`Manga`](Manga.md).[`title_japanese`](Manga.md#title_japanese)

***

### title\_synonyms

> **title\_synonyms**: `string`[]

Defined in: [types/manga.ts:12](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L12)

#### Inherited from

[`Manga`](Manga.md).[`title_synonyms`](Manga.md#title_synonyms)

***

### titles

> **titles**: [`Title`](Title.md)[]

Defined in: [types/manga.ts:8](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L8)

#### Inherited from

[`Manga`](Manga.md).[`titles`](Manga.md#titles)

***

### type

> **type**: `string` \| `null`

Defined in: [types/manga.ts:13](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L13)

#### Inherited from

[`Manga`](Manga.md).[`type`](Manga.md#type)

***

### url

> **url**: `string`

Defined in: [types/manga.ts:5](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L5)

#### Inherited from

[`Manga`](Manga.md).[`url`](Manga.md#url)

***

### volumes

> **volumes**: `number` \| `null`

Defined in: [types/manga.ts:15](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L15)

#### Inherited from

[`Manga`](Manga.md).[`volumes`](Manga.md#volumes)
