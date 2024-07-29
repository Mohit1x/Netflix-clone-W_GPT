import { createSlice } from "@reduxjs/toolkit";

export const MoviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerKey: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailerKey = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMovies, addTrailer } = MoviesSlice.actions;

export default MoviesSlice.reducer;
