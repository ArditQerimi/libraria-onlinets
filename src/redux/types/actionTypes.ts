import { bookTypes } from "./bookTypes";

type book = {
  id: number;
  title: string;
  image: string;
  posted_by: string;
  reviews: number;
  rating: number;
  ratings: number;
  date: string;
  category: string;
  publisher: string;
  author: string;
  description: string;
  price: number;
  lang: string;
};

type bookId = {
  id: string;
};

export interface FetchBooksRequest {
  type: typeof bookTypes.GET_BOOKS;
}

export interface PostBookRequest {
  type: typeof bookTypes.POST_BOOKS;
  books: book[];
}

export interface DeleteBookRequest {
  type: typeof bookTypes.DELETE_BOOK;
  _id: bookId;
}

export interface EditBookRequest {
  type: typeof bookTypes.EDIT_BOOK;
  _id: bookId;
  newobj: book[];
}
