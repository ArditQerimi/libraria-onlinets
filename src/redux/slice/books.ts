import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";

export interface Book {
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
}

export interface InitialState {
  books: Book[];
  isLoading: boolean;
  error: boolean;
}

const initialState: InitialState = {
  books: [],
  isLoading: false,
  error: false,
};

const books = createSlice({
  name: "books",
  initialState,

  reducers: {
    getBooksFetch: (state) => {
      state.isLoading = true;
      state.error = false;
      return state;
    },
    getBooksSlice: (state, action: PayloadAction<any>) => {
      state.books = action.payload;
      state.isLoading = false;
      state.error = false;
      return state;
    },
    getBooksError: (state) => {
      state.isLoading = false;
      state.error = true;
      return state;
    },

    postBooksSlice: (state, action: PayloadAction<any>) => {
      state.books.push(action.payload.book);
      return state;
    },
    deleteBookSlice: (state, action: PayloadAction<any>) => {
      state.books = state.books.filter(
        (state: any) => state._id !== action.payload
      );
      return state;
    },
    editBookSlice: (state, action: PayloadAction<any>) => {
      state.books = state.books.map((i: any) =>
        i._id == action.payload._id ? action.payload : i
      );
      return state;
    },
  },
});
export const {
  getBooksSlice,
  postBooksSlice,
  deleteBookSlice,
  editBookSlice,
  getBooksFetch,
  getBooksError,
} = books.actions;
export default books.reducer;
