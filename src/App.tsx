import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import MovieInfo from './component/MovieInfo';
import SearchMovie from './component/SearchMovie';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/:ttid" element={<MovieInfo />} />
      </Routes>
    </div>
  );
}

export default App;
