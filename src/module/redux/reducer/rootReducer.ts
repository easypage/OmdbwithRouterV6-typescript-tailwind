import React from 'react';
import { combineReducers } from 'redux';
import movie from './SearchMovieReducer';
import movieInfo from './movieInfoReducer';
import searchMode from './SearchModeReducer';
// CreateStore
const rootReducer = combineReducers({
  movie,
  movieInfo,
  searchMode,
});

export default rootReducer;
// State 타입
export type RootState = ReturnType<typeof rootReducer>;
