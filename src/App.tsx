import './App.css';
import { Route, Routes } from 'react-router-dom';
import GoodBy from './component/GoodBy';
import Header from './component/Header';
import SearchMovieContainer from './component/container/SearchMovieContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<SearchMovieContainer />} />
        <Route path="/info/:key1" element={<GoodBy />} />
      </Routes>
    </div>
  );
}

export default App;
