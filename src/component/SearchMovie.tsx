import { useSelector } from 'react-redux';

import { RootState } from '../module/redux/reducer/rootReducer';

import SearchBarContainer from './container/SearchBarContainer';
import SearchMovieListContainer from './container/SearchMovieListContainer';

function SearchMovie() {
  const state = useSelector((state: RootState) => state.movie.data.movie);

  return (
    <div className=" text-center md:mt-40 lg:mt-80">
      {/* 타이틀 */}
      <div className="bg-red-100"></div>
      <h1 className=" mt-8 mb-8 text-6xl font-Oswald">
        <p className="text-yellow-500 inline">OMDB</p> API
      </h1>

      {/* 검색창 */}
      <SearchBarContainer />
      {/* 이부분에 state.length를 적용하는 이유 -> useEffect의 observe 리턴을 좀더 관리 잘하기 위해 */}
      {/* 결과값 출력 */}
      {state.length !== 0 && <SearchMovieListContainer />}
    </div>
  );
}

export default SearchMovie;
