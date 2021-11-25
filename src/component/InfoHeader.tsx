import '../css/SearchMode.css';

import { NavLink } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../module/redux/reducer/rootReducer';
import { searchModeOff, searchModeOn } from '../module/redux/reducer/SearchModeReducer';

import SearchDropDownContainer from './container/SearchDropDownContainer';
import SearchBarContainer from './container/SearchBarContainer';

//focus 가 일어난다.
//focus가 일어나면 css형태를 교체 해준다.

//focus가 취소가 된다면 리덕스 값을 변경시켜준다.
//다시 css를 고정시킨다.
function InfoHeader() {
  const SearchMode = useSelector((state: RootState) => state.searchMode);
  const dispatch = useDispatch();

  const focus = () => {
    dispatch(searchModeOn());
  };
  const blur = () => {
    dispatch(searchModeOff());
  };

  return (
    <div className={SearchMode.searchMode ? 'fixed top-0 z-50 w-full' : ' z-50 w-full'}>
      <div
        className={
          SearchMode.searchMode
            ? 'top-0 bg-black items-center flex justify-around w-full h-16 md:justify-start md:pr-8 md:pl-8 z-50 searchMode'
            : 'top-0 bg-black  items-center flex justify-around w-full h-16  z-50 md:justify-start md:pr-8 md:pl-8 '
        }
      >
        <NavLink
          className={SearchMode.searchMode ? 'hidden md:block font-Oswald  md:text-5xl md:pr-8' : 'title text-2xl  font-Oswald md:text-5xl md: md:pr-8'}
          to={'/'}
        >
          <p className="text-yellow-500 inline">OMDB</p>API
        </NavLink>
        <button className={SearchMode.searchMode ? ' text-white text-3xl pl-4 pr-4 md:hidden' : 'hidden '} onClick={blur}>
          X
        </button>
        <div className={SearchMode.searchMode ? 'w-full md:w-1/2' : 'MENU md:w-1/2'} onFocus={focus}>
          <SearchBarContainer />
        </div>
      </div>
      {SearchMode.searchMode && (
        <div className=" relative z-50 bg-white">
          <SearchDropDownContainer />
        </div>
      )}
      <div className={SearchMode.searchMode ? 'screenBlock z-10;  fixed w-full h-full bg-transparent top-16' : 'hidden'} onClick={blur}></div>
    </div>
  );
}

export default InfoHeader;
