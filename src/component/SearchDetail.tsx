import { movie } from '../module/redux/reducer/SearchMovieReducer';

type SearchDetailProps = {
  movie: movie;
};

function SearchDetail({ movie }: SearchDetailProps) {
  return (
    <div className="text-left">
      <a href={'/info/' + movie.imdbID} className="text-black ">
        <div className="flex transition-all   justify-between items-center hover:bg-yellow-200 p-3">
          <p className="flex-1">{movie.Title}</p>
          <img className="searchPoster h-16 md:h-24" src={movie.Poster} alt="" />
          <div className="flex-1 text-right">{movie.Year}</div>
        </div>
      </a>
    </div>
  );
}

export default SearchDetail;
