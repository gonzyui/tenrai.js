[**tenrai.js**](../index.md)

***

Defined in: [types/magazines.ts:26](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/magazines.ts#L26)

Query parameters for magazines pagination and sorting.

## Properties

### letter?

> `optional` **letter?**: `string`

Defined in: [types/magazines.ts:50](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/magazines.ts#L50)

Filter magazines by the first letter of their name.

***

### limit?

> `optional` **limit?**: `number`

Defined in: [types/magazines.ts:34](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/magazines.ts#L34)

Results per page (default: 25, max: 50).

***

### order\_by?

> `optional` **order\_by?**: `"mal_id"` \| `"name"` \| `"count"`

Defined in: [types/magazines.ts:42](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/magazines.ts#L42)

Field to order results by (default: mal_id).

***

### page?

> `optional` **page?**: `number`

Defined in: [types/magazines.ts:30](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/magazines.ts#L30)

Page number to retrieve (default: 1).

***

### q?

> `optional` **q?**: `string`

Defined in: [types/magazines.ts:38](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/magazines.ts#L38)

Filter magazines by name.

***

### sort?

> `optional` **sort?**: `"desc"` \| `"asc"`

Defined in: [types/magazines.ts:46](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/magazines.ts#L46)

Sorting order (default: asc).
