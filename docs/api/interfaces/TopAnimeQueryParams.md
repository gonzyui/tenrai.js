[**tenrai.js**](../index.md)

***

Defined in: [types/top.ts:92](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/top.ts#L92)

Query parameters for top anime retrieval.

## Extends

- [`TopQueryParams`](TopQueryParams.md)

## Properties

### filter?

> `optional` **filter?**: `"airing"` \| `"upcoming"` \| `"bypopularity"` \| `"favorite"`

Defined in: [types/top.ts:109](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/top.ts#L109)

Filter top anime by category/ranking type.

***

### limit?

> `optional` **limit?**: `number`

Defined in: [types/top.ts:86](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/top.ts#L86)

Results per page (default: 25, max: 50).

#### Inherited from

[`TopQueryParams`](TopQueryParams.md).[`limit`](TopQueryParams.md#limit)

***

### page?

> `optional` **page?**: `number`

Defined in: [types/top.ts:82](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/top.ts#L82)

Page number to retrieve (default: 1).

#### Inherited from

[`TopQueryParams`](TopQueryParams.md).[`page`](TopQueryParams.md#page)

***

### rating?

> `optional` **rating?**: `"g"` \| `"pg"` \| `"pg13"` \| `"r17"` \| `"r"` \| `"rx"`

Defined in: [types/top.ts:113](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/top.ts#L113)

Filter by age rating.

***

### sfw?

> `optional` **sfw?**: `boolean`

Defined in: [types/top.ts:117](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/top.ts#L117)

Flag — pass `true` to filter out NSFW entries.

***

### type?

> `optional` **type?**: `"tv"` \| `"movie"` \| `"ova"` \| `"special"` \| `"ona"` \| `"music"` \| `"cm"` \| `"pv"` \| `"tv_special"`

Defined in: [types/top.ts:96](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/top.ts#L96)

Filter top anime by entry type.
