[**tenrai.js**](../index.md)

***

Defined in: [types/top.ts:123](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/top.ts#L123)

Query parameters for top manga retrieval.

## Extends

- [`TopQueryParams`](TopQueryParams.md)

## Properties

### filter?

> `optional` **filter?**: `"upcoming"` \| `"publishing"` \| `"bypopularity"` \| `"favorite"`

Defined in: [types/top.ts:138](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/top.ts#L138)

Filter top manga by publishing/ranking status.

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

### type?

> `optional` **type?**: `"manga"` \| `"novel"` \| `"lightnovel"` \| `"oneshot"` \| `"doujin"` \| `"manhwa"` \| `"manhua"`

Defined in: [types/top.ts:127](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/top.ts#L127)

Filter top manga by entry type.
