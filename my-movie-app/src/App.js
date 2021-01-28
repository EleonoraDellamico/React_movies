import { useState } from 'react';
import MovieList from './components/moviesList';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

const App = ()=> { 
    const [movies, setMovies] = useState ([  {
            "Title": "Friends",
            "Year": "1994–2004",
            "imdbID": "tt0108778",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        },
        {
            "Title": "Friends with Benefits",
            "Year": "2011",
            "imdbID": "tt1632708",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ2MzQ0NTk4N15BMl5BanBnXkFtZTcwMDc2NDYzNQ@@._V1_SX300.jpg"
        },
        {
            "Title": "Just Friends",
            "Year": "2005",
            "imdbID": "tt0433400",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjA0Mzg2NjUzMl5BMl5BanBnXkFtZTcwNDg2ODUzMQ@@._V1_SX300.jpg"
        },
        {
            "Title": "How to Lose Friends & Alienate People",
            "Year": "2008",
            "imdbID": "tt0455538",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjY0MzFmMDgtY2ZiOC00M2QyLWFmOWMtOTBmZWY4OWE2YTYzXkEyXkFqcGdeQXVyMjA5MTIzMjQ@._V1_SX300.jpg"
        },]);
  return <div className="container-fluid"> 
    <MovieList movies = {movies}/>
  </div>; 
}

export default App;
