import React, { useCallback, useEffect, useRef, useState } from 'react';
import { movie, searchMovieData } from '../module/redux/reducer/SearchMovieReducer';
import { debounce } from 'lodash';
import '../css/SearchFocus.css';
import SearchDropDownContainer from './container/SearchDropDownContainer';

type SearchBarProps = {
  movieData: Array<movie>;
  asyncMovie: (name: string) => void;
  resetSearch: () => void;
  insertMovie: (movie: Array<movie>) => void;
};

function SearchBar({ asyncMovie, resetSearch, insertMovie, movieData }: SearchBarProps) {
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
      insertMovie(movieData);
      console.log('입력끝');
    }
  };

  const SearchButton = () => {};

  return (
    <div>
      <div>
        <div className="container p-0 relative flex">
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
          <div className="searchDetail z-10 absolute min-w-full top-12 bg-gray-100 rounded-md  hidden">
            {
              // 입력 값이 없으면 렌더링 하지 않습니다.
              InputState !== '' && <SearchDropDownContainer />
            }
          </div>
          <button ref={ButtonRef} className="btn btn-outline-secondary btn-lg" type="button" onClick={SearchButton}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
