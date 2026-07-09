[**tenrai.js**](../index.md)

***

Defined in: [types/producers.ts:41](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/producers.ts#L41)

Query parameters for producers search and filtering.

## Properties

### letter?

> `optional` **letter?**: `string`

Defined in: [types/producers.ts:65](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/producers.ts#L65)

Filter producers by the first letter of their name.

***

### limit?

> `optional` **limit?**: `number`

Defined in: [types/producers.ts:49](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/producers.ts#L49)

Results per page (default: 25, max: 50).

***

### order\_by?

> `optional` **order\_by?**: `"mal_id"` \| `"favorites"` \| `"name"` \| `"count"` \| `"established"`

Defined in: [types/producers.ts:57](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/producers.ts#L57)

Field to order results by (default: mal_id).

***

### page?

> `optional` **page?**: `number`

Defined in: [types/producers.ts:45](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/producers.ts#L45)

Page number to retrieve (default: 1).

***

### q?

> `optional` **q?**: `string`

Defined in: [types/producers.ts:53](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/producers.ts#L53)

Search query to filter producers by name.

***

### sort?

> `optional` **sort?**: `"desc"` \| `"asc"`

Defined in: [types/producers.ts:61](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/producers.ts#L61)

Sorting order (default: asc).
