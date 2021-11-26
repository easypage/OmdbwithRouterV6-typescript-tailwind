import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../module/redux/reducer/rootReducer';
import { addMovieList } from '../../module/redux/reducer/SearchMovieReducer';
import SearchMovie from '../SearchMovie';

function SearchMovieContainer() {
  const searchData = useSelector((state: RootState) => state.movie.data);
  const search = useSelector((state: RootState) => state.movie.searchValue);
  const loading = useSelector((state: RootState) => state.movie.loading);
  const dispatch = useDispatch();

  const addMovie = useCallback(
    (page: number) => {
      dispatch(addMovieList(search, page));
    },
    [dispatch, search],
  );

  return <SearchMovie searchData={searchData} loading={loading} addMovieList={addMovie} />;
}

export default SearchMovieContainer;
