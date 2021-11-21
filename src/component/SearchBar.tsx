import React, { useCallback, useEffect, useState } from 'react';
import { searchMovieData } from '../module/redux/reducer/SearchMovie';
import { debounce } from 'lodash';
import '../css/SearchFocus.css';
import SearchDetail from './SearchDetail';

type SearchBarProps = {
  movieData: searchMovieData;
  loading: boolean;
  error: string;
  asyncMovie: (name: string) => void;
  resetSearch: () => void;
};

function SearchBar({ movieData, loading, asyncMovie, error, resetSearch }: SearchBarProps) {
  const [InputState, InputSetstate] = useState('');

  useEffect(() => {
    resetSearch();
  }, []);

  const delaySetValue = useCallback(
    debounce((value) => {
      asyncMovie(value);
    }, 500),
    [asyncMovie],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    InputSetstate(value);

    // Input값 호출 최적화
    delaySetValue(value);
  };

  const SearchButton = () => {};

  return (
    <div>
      <div className="flex">
        <div className="container p-0 relative ">
          <input
            type="text"
            className="form-control relative h-12 "
            placeholder="Please Input Movie Name"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={handleChange}
          />
          {/* 검색결과 5개 */}
          <div className="searchDetail absolute min-w-full top-12 bg-gray-100 rounded-md  hidden">
            {
              // 입력 값이 없으면 렌더링 하지 않습니다.
              InputState !== '' &&
                // 로딩인지를확인
                (!loading ? (
                  // 에러호출이면 에러르 아니면 정상적인 컴포넌트를 리턴해줍니다.
                  error.length === 0 ? (
                    movieData.movie.map((movie, index) => {
                      // 검색 결과 5개
                      if (index > 4) {
                        return;
                      }
                      return (
                        <div key={movie.imdbID}>
                          <SearchDetail movie={movie} />
                        </div>
                      );
                    })
                  ) : (
                    <h2>{error}</h2>
                  )
                ) : (
                  <div className="spinner-border text-center" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                ))
            }
          </div>
        </div>
        <button className="btn btn-outline-secondary btn-lg" type="button" onClick={SearchButton}>
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
