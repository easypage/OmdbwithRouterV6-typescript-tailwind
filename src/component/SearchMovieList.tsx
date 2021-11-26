import React, { useCallback, useEffect, useRef, useState } from 'react';

import { searchMovieData } from '../module/redux/reducer/SearchMovieReducer';
import Loading from './Loading';
import MovieCard from './MovieCard';

type SearchMovieListProps = {
  movieData: searchMovieData;
  addList: (page: number) => void;
  loading: boolean;
};

function SearchMovieList({ movieData, addList, loading }: SearchMovieListProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [page, setstate] = useState(2);

  const add = useCallback(
    async ([entries]) => {
      if (entries.isIntersecting && !loading) {
        console.log('실행되었습니다!');
        await addList(page);
        setstate(page + 1);
      }
    },
    [page, loading],
  );
  // 총갯수 / 한번에로드되는수(10) * (페이지는 다음페이지를 나타냄-1) == 1보다 아래일 경우 10보다 낮은 로딩이 됬다는 말
  const loadAble = Number(movieData.totalResults) / (10 * (page - 1)) > 1;

  useEffect(() => {
    let observer: IntersectionObserver;
    if (divRef.current) {
      observer = new IntersectionObserver(add, { threshold: 1 });
      observer.observe(divRef.current);
    }

    return () => {
      divRef.current && observer.unobserve(divRef.current);
      observer && observer.disconnect();
    };
  }, [page, loading]);

  return (
    <div className="">
      <div className="flex flex-wrap container p-0 ">
        {movieData.movie.length !== 0 && movieData.movie.map((movie, index) => <MovieCard movie={movie} key={index} />)}
      </div>
      {/* 로딩 */}
      {loading && <Loading />}
      {loadAble && <h2 ref={divRef}>테스트</h2>}
    </div>
  );
}

export default SearchMovieList;
