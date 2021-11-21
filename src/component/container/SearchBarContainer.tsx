import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie, reset } from '../../module/redux/reducer/SearchMovie';
import { RootState } from '../../module/redux/reducer/rootReducer';
import SearchBar from '../SearchBar';

function SearchBarContainer() {
  const state = useSelector((state: RootState) => state.movie.data);
  const loading = useSelector((state: RootState) => state.movie.loading);
  const error = useSelector((state: RootState) => state.movie.error);

  const dispatch = useDispatch();

  const asyncMovie = useCallback(
    (name: string) => {
      dispatch(fetchMovie(name));
    },
    [dispatch],
  );
  const resetSearch = useCallback(() => {
    dispatch(reset());
  }, [dispatch]);

  return <SearchBar loading={loading} movieData={state} asyncMovie={asyncMovie} error={error} resetSearch={resetSearch} />;
}

export default SearchBarContainer;
