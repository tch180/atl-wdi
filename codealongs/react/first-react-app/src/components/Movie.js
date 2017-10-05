
import React, { Component } from 'react'
import ReviewList from './ReviewList'
class Movie extends Component {
    render() {
        return(
<div>
            <h1>{this.props.title}</h1>

            <h2>{ this.props.rating }</h2>
            <p>{ this.props.description } </p>
              <ReviewList />
          </div>
        )
    }
}

export default Movie