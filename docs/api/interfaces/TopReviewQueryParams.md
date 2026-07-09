[**tenrai.js**](../index.md)

***

Defined in: [types/top.ts:144](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/top.ts#L144)

Query parameters for top reviews retrieval.

## Extends

- [`TopQueryParams`](TopQueryParams.md)

## Properties

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

> `optional` **type?**: `"manga"` \| `"anime"`

Defined in: [types/top.ts:148](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/top.ts#L148)

Filter reviews by resource type.
