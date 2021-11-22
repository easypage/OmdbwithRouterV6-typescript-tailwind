import React, { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';
import '../css/SearchFocus.css';
import SearchDropDownContainer from './container/SearchDropDownContainer';

type SearchBarProps = {
  asyncMovie: (name: string) => void;
  resetSearch: () => void;
};

function SearchBar({ asyncMovie, resetSearch }: SearchBarProps) {
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
          <div className="searchDetail absolute min-w-full top-12 bg-gray-100 rounded-md  hidden">
            {
              // 입력 값이 없으면 렌더링 하지 않습니다.
              // 검색 중 하단부 미리보기 드롭다운 창입니다.
              InputState !== '' && <SearchDropDownContainer />
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
