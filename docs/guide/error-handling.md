# Error Handling & Rate Limits

To build a robust application, it is essential to properly handle request errors and respect the API rate limits enforced by the Tenrai API.

---

## Error Handling

The client throws a custom `TenraiError` whenever the API returns an error response. This class contains detailed fields to help you handle errors gracefully.

### Example Code

```typescript
import { TenraiClient, TenraiError } from 'tenrai.js';

const tenrai = new TenraiClient();

async function getAnimeDetails() {
  try {
    const result = await tenrai.anime.getById(99999999); // Non-existent ID
  } catch (error) {
    if (error instanceof TenraiError) {
      // The error comes directly from the Tenrai API
      console.error(`API Error [${error.status}]: ${error.message}`);
      
      switch (error.status) {
        case 400:
          console.error("Bad Request. Check your parameters.");
          break;
        case 404:
          console.error("Resource not found.");
          break;
        case 429:
          console.error("Rate limit exceeded. Please slow down!");
          break;
        case 500:
          console.error("Tenrai server error. Try again later.");
          break;
      }
      
      if (error.data) {
        console.error("Additional details:", error.data);
      }
    } else if (error instanceof TypeError) {
      // Network connection error
      console.error("Network or connection issue:", error.message);
    } else {
      // Other unexpected errors
      console.error("Unexpected error:", error);
    }
  }
}
```

---

## Rate Limiting

The Tenrai API enforces rate limits to ensure service stability. Making too many requests in rapid succession will result in a `429 Too Many Requests` error.

Here are a few recommended strategies to handle or avoid rate limiting:

### 1. Adding Delays Between Requests

The simplest approach is to delay consecutive requests by a short duration (e.g., 400ms):

```typescript
const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchMultipleAnime(ids: number[]) {
  for (const id of ids) {
    try {
      const response = await tenrai.anime.getById(id);
      console.log(`Fetched: ${response.data.title}`);
    } catch (e) {
      console.error(`Failed to fetch anime ID ${id}`);
    }
    // Pause for 400ms to avoid overwhelming the API
    await wait(400);
  }
}
```

### 2. Batching Requests

If you need to fetch a large volume of resources, you can split the requests into small batches processed in parallel, with a delay between each batch:

```typescript
async function batchFetch(ids: number[], batchSize = 5) {
  const results = [];
  
  for (let i = 0; i < ids.length; i += batchSize) {
    const batch = ids.slice(i, i + batchSize);
    
    // Process current batch in parallel
    const batchResults = await Promise.all(
      batch.map(id => tenrai.anime.getById(id))
    );
    results.push(...batchResults);
    
    // Delay between consecutive batches
    if (i + batchSize < ids.length) {
      await new Promise(r => setTimeout(r, 1000));
    }
  }
  
  return results;
}
```
