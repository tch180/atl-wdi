import React, {Component} from 'react';
//import Movie from './components/Movie';
class Search extends Component {
  constructor(props) {
    super(props)

   this.state = {
      id: '',
      title: ''
    }
  }

 handleIdChange = (event) => {
    this.setState({
      id: event.target.value
    })
  }
  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value
    })
  }

 render() {
    return (
      <section id="movie-search">
        <strong>Search by:</strong> Title <em>or</em> ID
  
       <div className="search">
          <form onSubmit={this.props.searchByTitle} id="title-search-form" method="get">
            <input  type="text" name="title" placeholder="Enter movie title" />
            <input type="submit" value="Search for this title" />
          </form>
        </div>
  
       <div className="search">
          <form id="id-search-form" method="get">
            <input onChange={this.handleIdChange} type="text" name="id" placeholder="Enter omdb movie ID" />
            <input onSubmit={this.props.searchById} type="submit" value="Search by ID" />
          </form>
        </div>
  
     </section>
    );
  }
};

export default Search;