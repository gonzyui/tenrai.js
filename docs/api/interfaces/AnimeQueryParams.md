[**tenrai.js**](../index.md)

***

Defined in: [types/anime.ts:299](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/anime.ts#L299)

Query parameters for anime search and filtering.

## Properties

### end\_date?

> `optional` **end\_date?**: `string`

Defined in: [types/anime.ts:394](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/anime.ts#L394)

Filter by end date (YYYY-MM-DD format).

***

### genres?

> `optional` **genres?**: `string`

Defined in: [types/anime.ts:356](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/anime.ts#L356)

Comma-separated list of genre IDs (max 25 IDs).

***

### genres\_exclude?

> `optional` **genres\_exclude?**: `string`

Defined in: [types/anime.ts:360](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/anime.ts#L360)

Comma-separated list of genre IDs to exclude (max 25 IDs).

***

### letter?

> `optional` **letter?**: `string`

Defined in: [types/anime.ts:382](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/anime.ts#L382)

Filter by the first letter of the title.

***

### limit?

> `optional` **limit?**: `number`

Defined in: [types/anime.ts:307](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/anime.ts#L307)

Results per page (default: 25, max: 50).

***

### max\_score?

> `optional` **max\_score?**: `number`

Defined in: [types/anime.ts:336](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/anime.ts#L336)

Filter by maximum score.

***

### min\_score?

> `optional` **min\_score?**: `number`

Defined in: [types/anime.ts:332](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/anime.ts#L332)

Filter by minimum score.

***

### order\_by?

> `optional` **order\_by?**: `"mal_id"` \| `"title"` \| `"start_date"` \| `"end_date"` \| `"episodes"` \| `"score"` \| `"scored_by"` \| `"rank"` \| `"popularity"` \| `"members"`

Defined in: [types/anime.ts:364](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/anime.ts#L364)

Field to order results by.

***

### page?

> `optional` **page?**: `number`

Defined in: [types/anime.ts:303](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/anime.ts#L303)

Page number to retrieve (default: 1, max: 1000).

***

### producers?

> `optional` **producers?**: `string`

Defined in: [types/anime.ts:386](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/anime.ts#L386)

Comma-separated list of producer IDs (max 25 IDs).

***

### q?

> `optional` **q?**: `string`

Defined in: [types/anime.ts:311](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/anime.ts#L311)

Title search query (fuzzy matched; min 3 chars, max 200 chars).

***

### rating?

> `optional` **rating?**: `"g"` \| `"pg"` \| `"pg13"` \| `"r17"` \| `"r"` \| `"rplus"` \| `"rx"`

Defined in: [types/anime.ts:344](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/anime.ts#L344)

Filter by age rating.

***

### score?

> `optional` **score?**: `number`

Defined in: [types/anime.ts:328](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/anime.ts#L328)

Filter by exact score.

***

### sfw?

> `optional` **sfw?**: `boolean`

Defined in: [types/anime.ts:348](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/anime.ts#L348)

Flag — pass `true` to filter out NSFW entries.

***

### sort?

> `optional` **sort?**: `"desc"` \| `"asc"`

Defined in: [types/anime.ts:378](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/anime.ts#L378)

Sorting order (default: asc).

***

### start\_date?

> `optional` **start\_date?**: `string`

Defined in: [types/anime.ts:390](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/anime.ts#L390)

Filter by start date (YYYY-MM-DD format).

***

### status?

> `optional` **status?**: `"airing"` \| `"complete"` \| `"upcoming"`

Defined in: [types/anime.ts:340](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/anime.ts#L340)

Filter by airing status.

***

### type?

> `optional` **type?**: `"tv"` \| `"movie"` \| `"ova"` \| `"special"` \| `"ona"` \| `"music"` \| `"cm"` \| `"pv"` \| `"tv_special"`

Defined in: [types/anime.ts:315](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/anime.ts#L315)

Filter by entry type.

***

### unapproved?

> `optional` **unapproved?**: `boolean`

Defined in: [types/anime.ts:352](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/anime.ts#L352)

Include unapproved entries in results.
