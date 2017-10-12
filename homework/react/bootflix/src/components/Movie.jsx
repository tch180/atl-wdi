import React from 'react';
//import search from 'Search'

const Movie = (props) => {
  return (
    <section id="movie-listing">
      <div className="movie">
        <h3>Movie Title: {props.title} {props.id}</h3><hr />
        <p>
          <strong>Released:</strong> {props.year}<br />
          <strong>Directed By:</strong> {props.director}<br />
          <em><strong>Genre:</strong>{props.genre}</em><br/>
         <em><strong>Plot</strong>{props.plot}</em><br/>
         <em><strong>Rated </strong>{props.Rated}</em>
        </p>
     <em><strong>Movie Poster:</strong>{props.img}</em>
      </div>
    </section>
  );
};

export default Movie;