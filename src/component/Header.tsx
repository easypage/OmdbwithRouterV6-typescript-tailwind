import { NavLink } from 'react-router-dom';
import SearchBarContainer from './container/SearchBarContainer';

// fixed냐 boolean에 따라 헤더를 다른 스타일을 적용 하겠습니다.
function Header() {
  return (
    // 로고
    <div className="flex w-full justify-around top-0 bg-black h-24  items-center ">
      <NavLink className="  font-Oswald" to={'/'}>
        <div className="title text-2xl font-Oswald text-white ">OMDBAPI</div>
      </NavLink>
      <div className="MENU ">
        <SearchBarContainer />
      </div>
    </div>
  );
}

export default Header;
