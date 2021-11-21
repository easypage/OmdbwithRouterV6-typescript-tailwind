import React from 'react';
import { combineReducers } from 'redux';
import movie from './SearchMovie';

// CreateStore
const rootReducer = combineReducers({
  movie,
});

export default rootReducer;
// State 타입
export type RootState = ReturnType<typeof rootReducer>;
