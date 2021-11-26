import './App.css';

import { Route, Routes } from 'react-router-dom';

import MovieInfoCombine from './component/MovieInfoCombine';
import SearchMovieContainer from './component/container/SearchMovieContainer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SearchMovieContainer />} />
        <Route path="/info/:ttid" element={<MovieInfoCombine />} />
      </Routes>
    </div>
  );
}

export default App;
