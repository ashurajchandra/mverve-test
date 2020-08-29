import React from 'react';

function Movie(props) {
    const{movie} = props;
    return (
        <div className="description">
            <h1 >{movie.genres}</h1>
            <h1 >{movie.title}</h1>
             <img className="image" src={movie.posterurl} alt="movie-poster" /> 
            <div className="movie-about"> <span> Release Date:{movie.releaseDate}</span>
             <span> Durattion:{movie.duration}</span>
             <span>IMDB Rating:{movie.imdbRating}</span>
             </div>

    <div className="details"><h3>Description:</h3>{movie.storyline}</div>
            
        </div>
    );
}

export default Movie;
