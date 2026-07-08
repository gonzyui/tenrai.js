# Client Configuration

The `TenraiClient` is highly configurable to adapt to your application's production needs. You can pass a configuration options object when instantiating it.

---

## Configuration Example

```typescript
import { TenraiClient } from 'tenrai.js';

const tenrai = new TenraiClient({
  // Base URL of the Tenrai API
  baseUrl: 'https://api.tenrai.org/v1',
  
  // Timeout for HTTP requests in milliseconds (defaults to 30 seconds)
  timeout: 30000,
  
  // Custom HTTP headers
  headers: {
    'Accept': 'application/json',
    'User-Agent': 'my-anime-app/1.0'
  },
  
  // Request retry configuration on network or server errors
  retryAttempts: 3,
  retryDelay: 1000, // wait 1s between attempts
  
  // Built-in memory caching
  cacheEnabled: true,
  cacheTTL: 3600000 // Cache time-to-live: 1 hour (in ms)
});
```

---

## Available Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `baseUrl` | `string` | `'https://api.tenrai.org/v1'` | The base URL of the Tenrai API. |
| `timeout` | `number` | `30000` | Time limit before HTTP requests are aborted. |
| `headers` | `Record<string, string>` | `{}` | Additional headers sent with every request. |
| `retryAttempts` | `number` | `3` | Number of automatic retries on network or 5xx server errors. |
| `retryDelay` | `number` | `1000` | Delay (in ms) between automatic retries. |
| `cacheEnabled` | `boolean` | `true` | Enables or disables in-memory request caching. |
| `cacheTTL` | `number` | `3600000` | Time-to-live (in ms) for cached responses. |

---

## Accessing Modules

Once configured, you can access the various API endpoints through modular properties exposed on the client instance:

```typescript
// Fetch from Anime module
await tenrai.anime.getById(1);

// Fetch from Manga module
await tenrai.manga.getById(1);

// Fetch from Characters module
await tenrai.characters.getById(1);
```
