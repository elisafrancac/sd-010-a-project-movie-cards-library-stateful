import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieCard from './MovieCard';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    console.log(this.state);
  }

  onClick = (newMovie) => {
    const { movies } = this.state;
    movies.push(newMovie);
    this.setState(
      movies,
    );
    //   () => ({
    //   movies,
    // }));
  }

  onSearchTextChange = ({ target }) => {
    this.setState({
      searchText: target.value,
    });
  }

  onBookmarkedChange = () => {
    this.setState({
      bookmarkedOnly: true,
    });
  }

  onSelectedGenreChange = ({ target }) => {
    this.setState({
      selectedGenre: target.value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    console.log(movies);
    return (
      <div>
        {movies.map((movie) => (
          <div key={ movie.title }>
            <MovieCard movie={ movie } />
          </div>
        ))}
        <h2>My awesome movie library</h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        {/* <MovieList movies={this.props.movies} /> */}
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  })).isRequired,
};

export default MovieLibrary;
