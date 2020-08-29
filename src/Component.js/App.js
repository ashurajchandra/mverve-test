import React from "react";
import '../index.css';
import Navbar from "./Navbar";
import Darama from "./Darama";
import Action from "./Action";
import Comedy from "./Comedy";
import Movie from './Movie';
class App extends React.Component {

  constructor(){
    super();
    this.state={
      showMovie:false,
      movie:''
    }
  }

  setMovie=(movie)=>{
    this.setState({movie:movie,showMovie:true})
  }

  toggleScreen=()=>{
    this.setState({showMovie:false})
  }
  render() {
    const {showMovie,movie}=this.state;
    return (
      <div className="App">
        <Navbar showMovie={showMovie} toggleScreen={this.toggleScreen}/>
        {
        showMovie?<Movie movie={movie} />
        :<div>
        <Darama setMovie={this.setMovie}/>
        <Comedy setMovie={this.setMovie} />
        <Action setMovie={this.setMovie}/>
        </div>
        }
        
      </div>
    );
  }
}

export default App;
