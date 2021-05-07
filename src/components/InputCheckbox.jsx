import React from 'react';

class InputCheckbox extends React.Component {
  render() {
    const { bookmarkedOnly,
      onBookmarkedChange,
      textLabel,
      datatestid,
      datatestidLabel } = this.props;
    return (
      <label htmlFor="search-input" data-testid={ datatestidLabel }>
        { textLabel }
        <input
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid={ datatestid }
        />
      </label>
    );
  }
}

export default InputCheckbox;
