// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      // bookmarkedOnly,
      // onBookmarkedChange,
      // selectedGenre,
      // onSelectedGenreChange,
    } = this.props;

    // console.log(); // TESTE para conferência
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-input-label" data-testid="text-input-labe">
          Inclui o texto:
          <input
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;

export default SearchBar;
