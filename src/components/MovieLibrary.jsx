import React from 'react';
import Proptypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addMovie = this.addMovie.bind(this);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onSearchTextChange({ target }) {
    this.setState({
      searchText: target.value,
    });
  }

  onBookmarkedChange({ target }) {
    this.setState({
      bookmarkedOnly: target.checked,
    });
  }

  onSelectedGenreChange({ target }) {
    this.setState({
      selectedGenre: target.value,
    });
  }

  addMovie(movie) {
    const { movies } = this.state;

    this.setState({
      movies: [...movies, movie],
    });
  }

  render() {
    let { movies } = this.state;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const filterBookmarkedOnly = movies.filter((movie) => movie.bookmarked === true);
    const filterSelectedGenre = movies.filter((movie) => movie.genre === selectedGenre);
    const filterText = movies.filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText));

    if (bookmarkedOnly) movies = filterBookmarkedOnly;
    if (selectedGenre) movies = filterSelectedGenre;
    if (searchText) movies = filterText;

    return (
      <>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          movies={ movies }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovie } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: Proptypes.arrayOf(Proptypes.object).isRequired,
};

export default MovieLibrary;
