import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    // 로고
    <div className="flex direc bg-gray-600 h-24 items-center ">
      <div className="title text-5xl font-Oswald text-white m-4">OMDBAPI TYPE SCRIPT</div>
      {/* 테스트용메뉴 */}
      <div className="MENU flex direc  content-end">
        <NavLink className=" text-2xl font-Oswald" to={'/'}>
          Search
        </NavLink>
        <NavLink className="  text-2xl font-Oswald ml-3" to={'/info/3'}>
          Info
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
