import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';
import AboutUs from './components/about/about';

function App() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
  };
  return (
    <div className="app-header">
      
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<MovieList />}></Route>
          <Route path="movie/:id" element={<Movie />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="about/" element={<AboutUs />}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
