import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBarContainer from './container/SearchBarContainer';

function Header() {
  return (
    // 로고
    <div className="flex justify-around bg-gray-600 h-24 items-center ">
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
