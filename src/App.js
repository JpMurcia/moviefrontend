import React from 'react';
import logo from './logo.svg';
import './App.css';
import { sign } from 'crypto';

class App extends React.Component {

  state = {
    movieName: "",
    movieList:[]
  }

  setMoviename(event) {
    this.setState({
      movieName: event.target.value
    })
  }

  setLastname(event) {
    this.setState({
      lastname: event.target.value
    })
  }
  registerMovie() {
    const {movieList, movieName} = this.state;
    this.setState({ movieList: [...movieList, movieName]})
  }


  render() {
    const { movieName, movieList} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <ul>
            {
              movieList.map(movie => {
                return (
                  <li>{movie.movieName}saasassa</li>
                )
              })
            }
          </ul>


          <p>{movieName} {movieList}</p>
          <input type="text" placeholder="Movie name" onChange={(e)=>this.setMoviename(e)}></input>
          <button type="button" onClick={()=>this.registerMovie()}>Registrar</button>
        </header>
      </div>
    );
  }
}

export default App;
