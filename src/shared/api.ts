import { z } from "zod";

const baseUrl = "https://gutendex.com/books";

const PersonDtoChema = z.object({
  birth_year: z.number().nullable(),
  death_year: z.number().nullable(),
  name: z.string(),
});

const ImagesDtoChema = z.record(z.string(), z.string());

const BookDtoShema = z.object({
  id: z.number(),
  title: z.string(),
  subjects: z.array(z.string()),
  authors: z.array(PersonDtoChema),
  summaries: z.array(z.string()),
  translators: z.array(PersonDtoChema),
  bookshelves: z.array(z.string()),
  languages: z.array(z.string()),
  copyright: z.boolean().nullable(),
  media_type: z.string(),
  formats: ImagesDtoChema,
  download_count: z.number(),
});

export const api = {
  getBooks: () => {
    return fetch(`${baseUrl}/?page=1`)
      .then((response) => response.json())
      .then((res) => {
        return BookDtoShema.array().parse(res);
      });
  },
  getBook: (bookId: number) => {
    return fetch(`${baseUrl}/?ids=${bookId}`)
      .then((response) => response.json())
      .then((res) => {
        return BookDtoShema.parse(res);
      });
  },
};
