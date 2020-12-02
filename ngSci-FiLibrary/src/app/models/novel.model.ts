export class Novel {
  id: number;
  title: string;
  author: string;
  coverImageUrl: string;
  numberOfChapters: number;
  yearPublished: number;
  description: string;
  subGenre: string;

  constructor(
    id?: number,
    title?: string,
    author?: string,
    yearPublished?: number,
    coverImageUrl?: string,
    numberOfChapters?: number,
    description?: string,
    subGenre?: string,
  ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.coverImageUrl = coverImageUrl;
    this.numberOfChapters = numberOfChapters;
    this.description = description;
    this.subGenre = subGenre;
  }
};
