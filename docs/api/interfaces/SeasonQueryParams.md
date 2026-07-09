[**tenrai.js**](../index.md)

***

Defined in: [types/seasons.ts:15](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/seasons.ts#L15)

Query parameters for seasonal anime retrieval.

## Properties

### continuing?

> `optional` **continuing?**: `boolean`

Defined in: [types/seasons.ts:31](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/seasons.ts#L31)

Flag — pass `true` to include TV series continuing from a previous season.

***

### filter?

> `optional` **filter?**: `"tv"` \| `"movie"` \| `"ova"` \| `"special"` \| `"ona"` \| `"music"`

Defined in: [types/seasons.ts:19](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/seasons.ts#L19)

Filter seasonal anime by entry type.

***

### kids?

> `optional` **kids?**: `boolean`

Defined in: [types/seasons.ts:35](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/seasons.ts#L35)

Flag — pass `true` to filter out kids entries.

***

### limit?

> `optional` **limit?**: `number`

Defined in: [types/seasons.ts:51](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/seasons.ts#L51)

Results per page (default: 25, max: 50).

***

### order\_by?

> `optional` **order\_by?**: `"start_date"` \| `"score"` \| `"members"`

Defined in: [types/seasons.ts:39](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/seasons.ts#L39)

Field to order results by (default: score).

***

### page?

> `optional` **page?**: `number`

Defined in: [types/seasons.ts:47](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/seasons.ts#L47)

Page number to retrieve (default: 1).

***

### sfw?

> `optional` **sfw?**: `boolean`

Defined in: [types/seasons.ts:23](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/seasons.ts#L23)

Flag — pass `true` to filter out NSFW entries.

***

### sort?

> `optional` **sort?**: `"desc"` \| `"asc"`

Defined in: [types/seasons.ts:43](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/seasons.ts#L43)

Sorting order (default: desc).

***

### unapproved?

> `optional` **unapproved?**: `boolean`

Defined in: [types/seasons.ts:27](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/seasons.ts#L27)

Flag — pass `true` to include unapproved entries in results.
