import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieList, movie, reset } from '../../module/redux/reducer/SearchMovieReducer';
import { RootState } from '../../module/redux/reducer/rootReducer';
import SearchBar from '../SearchBar';
import { insert } from '../../module/redux/reducer/MovieCardReducer';

function SearchBarContainer() {
  const dispatch = useDispatch();
  const movieList = useSelector((state: RootState) => state.movie.data.movie);
  const asyncMovie = useCallback(
    (name: string) => {
      dispatch(fetchMovieList(name));
    },
    [dispatch],
  );
  const resetSearch = useCallback(() => {
    dispatch(reset());
  }, [dispatch]);

  const insertMovie = useCallback(
    (movie: Array<movie>) => {
      dispatch(insert(movie));
    },
    [dispatch],
  );

  return <SearchBar movieData={movieList} asyncMovie={asyncMovie} resetSearch={resetSearch} insertMovie={insertMovie} />;
}

export default SearchBarContainer;
