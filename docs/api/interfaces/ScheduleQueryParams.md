[**tenrai.js**](../index.md)

***

Defined in: [types/schedules.ts:4](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/schedules.ts#L4)

Query parameters for anime schedules.

## Properties

### filter?

> `optional` **filter?**: `"monday"` \| `"tuesday"` \| `"wednesday"` \| `"thursday"` \| `"friday"` \| `"saturday"` \| `"sunday"` \| `"other"` \| `"unknown"`

Defined in: [types/schedules.ts:8](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/schedules.ts#L8)

Filter schedules by day of the week.

***

### kids?

> `optional` **kids?**: `boolean`

Defined in: [types/schedules.ts:29](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/schedules.ts#L29)

Flag — pass `true` to filter out kids entries.

***

### limit?

> `optional` **limit?**: `number`

Defined in: [types/schedules.ts:37](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/schedules.ts#L37)

Results per page (default: 25, max: 50).

***

### page?

> `optional` **page?**: `number`

Defined in: [types/schedules.ts:33](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/schedules.ts#L33)

Page number to retrieve (default: 1).

***

### sfw?

> `optional` **sfw?**: `boolean`

Defined in: [types/schedules.ts:21](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/schedules.ts#L21)

Flag — pass `true` to filter out NSFW entries.

***

### unapproved?

> `optional` **unapproved?**: `boolean`

Defined in: [types/schedules.ts:25](https://github.com/gonzyui/tenrai.js/blob/dev/src/types/schedules.ts#L25)

Flag — pass `true` to include unapproved entries in results.
