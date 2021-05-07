import React from 'react';
import PropTypes from 'prop-types';

class InputSelect extends React.Component {
  render() {
    const {
      selectedGenre,
      onSelectedGenreChange,
      textLabel,
      datatestid,
      datatestidLabel,
      datatestidOption,
    } = this.props;

    return (
      <label htmlFor="search-input" data-testid={ datatestidLabel }>
        { textLabel }
        <select
          name={ selectedGenre }
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          data-testid={ datatestid }
        >
          <option value="" data-testid={ datatestidOption }>Todos</option>
          <option value="action" data-testid={ datatestidOption }>Ação</option>
          <option value="comedy" data-testid={ datatestidOption }>Comédia</option>
          <option value="thriller" data-testid={ datatestidOption }>Suspense</option>
        </select>
      </label>
    );
  }
}

InputSelect.propTypes = {
  textLabel: PropTypes.string.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
  datatestid: PropTypes.string.isRequired,
  datatestidLabel: PropTypes.string.isRequired,
  datatestidOption: PropTypes.string.isRequired,
};

export default InputSelect;
