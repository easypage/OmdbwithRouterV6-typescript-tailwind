import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie, reset } from '../../module/redux/reducer/SearchMovie';
import { RootState } from '../../module/redux/reducer/rootReducer';
import SearchBar from '../SearchBar';

function SearchBarContainer() {
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

  return <SearchBar asyncMovie={asyncMovie} resetSearch={resetSearch} />;
}

export default SearchBarContainer;
