# API Examples

This guide provides real-world code snippets demonstrating how to interact with the various endpoints of the Tenrai API using `TenraiClient`.

First, initialize the client in your code:

```typescript
import { TenraiClient } from 'tenrai.js';

const tenrai = new TenraiClient();
```

---

## Anime

### Get anime by ID

Get detailed information about a single anime:

```typescript
const response = await tenrai.anime.getById(5114); // Fullmetal Alchemist: Brotherhood
console.log(response.data.title);     // "Fullmetal Alchemist: Brotherhood"
console.log(response.data.score);     // 9.1
console.log(response.data.episodes);  // 64
console.log(response.data.aired.from); // "2009-04-05"
```

### Search anime

Search for anime with advanced query parameters and options:

```typescript
const results = await tenrai.anime.search({
  q: 'one piece',
  type: 'tv',
  status: 'airing',
  rating: 'pg13',
  score: 7,
  limit: 25,
  page: 1
});

results.data.forEach(anime => {
  console.log(`${anime.title} - ${anime.score}`);
});

// Navigate using pagination info
if (results.pagination.has_next_page) {
  const nextPage = await tenrai.anime.search({
    q: 'one piece',
    page: 2
  });
}
```

### Get characters & voice actors

Fetch the characters list of an anime and their voice actors:

```typescript
const characters = await tenrai.anime.getCharacters(5114);
characters.data.forEach(char => {
  console.log(`${char.character.name} (${char.role})`);
  if (char.voice_actors.length > 0) {
    console.log(`  VA: ${char.voice_actors[0].person.name}`);
  }
});
```

### Get episodes

Get the list of episodes of a specific anime:

```typescript
const episodes = await tenrai.anime.getEpisodes(5114, 1); // Page 1
episodes.data.forEach(ep => {
  console.log(`Episode ${ep.mal_id}: ${ep.title}`);
  console.log(`  Air date: ${ep.aired}`);
});
```

### Get statistics

Retrieve statistical database numbers (watching, completed, score breakdowns) for an anime:

```typescript
const stats = await tenrai.anime.getStatistics(5114);
stats.data.forEach(stat => {
  console.log(`${stat.title}: ${stat.count} users`);
});
```

---

## Manga

### Get manga by ID

Get details for a single manga:

```typescript
const manga = await tenrai.manga.getById(1); // Berserk
console.log(manga.data.title);    // "Berserk"
console.log(manga.data.type);     // "Manga"
console.log(manga.data.chapters); // 364 (or null if ongoing)
```

### Search manga

Search for manga with options:

```typescript
const results = await tenrai.manga.search({
  q: 'berserk',
  type: 'manga',
  status: 'publishing',
  score: 8,
  limit: 10
});

results.data.forEach(manga => {
  console.log(`${manga.title} (${manga.chapters} chapters)`);
});
```

### Get manga characters

Fetch characters appearing in a manga:

```typescript
const characters = await tenrai.manga.getCharacters(1);
characters.data.forEach(char => {
  console.log(`${char.character.name} (${char.role})`);
});
```

---

## Characters

### Get character by ID

Retrieve detailed biography and data for a character:

```typescript
const character = await tenrai.characters.getById(1); // Monkey D. Luffy
console.log(character.data.name);   // "Monkey D. Luffy"
console.log(character.data.about);  // Character biography
console.log(character.data.mal_id); // MyAnimeList ID
```

### Search characters

```typescript
const results = await tenrai.characters.search({
  q: 'luffy',
  limit: 10,
  page: 1
});

results.data.forEach(char => {
  console.log(`${char.name} from ${char.anime[0]?.title}`);
});
```

### Get character pictures

```typescript
const pictures = await tenrai.characters.getPictures(1);
pictures.data.forEach(pic => {
  console.log(pic.jpg.image_url);
});
```

---

## Seasons

### Get current season

Get all anime airing in the current season:

```typescript
const currentSeason = await tenrai.seasons.getCurrent();
currentSeason.data.forEach(anime => {
  console.log(`${anime.title} (${anime.season})`);
});
```

### Get specific season

Fetch the list of anime that aired in a particular year and season:

```typescript
const winter2024 = await tenrai.seasons.getSeason(2024, 'winter');
winter2024.data.forEach(anime => {
  console.log(`${anime.title} - Episodes: ${anime.episodes}`);
});
```

### Get upcoming season

Fetch highly anticipated upcoming anime:

```typescript
const upcoming = await tenrai.seasons.getUpcoming();
upcoming.data.slice(0, 5).forEach(anime => {
  console.log(`${anime.title} (${anime.aired.from || 'TBD'})`);
});
```

---

## Top Charts

### Get top anime & manga

Browse top rankings with filtering:

```typescript
// Top anime currently airing
const topAnime = await tenrai.top.getAnime({
  filter: 'airing',
  limit: 25,
  page: 1
});

topAnime.data.forEach((anime, index) => {
  console.log(`${index + 1}. ${anime.title} - ${anime.score}`);
});

// Top publishing manga
const topManga = await tenrai.top.getManga({
  filter: 'publishing',
  limit: 10
});
```

---

## Random

Get randomized anime, manga, characters, etc.:

```typescript
const randomAnime = await tenrai.random.getAnime();
console.log(`Random anime: ${randomAnime.data.title}`);

const randomManga = await tenrai.random.getManga();
console.log(`Random manga: ${randomManga.data.title}`);

const randomChar = await tenrai.random.getCharacter();
console.log(`Random character: ${randomChar.data.name}`);
```

---

## Additional Endpoints

### Genres

```typescript
const animeGenres = await tenrai.genres.getAnimeGenres();
animeGenres.data.forEach(genre => {
  console.log(`${genre.name} - ${genre.count} anime`);
});
```

### Producers

```typescript
const producer = await tenrai.producers.getById(1);
console.log(producer.data.titles[0].title);

const producerSearch = await tenrai.producers.search({ query: 'sunrise' });
```

### Magazines

```typescript
const magazines = await tenrai.magazines.search({ query: 'jump' });
```

### Reviews

```typescript
const animeReviews = await tenrai.reviews.getAnimeReviews();
animeReviews.data.forEach(review => {
  console.log(`${review.anime.title} - ${review.score}/10`);
  console.log(review.review.substring(0, 100) + '...');
});
```

### Recommendations

```typescript
const recommendations = await tenrai.recommendations.getRecommendations();
recommendations.data.forEach(rec => {
  console.log(`If you like ${rec.entry_1.title}, try ${rec.entry_2.title}`);
});
```
