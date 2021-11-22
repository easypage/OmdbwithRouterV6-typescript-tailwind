import '../css/resize.css';
import ResultSliderContainer from './container/ResultSliderContainer';
import SearchBarContainer from './container/SearchBarContainer';

function SearchMovie() {
  return (
    <div className=" text-center bg-gray-400">
      <div className="bg-red-100"></div>

      <SearchBarContainer />

      <ResultSliderContainer />
    </div>
  );
}

export default SearchMovie;
