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
    <div>
      <div className={SearchMode.searchMode ? 'fixed top-0  w-full z-50' : '  w-full z-50'}>
        <div
          className={
            SearchMode.searchMode
              ? 'top-0 w-full h-16 bg-black flex items-center  justify-around md:justify-start md:pr-8 md:pl-8 z-50'
              : 'top-0 w-full h-16 bg-black flex items-center  justify-around md:justify-start md:pr-8 md:pl-8 z-50 '
          }
        >
          <NavLink
            className={
              SearchMode.searchMode
                ? 'hidden font-Oswald md:block md:text-5xl md:pr-8  cursor-pointer'
                : 'title text-2xl  font-Oswald md:text-5xl md:pr-8 cursor-pointer'
            }
            to={'/'}
          >
            <p className="inline text-yellow-500">OMDB</p>API
          </NavLink>
          <button className={SearchMode.searchMode ? 'pl-4 pr-4 text-white text-3xl  md:hidden' : 'hidden '} onClick={blur}>
            X
          </button>
          <form className={SearchMode.searchMode ? 'w-full md:w-1/2' : 'md:w-1/2'} onFocus={focus}>
            <SearchBarContainer />
          </form>
        </div>

        {SearchMode.searchMode && (
          <div className=" relative  bg-white z-50">
            <SearchDropDownContainer />
          </div>
        )}

        <div className={SearchMode.searchMode ? 'screenBlock fixed w-full h-full bg-transparent top-16' : 'hidden'} onClick={blur}></div>
      </div>
      {/* fixed 전환-> top 공간 매꾸기 */}
      <div className={SearchMode.searchMode ? 'h-16' : 'hidden'}></div>
    </div>
  );
}

export default InfoHeader;
