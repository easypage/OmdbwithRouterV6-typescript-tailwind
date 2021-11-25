import './App.css';

import { Route, Routes } from 'react-router-dom';

import SearchMovie from './component/SearchMovie';
import MovieInfoCombine from './component/MovieInfoCombine';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SearchMovie />} />
        <Route path="/info/:ttid" element={<MovieInfoCombine />} />
      </Routes>
    </div>
  );
}

export default App;
