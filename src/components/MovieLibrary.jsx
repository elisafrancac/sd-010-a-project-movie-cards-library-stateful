import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor({ movies }) {
    super();
    this.filter = this.filter.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  filter() {
    const { movies, selectedGenre, bookmarkedOnly, searchText } = this.state;
    const filterByGender = movies
      .filter((movie) => movie.genre === selectedGenre);

    const filterBySearchText = movies.filter(
      (movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText),
    );

    if (filterByGender.length > 0) return filterByGender;
    if (bookmarkedOnly === true) {
      return movies
        .filter((movie) => movie.bookmarked === bookmarkedOnly);
    }
    if (filterBySearchText.length > 0) return filterBySearchText;
    return movies;
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={this.props.movies} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
