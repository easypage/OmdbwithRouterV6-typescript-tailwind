import React from 'react';
import { NavLink } from 'react-router-dom';
import { movie } from '../module/redux/reducer/SearchMovieReducer';

type SearchDetailProps = {
  movie: movie;
};

function SearchDetail({ movie }: SearchDetailProps) {
  return (
    <div className="text-left">
      <NavLink to={'/info/' + movie.imdbID} className="text-black ">
        <div className="flex transition-all   justify-between items-center hover:bg-yellow-200 p-3">
          <p className="flex-1">{movie.Title}</p>
          <img className="searchPoster  " src={movie.Poster} alt="" />
          <div className="flex-1 text-right">{movie.Year}</div>
        </div>
      </NavLink>
    </div>
  );
}

export default SearchDetail;
