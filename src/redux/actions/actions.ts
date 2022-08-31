import { bookTypes } from "../types/bookTypes";

import {
  FetchBooksRequest,
  PostBookRequest,
  DeleteBookRequest,
  EditBookRequest,
} from "../types/actionTypes";

export const fetchBooksRequest = (): FetchBooksRequest => ({
  type: bookTypes.GET_BOOKS,
});

export const postBooksRequest = (book: any): PostBookRequest => ({
  type: bookTypes.POST_BOOKS,
  books: book,
});

export const editBookRequest = (book: any, _id: any): EditBookRequest => ({
  type: bookTypes.EDIT_BOOK,
  newobj: book,
  _id: _id,
});

export const deleteBookRequest = (_id: any): DeleteBookRequest => ({
  type: bookTypes.DELETE_BOOK,
  _id: _id,
});
