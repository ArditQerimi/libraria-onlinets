import {
  getBooksAPI,
  postBooksAPI,
  deleteBookAPI,
  editBookAPI,
} from "../../apis/apis";
import {
  getBooksSlice,
  getBooksFetch,
  getBooksError,
  postBooksSlice,
  deleteBookSlice,
  editBookSlice,
} from "../slice/books";
// import { GET_BOOKS, POST_BOOKS, DELETE_BOOK, EDIT_BOOK } from "../types/types";
import { bookTypes } from "../types/bookTypes";
import { put, takeEvery, call } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export function* getBooksSaga(): any {
  try {
    yield put(getBooksFetch());
    // const data = yield call(() => axios.get("https://libraria-online.herokuapp.com/"));
    const data = yield getBooksAPI();
    yield put(getBooksSlice(data.data.books));
  } catch (error) {
    yield put(getBooksError());
  }
}

export function* postBooksSaga(action: any) {
  yield postBooksAPI(action.books);
  yield put(postBooksSlice(action.books));
}

export function* deleteBookSaga(action: any) {
  yield deleteBookAPI(action._id);
  yield put(deleteBookSlice(action._id));
}

export function* editBookSaga(action: any) {
  yield editBookAPI(action._id, action.newobj);
  yield put(editBookSlice(action._id));
}

export function* watchBooksAsync() {
  yield takeEvery(bookTypes.GET_BOOKS, getBooksSaga);
  yield takeEvery(bookTypes.POST_BOOKS, postBooksSaga);
  yield takeEvery(bookTypes.DELETE_BOOK, deleteBookSaga);
  yield takeEvery(bookTypes.EDIT_BOOK, editBookSaga);
}
