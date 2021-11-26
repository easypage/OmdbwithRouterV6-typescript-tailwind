import { NavLink } from 'react-router-dom';
import { movie } from '../module/redux/reducer/SearchMovieReducer';

type MovieCardProps = {
  movie: movie;
};

function MovieCard({ movie }: MovieCardProps) {
  return (
    <NavLink className="inline-block w-1/3 md:w-1/6 " to={'/info/' + movie.imdbID}>
      <img src={movie.Poster} className=" h-52  md:h-full" />
    </NavLink>
  );
}

export default MovieCard;
