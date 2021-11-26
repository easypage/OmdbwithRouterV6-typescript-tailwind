import '../css/resize.css';

import { searchMovieData } from '../module/redux/reducer/SearchMovieReducer';

import { useEffect, useRef, useState } from 'react';

import SearchBarContainer from './container/SearchBarContainer';
import Loading from './Loading';
import MovieCard from './MovieCard';
type SearchMovieProps = {
  searchData: searchMovieData;
  loading: boolean;
  addMovieList: (page: number) => void;
};

function SearchMovie({ searchData, addMovieList, loading }: SearchMovieProps) {
  const [page, setPage] = useState(2);
  const target = useRef<HTMLDivElement>(null);

  const add = () => {
    addMovieList(page);
    setPage((page) => page + 1);
  };
  return (
    <div className=" text-center md:mt-40 lg:mt-80">
      {/* 타이틀 */}
      <div className="bg-red-100"></div>
      <h1 className="text-6xl font-Oswald mt-8 mb-8">
        <p className="text-yellow-500 inline">OMDB</p> API
      </h1>

      {/* 검색창 */}
      <SearchBarContainer />
      {/* 이부분에 무한 스크롤 적용 가능 */}
      {/* 결과값 출력 */}
      <div className="flex flex-wrap container p-0 ">
        {searchData.movie.length !== 0 && searchData.movie.map((movie, index) => <MovieCard movie={movie} key={index} />)}
      </div>

      {/* 로딩 */}
      {loading && <Loading />}

      {/* more버튼 */}
      {Number(searchData.totalResults) / (10 * (page - 1)) > 1 && (
        <button onClick={add} className="btn btn-warning container text-2xl w-full font-Oswald">
          Read more...
        </button>
      )}
    </div>
  );
}

export default SearchMovie;
