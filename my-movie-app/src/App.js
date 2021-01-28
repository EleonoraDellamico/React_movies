import { useState, useEffect } from 'react';
import MovieList from './components/moviesList';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MovieListHeading from "./components/movieListHeading";
import SearchBox from "./components/SearchBox.js";




const App = ()=> { 
    const [movies, setMovies] = useState ([]);
     const [searchValue, setSearchValue] = useState ("");


     //Llamada Api
        const getMovieRequest = async (searchValue)=>{
          const url= `http://www.omdbapi.com/?s=${searchValue}&apikey=ff43ce54`;

          const response = await fetch (url);
          const responseJson = await response.json();
         if(responseJson.Search){
          setMovies (responseJson.Search);
         }
      };

useEffect(()=>{
  getMovieRequest(searchValue);
}, [searchValue]);


  return <div className="container-fluid movie-app"> 
  <div className="row d-flex align-items-center mt-4 mb-4">
<MovieListHeading heading = "Movies"/>
<SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
  </div>
  <div className="row">
    <MovieList movies = {movies}/>
    </div>
  </div>; 
}

export default App;
