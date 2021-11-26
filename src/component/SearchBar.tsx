import '../css/SearchFocus.css';

import React, { useCallback, useEffect } from 'react';

import { movie } from '../module/redux/reducer/SearchMovieReducer';
import { debounce } from 'lodash';

type SearchBarProps = {
  movieData: Array<movie>;
  asyncMovie: (name: string) => void;
  resetSearch: () => void;
};

function SearchBar({ asyncMovie, resetSearch, movieData }: SearchBarProps) {
  // 검색후 포커스 해제를 위해 사용
  useEffect(() => {
    resetSearch();
  }, []);

  const delaySetValue = useCallback(
    debounce((value) => {
      asyncMovie(value);
    }, 200),
    [asyncMovie],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    // Input값 호출 최적화
    delaySetValue(value);
  };

  return (
    <div className="container p-0 relative ">
      <input
        type="text"
        className="form-control relative h-12 "
        placeholder="Please Input Movie Name"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        onChange={handleChange}
      />
      <div className="searchDetail z-10 absolute min-w-full top-12 bg-gray-100 rounded-md  hidden"></div>
    </div>
  );
}

export default SearchBar;
