import React from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import movies from '../data'

class MovieLibrary extends React.Component {
  constructor () {
    super();
    
    this.onBookmarkedChanged = this.onBookmarkedChanged.bind(this)
    this.onSearchTextChange = this.onSearchTextChange.bind(this)
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this)

    this.state ={
      searchText: '',
      selectedGenre: '',
      bookmarkedOnly: false,
    }
  }

  onSearchTextChange() {

  }

  onBookmarkedChanged() {

  }

  onSelectedGenreChange() {

  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <form>
        <SearchBar 
        searchText={this.state.searchText}
        onSearchTextChange={this.onSearchTextChange}
        onBookmarkedChanged={this.onBookmarkedChanged}
        selectedGenre={this.state.selectedGenre}
        onSelectedGenreChange={this.onSelectedGenreChange}
        bookmarkedOnly={this.state.bookmarkedOnly}
        />
        <MovieList movies={movies} />
        <AddMovie />
        </form>
      </div>
    );
  }
}

export default MovieLibrary;