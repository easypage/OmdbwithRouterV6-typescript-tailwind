import React from 'react';
import { combineReducers } from 'redux';
import movie from './SearchMovieReducer';
import movieCard from './MovieCardReducer';
import movieInfo from './movieInfoReducer';
// CreateStore
const rootReducer = combineReducers({
  movie,
  movieCard,
  movieInfo,
});

export default rootReducer;
// State 타입
export type RootState = ReturnType<typeof rootReducer>;
