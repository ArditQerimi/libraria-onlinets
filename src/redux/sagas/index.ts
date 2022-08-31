import { all } from "redux-saga/effects";
import { watchBooksAsync } from "./books";

export function* rootSaga() {
  yield all([watchBooksAsync()]);
}
