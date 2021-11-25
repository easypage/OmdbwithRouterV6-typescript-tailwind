import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SearchBarContainer from './container/SearchBarContainer';
import '../css/SearchMode.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../module/redux/reducer/rootReducer';
import { searchModeOff, searchModeOn } from '../module/redux/reducer/SearchModeReducer';
import SearchDropDownContainer from './container/SearchDropDownContainer';

//focus 가 일어난다.
//focus가 일어나면 css형태를 교체 해준다.

//focus가 취소가 된다면 리덕스 값을 변경시켜준다.
//다시 css를 고정시킨다.
function InfoHeader() {
  const SearchMode = useSelector((state: RootState) => state.searchMode);
  const dispatch = useDispatch();

  const focus = () => {
    dispatch(searchModeOn());
    console.log('on! 실행됨');
    console.log(SearchMode);
  };
  const blur = () => {
    dispatch(searchModeOff());
    console.log('off! 실행됨');
    console.log(SearchMode);
  };

  return (
    <div>
      <div>
        <div
          className={
            SearchMode.searchMode
              ? 'top-0 bg-black fixed items-center flex justify-around w-full h-24  z-50'
              : 'top-0 bg-black  items-center flex justify-around w-full h-24  z-50 searchMode'
          }
        >
          <NavLink className={SearchMode.searchMode ? 'hidden' : 'font-Oswald'} to={'/'}>
            <div className="title text-2xl font-Oswald  ">OMDBAPI</div>
          </NavLink>
          <button className={SearchMode.searchMode ? ' text-white text-3xl pl-4 pr-4' : 'hidden '} onClick={blur}>
            X
          </button>
          <div className={SearchMode.searchMode ? 'w-full' : 'MENU '} onFocus={focus}>
            <SearchBarContainer />
          </div>
          <div className={SearchMode.searchMode ? 'screenBlock fixed w-full h-full bg-transparent top-20' : 'hidden'} onClick={blur}></div>
        </div>
        <SearchDropDownContainer />
      </div>
      <div className={SearchMode.searchMode ? 'h-24' : 'hidden'}></div>
    </div>
  );
}

export default InfoHeader;
