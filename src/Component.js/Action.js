import React, { Component } from 'react';
import {data} from './data';
import '../index.css';
class Action extends Component {
    constructor(){
        super();
        this.state={
            movies:[],

        }
    }
    componentDidMount(){
            // filtering action movies from data 
        const movies=data.filter((movie)=>movie.genres=='Action Movie');
        console.log('Action ',movies);
        this.setState({movies:movies});
      }
      // call setMovies to set current movie in app component
      showDetails(movie){
          const {setMovie}=this.props;
          setMovie(movie);
      }

    render() {
        const {movies}=this.state;
        return (
            <div className="movie-containor">
              <div className="gener" > Action  Movies</div>
                <ul>
               {movies ? movies.map((movie)=>
               <li  className="movie-list">
                   <h2> {movie.title} 
                   <span>
                       <button 
                       className="button" 
                       onClick={()=>this.showDetails(movie)}>
                           Show Details
                           </button>
                           </span></h2>
                           </li>
              
               ):<h2>Fetching Action Movies ...</h2>}
               </ul>
            </div>
        );
    }
}

export default Action;