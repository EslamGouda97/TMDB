import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
   moviesList: [],
  count: 0,
  },
  reducers: {
    addFavoriteMovie: (state, action) => {
      state.moviesList.push(action.payload);
      state.count = state.moviesList.length;
    },
    removeFavoriteMovie: (state, action) => {
      state.moviesList = state.moviesList.filter((movie) => movie.id !== action.payload.id);
      state.count = state.moviesList.length;
    },
  },
});

export const { addFavoriteMovie, removeFavoriteMovie } = favoritesSlice.actions;

export default favoritesSlice.reducer;