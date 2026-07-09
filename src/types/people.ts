import type { Image } from './common';

export interface Person {
  mal_id: number;
  url: string;
  images: Image;
  name: string;
  given_name: string | null;
  family_name: string | null;
  alternate_names: string[];
  birthday: string | null;
  favorites: number;
  about: string | null;
  anime: {
    position: string;
    anime: {
      mal_id: number;
      url: string;
      images: Image;
      title: string;
    };
  }[];
  manga: {
    position: string;
    manga: {
      mal_id: number;
      url: string;
      images: Image;
      title: string;
    };
  }[];
  voices: {
    role: string;
    anime: {
      mal_id: number;
      url: string;
      images: Image;
      title: string;
    };
    character: {
      mal_id: number;
      url: string;
      images: Image;
      name: string;
    };
  }[];
}

/**
 * Full person details including anime roles, manga roles, and voice acting roles.
 * Returned by the `/people/{id}/full` endpoint.
 */
export interface PersonFull extends Person {
  anime: PersonAnimeRole[];
  manga: PersonMangaRole[];
  voices: PersonVoiceRole[];
}

/**
 * An anime role of a person.
 */
export interface PersonAnimeRole {
  position: string;
  anime: {
    mal_id: number;
    url: string;
    images: Image;
    title: string;
  };
}

/**
 * A manga role of a person.
 */
export interface PersonMangaRole {
  position: string;
  manga: {
    mal_id: number;
    url: string;
    images: Image;
    title: string;
  };
}

/**
 * A voice acting role of a person.
 */
export interface PersonVoiceRole {
  role: string;
  anime: {
    mal_id: number;
    url: string;
    images: Image;
    title: string;
  };
  character: {
    mal_id: number;
    url: string;
    images: Image;
    name: string;
  };
}

/**
 * Response returned by the `/people/ids` endpoint.
 * Contains all unique MAL person IDs that currently exist and are active.
 * Requires a Server Key (`X-Server-Key` header) for authentication.
 */
export interface PersonIdsResponse {
  data: number[];
}

export interface PersonPicture {
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

export interface PersonQueryParams {
  page?: number;
  limit?: number;
  q?: string;
  order_by?: 'mal_id' | 'name' | 'birthday' | 'favorites';
  sort?: 'desc' | 'asc';
  letter?: string;
}
