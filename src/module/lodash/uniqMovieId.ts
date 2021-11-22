import { uniqBy } from 'lodash';
import React from 'react';
import { movie } from '../redux/reducer/SearchMovieReducer';

function uniqMovieId(array: Array<movie>) {
  return uniqBy(array, 'imdbID');
}

export default uniqMovieId;
