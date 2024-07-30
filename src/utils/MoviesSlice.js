import { createSlice } from "@reduxjs/toolkit";

export const MoviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    popularMovies: [],
    topRatedMovies: [],
    topRatedSeries: [],
    upComingMovies: [],
    airingTodaySeries: [],
    onAirSeries: [],
    popularSeries: [],

    trailerKey: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addPopularSeries: (state, action) => {
      state.popularSeries = action.payload;
    },
    addtopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addtopRatedSeries: (state, action) => {
      state.topRatedSeries = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },
    addAiringTodaySeries: (state, action) => {
      state.airingTodaySeries = action.payload;
    },
    addOnAirSeries: (state, action) => {
      state.onAirSeries = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailerKey = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addMovies,
  addTrailer,
  addPopularMovies,
  addtopRatedMovies,
  addUpComingMovies,
  addAiringTodaySeries,
  addOnAirSeries,
  addPopularSeries,
  addtopRatedSeries,
} = MoviesSlice.actions;

export default MoviesSlice.reducer;
