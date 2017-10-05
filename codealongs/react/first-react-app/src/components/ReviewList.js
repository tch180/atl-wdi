import React, { Component } from 'react'
import Review from './Review'

class ReviewList extends Component {
  render(){
    const Reviews = [
      {quote: "it was okay"},
      {quote: "it was great "},
      {quote: "it was terrible, good action though, story line sucked"},
      {quote: " another movie just another pile about crap"},
      {quote: "This movie was great, I loved every minute of it and was on the edge of my seat the entire time "},
      {quote: "you know I am mad that I spent money to go see it in the theater, its defiently a at home movie, shouldve been sent straight to DVD."},
      {quote: "ilove this movie"},
    
    ]

    const ReviewComponents = Reviews.map((review) => {
      return <Review quote={review.quote} />
    })
  
    return (
      <div>
        { ReviewComponents }
      </div>
    )
  }
}

export default ReviewList 