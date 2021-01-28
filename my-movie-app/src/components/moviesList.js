import React from"react";

const MovieList = (props) => {
    return (
    <>
    {props.movies.map((movie,index) =>( 
    <div className=" d-flex justify-contect-start m-3">
        <img src={movie.Poster} alt="Poster Movie"></img>
    </div>
     ))}
    </>
    );
};
export default MovieList;