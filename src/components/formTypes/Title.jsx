import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { id, value, labelText, onChange } = this.props;
    return (
      <label htmlFor={ id } data-testid={ `${id}-input-label` }>
        <input
          id={ id }
          name={ id }
          type="text"
          value={ value }
          onChange={ onChange }
          data-testid={ `${id}-input` }
        />
        { labelText }
      </label>
    );
  }
}

Title.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  labelText: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Title;
