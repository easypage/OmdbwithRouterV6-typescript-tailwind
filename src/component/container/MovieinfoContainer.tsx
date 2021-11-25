import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MovieInfoData } from '../../module/redux/reducer/movieInfoReducer';
import { RootState } from '../../module/redux/reducer/rootReducer';
import MovieInfo from '../MovieInfo';

function MovieinfoContainer() {
  const state = useSelector((state: RootState) => state.movieInfo);
  const dispatch = useDispatch();
  const searchMode = useSelector((state: RootState) => state.searchMode.searchMode);

  const data: MovieInfoData = state.data;
  const error: string = state.error;

  return <MovieInfo loading={state.loading} movie={data} error={error} searchMode={searchMode} />;
}

export default MovieinfoContainer;
