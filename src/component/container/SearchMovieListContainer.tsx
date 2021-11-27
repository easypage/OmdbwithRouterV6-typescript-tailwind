import { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../module/redux/reducer/rootReducer';
import { addMovieList } from '../../module/redux/reducer/SearchMovieReducer';

import SearchMovieList from '../SearchMovieList';

function SearchMovieListContainer() {
  const searchData = useSelector((state: RootState) => state.movie.data);
  const search = useSelector((state: RootState) => state.movie.searchValue);
  const loading = useSelector((state: RootState) => state.movie.loading);
  const dispatch = useDispatch();

  const addList = useCallback(
    (page: number) => {
      dispatch(addMovieList(search, page));
    },
    [dispatch, search],
  );

  return <SearchMovieList movieData={searchData} loading={loading} addList={addList} />;
}

export default SearchMovieListContainer;
