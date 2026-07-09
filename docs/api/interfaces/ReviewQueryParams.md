[**tenrai.js**](../index.md)

***

Defined in: [types/reviews.ts:41](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/reviews.ts#L41)

Query parameters for reviews search and filtering.

## Properties

### limit?

> `optional` **limit?**: `number`

Defined in: [types/reviews.ts:49](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/reviews.ts#L49)

Results per page (default: 50, max: 100).

***

### page?

> `optional` **page?**: `number`

Defined in: [types/reviews.ts:45](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/reviews.ts#L45)

Page number to retrieve (default: 1).

***

### preliminary?

> `optional` **preliminary?**: `boolean` \| `"only"`

Defined in: [types/reviews.ts:54](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/reviews.ts#L54)

Filter reviews by preliminary status.
Pass `true` to include them, `false` to exclude, or `'only'` to exclusively retrieve preliminary reviews.

***

### sentiment?

> `optional` **sentiment?**: `"recommended"` \| `"mixed_feelings"` \| `"not_recommended"`

Defined in: [types/reviews.ts:67](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/reviews.ts#L67)

Filter reviews by user sentiment.

***

### sort?

> `optional` **sort?**: `"newest"` \| `"oldest"` \| `"most_helpful"`

Defined in: [types/reviews.ts:63](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/reviews.ts#L63)

Sort reviews by date or helpfulness (default: most_helpful).

***

### spoilers?

> `optional` **spoilers?**: `boolean` \| `"only"`

Defined in: [types/reviews.ts:59](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/reviews.ts#L59)

Filter reviews by spoiler status.
Pass `true` to include them, `false` to exclude, or `'only'` to exclusively retrieve spoiler reviews.
