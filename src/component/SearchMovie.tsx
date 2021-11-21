import React from 'react';
import '../css/resize.css';
import SearchBarContainer from './container/SearchBarContainer';

function SearchMovie() {
  return (
    <div className="container text-center bg-gray-400">
      <div className="bg-red-100"></div>

      <SearchBarContainer />
    </div>
  );
}

export default SearchMovie;
