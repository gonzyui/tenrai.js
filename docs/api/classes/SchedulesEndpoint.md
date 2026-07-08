[**tenrai.js**](../index.md)

***

Defined in: [endpoints/schedules.ts:8](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/schedules.ts#L8)

## Constructors

### Constructor

> **new SchedulesEndpoint**(`client`): `SchedulesEndpoint`

Defined in: [endpoints/schedules.ts:11](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/schedules.ts#L11)

#### Parameters

##### client

[`TenraiClient`](TenraiClient.md)

#### Returns

`SchedulesEndpoint`

## Methods

### getSchedules()

> **getSchedules**(`params?`): `Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`Anime`](../interfaces/Anime.md)\>\>

Defined in: [endpoints/schedules.ts:20](https://github.com/gonzyui/tenrai.js/blob/d185aa3abe1df5bdf8440b4c377466ac0f5a698f/src/endpoints/schedules.ts#L20)

Get anime schedules

#### Parameters

##### params?

[`ScheduleQueryParams`](../interfaces/ScheduleQueryParams.md)

Query parameters

#### Returns

`Promise`\<[`TenraiPaginatedResponse`](../interfaces/TenraiPaginatedResponse.md)\<[`Anime`](../interfaces/Anime.md)\>\>

Promise with anime schedules data
