[**tenrai.js**](../index.md)

***

Defined in: [types/manga.ts:190](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L190)

Query parameters for manga search and filtering.

## Properties

### end\_date?

> `optional` **end\_date?**: `string`

Defined in: [types/manga.ts:277](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L277)

Filter by publishing end date (YYYY-MM-DD format).

***

### genres?

> `optional` **genres?**: `string`

Defined in: [types/manga.ts:237](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L237)

Comma-separated list of genre IDs (max 25 IDs).

***

### genres\_exclude?

> `optional` **genres\_exclude?**: `string`

Defined in: [types/manga.ts:241](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L241)

Comma-separated list of genre IDs to exclude (max 25 IDs).

***

### letter?

> `optional` **letter?**: `string`

Defined in: [types/manga.ts:265](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L265)

Filter by the first letter of the title.

***

### limit?

> `optional` **limit?**: `number`

Defined in: [types/manga.ts:198](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L198)

Results per page (default: 25, max: 50).

***

### magazines?

> `optional` **magazines?**: `string`

Defined in: [types/manga.ts:269](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L269)

Comma-separated list of magazine IDs (max 25 IDs).

***

### max\_score?

> `optional` **max\_score?**: `number`

Defined in: [types/manga.ts:225](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L225)

Filter by maximum score.

***

### min\_score?

> `optional` **min\_score?**: `number`

Defined in: [types/manga.ts:221](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L221)

Filter by minimum score.

***

### order\_by?

> `optional` **order\_by?**: `"mal_id"` \| `"title"` \| `"start_date"` \| `"end_date"` \| `"score"` \| `"scored_by"` \| `"rank"` \| `"popularity"` \| `"members"` \| `"chapters"` \| `"volumes"` \| `"favorites"`

Defined in: [types/manga.ts:245](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L245)

Field to order results by.

***

### page?

> `optional` **page?**: `number`

Defined in: [types/manga.ts:194](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L194)

Page number to retrieve (default: 1, max: 1000).

***

### q?

> `optional` **q?**: `string`

Defined in: [types/manga.ts:202](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L202)

Title search query (fuzzy matched; min 3 chars, max 200 chars).

***

### score?

> `optional` **score?**: `number`

Defined in: [types/manga.ts:217](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L217)

Filter by exact score.

***

### sfw?

> `optional` **sfw?**: `boolean`

Defined in: [types/manga.ts:233](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L233)

Flag — pass `true` to filter out NSFW entries.

***

### sort?

> `optional` **sort?**: `"desc"` \| `"asc"`

Defined in: [types/manga.ts:261](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L261)

Sorting order (default: asc).

***

### start\_date?

> `optional` **start\_date?**: `string`

Defined in: [types/manga.ts:273](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L273)

Filter by publishing start date (YYYY-MM-DD format).

***

### status?

> `optional` **status?**: `"complete"` \| `"upcoming"` \| `"publishing"` \| `"hiatus"` \| `"discontinued"`

Defined in: [types/manga.ts:229](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L229)

Filter by publishing status.

***

### type?

> `optional` **type?**: `"manga"` \| `"novel"` \| `"lightnovel"` \| `"oneshot"` \| `"doujin"` \| `"manhwa"` \| `"manhua"`

Defined in: [types/manga.ts:206](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/manga.ts#L206)

Filter by entry type.
