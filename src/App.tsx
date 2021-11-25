import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import SearchMovie from './component/SearchMovie';
import MovieinfoContainer from './component/container/MovieinfoContainer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SearchMovie />} />
        <Route path="/info/:ttid" element={<MovieinfoContainer />} />
      </Routes>
    </div>
  );
}

export default App;
