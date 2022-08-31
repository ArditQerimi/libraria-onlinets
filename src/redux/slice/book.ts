import { createSlice } from "@reduxjs/toolkit";

type Book = {
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

type InitialState = {
  id: number;
  _id: any;
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

const initialState: InitialState = {
  id: 0,
  _id: "",
  image: "",
  title: "",
  posted_by: "Ardit Qerimi",
  reviews: 42,
  rating: 4.8,
  ratings: 493,
  date: "13/08/2022",
  category: "",
  publisher: "",
  author: "",
  description: "",
  price: 0,
  lang: "",
};

const book = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBookSlice: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
export const { setBookSlice } = book.actions;
export default book.reducer;
