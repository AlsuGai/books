export type BookId = number;

export type Person = {
  birth_year: number | null;
  death_year: number | null;
  name: string;
};

export type Format = Record<string, string>;

export type Book = {
  id: number;
  title: string;
  subjects: string[];
  authors: Person[];
  summaries: string[];
  translators: Person[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean | null;
  media_type: string;
  formats: Format;
  download_count: number;
};
