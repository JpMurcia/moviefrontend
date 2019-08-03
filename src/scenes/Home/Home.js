import React from 'react';
import logo from '../../logo.svg';
import './Home.css';
import MovieCard from '../../components/MovieCard'

class Home extends React.Component {

  state = {
    movieName: "",
    movieList:[]
  }

  setMoviename(event) {
    this.setState({
      movieName: event.target.value
    })
  }

  registerMovie() {
    const {movieList, movieName} = this.state;
    this.setState({ movieList: [...movieList, movieName], movieName:""})
    document.getElementById("TBMovieName").value = ""
  }


  render() {
    const { movieName, movieList} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <ol>
            {
              movieList.map((movie, i) => {
                return (
                  <MovieCard key={i} name={movie}></MovieCard>
                )
              })
            }
          </ol>


          <p>{movieName}</p>
          <input id="TBMovieName" type="text" placeholder="Movie name" onChange={(e)=>this.setMoviename(e)}></input>
          <button type="button" onClick={()=>this.registerMovie()}>Registrar</button>
        </header>
      </div>
    );
  }
}

export default Home;
