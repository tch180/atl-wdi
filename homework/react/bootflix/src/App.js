import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';
//import example from './omdbExample.json'
import axios from 'axios'

class App extends Component {
  constructor(){
    super();
    this.state = {
      title: '',
      year: '',
      director: '',
      genre: '',
      plot: '',
      Rated: '',
    }
  }

  //Update these methods to make axios calls to OMDB and update this.state.movie with the response from the server
  searchByTitle = (event) => {
    event.preventDefault()
    console.log('search by title')
    const title = event.target.title.value
    axios.get(`http://www.omdbapi.com/?apikey=d31f1a94&t=${title}`, {
      }).then((res)=>{
      console.log(res)
      this.setState({
        id: res.data.imdbID,
        title: res.data.Title,
        year: res.data.Year,
        director: res.data.Director,
        genre: res.data.Genre,
        plot: res.data.Plot,
        Rated: res.data.Rated,
        Poster: res.data.Poster

      })
  
    }).catch((error)=>{
    console.log(error);
    
    })
  }

  searchById = (event) => {
    event.preventDefault()
   
    const id = event.target.id.value
    console.log(id)
     axios.get(`http://www.omdbapi.com/?apikey=d31f1a94&i=${id}`)
     .then((res) => {
              this.setState({
                id: res.data.imdbID, 
         title: res.data.Title,
         year: res.data.Year,
         director: res.data.Director,
         genre: res.data.Genre,
         plot: res.data.PlotFull,
         Rated: res.data.Rated,
         Poster: res.data.Poster
       })
        }).catch((error) => {
             console.log(error)
         })
   
    
  
  }

  //Pass _searchByTitle, _searchById, and this.state.movie to it's appropriate child components.
  render() {
    return (
      <div className="App">
        <Header />
        <Search searchByTitle={this.searchByTitle} searchById={this.searchById} />
        <Movie title={this.state.title} year={this.state.year} director={this.state.director} genre={this.state.genre} plot={this.state.plot} Rated={this.state.Rated} Poster={this.state.Poster} id={this.state.imdbID} />
      </div>
    );
  }
}

export default App;
