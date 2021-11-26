import React from 'react';
import { searchMovieData } from '../module/redux/reducer/SearchMovieReducer';
import MovieCard from './MovieCard';

function SearchMovieList(searchData: searchMovieData) {
  return (
    <div className="flex flex-wrap container p-0 ">
      {searchData.movie.length !== 0 && searchData.movie.map((movie, index) => <MovieCard movie={movie} key={index} />)}
    </div>
  );
}

export default SearchMovieList;
