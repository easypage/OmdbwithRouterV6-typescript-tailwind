import React from 'react';
import { combineReducers } from 'redux';
import movie from './SearchMovieReducer';
import movieCard from './MovieCardReducer';

// CreateStore
const rootReducer = combineReducers({
  movie,
  movieCard,
});

export default rootReducer;
// State 타입
export type RootState = ReturnType<typeof rootReducer>;
