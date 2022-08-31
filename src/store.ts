import { configureStore } from "@reduxjs/toolkit";
// import user from "./redux/slice/user";
import books from "./redux/slice/books";
import book from "./redux/slice/book";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./redux/sagas";
// console.log(books);
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    // user,
    book,
    books,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
