import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MovieData } from '../../module/redux/reducer/movieInfoReducer';
import { RootState } from '../../module/redux/reducer/rootReducer';
import MovieInfo from '../MovieInfo';

function MovieinfoContainer() {
  const state = useSelector((state: RootState) => state.movieInfo);
  const dispatch = useDispatch();

  const loading: boolean = state.loading;
  const data: MovieData = state.data;
  const error: string = state.error;

  return (
    <div>
      <MovieInfo loading={loading} movie={data} error={error} />
    </div>
  );
}

export default MovieinfoContainer;
