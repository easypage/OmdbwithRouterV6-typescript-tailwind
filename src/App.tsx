import './App.css';

import { Route, Routes } from 'react-router-dom';

import MovieInfoCombine from './component/MovieInfoCombine';
import SearchMovie from './component/SearchMovie';

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
