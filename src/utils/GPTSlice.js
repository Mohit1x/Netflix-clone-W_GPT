import { createSlice } from "@reduxjs/toolkit";

export const GPTSlice = createSlice({
  name: "gptsearch",
  initialState: {
    showGpt: false,
    lang: "en",
  },
  reducers: {
    toogleGptSearch: (state) => {
      state.showGpt = !state.showGpt;
    },
    changeLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toogleGptSearch, changeLang } = GPTSlice.actions;

export default GPTSlice.reducer;
