import type { Image } from './common';

export interface Character {
  mal_id: number;
  url: string;
  images: Image;
  name: string;
  name_kanji: string | null;
  nicknames: string[];
  favorites: number;
  about: string | null;
  animeography: {
    role: string;
    anime: {
      mal_id: number;
      url: string;
      images: Image;
      title: string;
    };
  }[];
  mangaography: {
    role: string;
    manga: {
      mal_id: number;
      url: string;
      images: Image;
      title: string;
    };
  }[];
  voices: {
    language: string;
    person: {
      mal_id: number;
      url: string;
      images: Image;
      name: string;
    };
  }[];
}

/**
 * Full character details including anime/manga appearances and voice actors.
 * Returned by the `/characters/{id}/full` endpoint.
 */
export interface CharacterFull extends Character {
  animeography: CharacterAnimeAppearance[];
  mangaography: CharacterMangaAppearance[];
  voices: CharacterVoiceActor[];
}

/**
 * A character's appearance in an anime.
 */
export interface CharacterAnimeAppearance {
  role: string;
  anime: {
    mal_id: number;
    url: string;
    images: Image;
    title: string;
  };
}

/**
 * A character's appearance in a manga.
 */
export interface CharacterMangaAppearance {
  role: string;
  manga: {
    mal_id: number;
    url: string;
    images: Image;
    title: string;
  };
}

/**
 * A voice actor for a character.
 */
export interface CharacterVoiceActor {
  language: string;
  person: {
    mal_id: number;
    url: string;
    images: Image;
    name: string;
  };
}

/**
 * Response returned by the `/characters/ids` endpoint.
 * Contains all unique MAL character IDs that currently exist and are active.
 * Requires a Server Key (`X-Server-Key` header) for authentication.
 */
export interface CharacterIdsResponse {
  data: number[];
}

export interface CharacterPicture {
  jpg: {
    image_url: string;
    small_image_url?: string;
    large_image_url?: string;
  };
  webp?: {
    image_url: string;
    small_image_url?: string;
    large_image_url?: string;
  };
}

export interface CharacterQueryParams {
  page?: number;
  limit?: number;
  q?: string;
  order_by?: 'mal_id' | 'name' | 'favorites';
  sort?: 'desc' | 'asc';
  letter?: string;
}
