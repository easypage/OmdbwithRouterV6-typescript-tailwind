import React from 'react';
import { NavLink } from 'react-router-dom';
import { movie } from '../module/redux/reducer/SearchMovieReducer';

type MovieCardProps = {
  movie: movie;
};

function MovieCard({ movie }: MovieCardProps) {
  return (
    <NavLink to={'/info/' + movie.imdbID}>
      <div className="box relative h-32  rounded-3xl w-full m-0 lg:h-80">
        <img src={movie.Poster} className=" w-full h-full " />
        <div className="info  pr-1 w-full h-2/5 absolute bottom-0 flex flex-col  items-center justify-center  lg:items-start ">
          <div className="type text-xs leading-3 text-yellow-300">Movie</div>
          <div className="title text-xs leading-3 lg:text-3xl text-white">{movie.Title}</div>
          <div className="year hidden text-xs leading-3 text-gray-400 lg:block">{movie.Year}</div>
        </div>
      </div>
    </NavLink>
  );
}

export default MovieCard;
