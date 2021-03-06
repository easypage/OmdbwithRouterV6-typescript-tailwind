import React, { useCallback, useEffect, useRef, useState } from 'react';

import { searchMovieData } from '../module/redux/reducer/SearchMovieReducer';
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
      observer = new IntersectionObserver(add, { threshold: 1, rootMargin: '20px' });
      observer.observe(divRef.current);
    }

    return () => {
      observer && observer.disconnect();
    };
  }, [page, loading]);

  return (
    <div>
      <div className="flex flex-wrap container p-0 ">
        {movieData.movie.length !== 0 && movieData.movie.map((movie, index) => <MovieCard movie={movie} key={index} />)}
      </div>
      {/* 로딩 */}
      {loading && (
        <div className="spinner-border text-center bottom-0  fixed" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
      {loadAble && <h2 ref={divRef}></h2>}
    </div>
  );
}

export default SearchMovieList;
