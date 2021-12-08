import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieInfo, MovieInfoData } from '../../module/redux/reducer/movieInfoReducer';
import { RootState } from '../../module/redux/reducer/rootReducer';

import MovieInfo from '../MovieInfo';

function MovieinfoContainer() {
  const state = useSelector((state: RootState) => state.movieInfo);

  const dispatch = useDispatch();
  const searchMode = useSelector((state: RootState) => state.searchMode.searchMode);

  const fetchMovie = useCallback(
    (ttid: string) => {
      dispatch(fetchMovieInfo(ttid));
    },
    [dispatch],
  );

  const data: MovieInfoData = state.data;
  const error: string = state.error;

  return <MovieInfo loading={state.loading} movie={data} searchMode={searchMode} fetchMoviInfo={fetchMovie} />;
}

export default MovieinfoContainer;
