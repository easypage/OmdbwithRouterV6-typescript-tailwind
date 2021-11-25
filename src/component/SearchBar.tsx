import '../css/SearchFocus.css';

import React, { useCallback, useEffect, useRef, useState } from 'react';

import { movie } from '../module/redux/reducer/SearchMovieReducer';
import { debounce } from 'lodash';

type SearchBarProps = {
  movieData: Array<movie>;
  asyncMovie: (name: string) => void;
  resetSearch: () => void;
};

function SearchBar({ asyncMovie, resetSearch, movieData }: SearchBarProps) {
  const [InputState, InputSetstate] = useState('');
  // 검색후 포커스 해제를 위해 사용
  const ButtonRef = useRef<HTMLButtonElement>(null);
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
    InputSetstate(value);

    // Input값 호출 최적화
    delaySetValue(value);
  };

  const onKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == 'Enter') {
      // 입력후 포커스 해제
      ButtonRef.current?.focus();
      console.log('입력끝');
    }
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
        onKeyPress={onKeyPress}
      />
      {/* 검색결과 5개 */}
      <div className="searchDetail z-10 absolute min-w-full top-12 bg-gray-100 rounded-md  hidden"></div>
    </div>
  );
}

export default SearchBar;
