import React, { Component } from 'react'
import Movie from './Movie'

class MoviesList extends Component {
  render(){
    const movies = [
      {title: "Blade Runner 2049", rating: "R", description: "This is supposed to be good"},
      {title: 'A Movie', rating: 'PG-13', description: 'this is a movie'},
      {title: 'Another Movie', rating: 'R', description: 'this is another movie'},
      {title: 'A Third Movie', rating: 'PG', description: 'this is yet another movie'}
    ]

    const movieComponents = movies.map((movie) => {
      return <Movie title={movie.title} rating={movie.rating} description={movie.description}/>
    })
    
    return (
      <div>
        { movieComponents }
      </div>
    )
  }
}

export default MoviesList