import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import MoviesReducer from "./MoviesSlice";
import GPTReducer from "./GPTSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: MoviesReducer,
    gptsearch: GPTReducer,
  },
});

export default appStore;
