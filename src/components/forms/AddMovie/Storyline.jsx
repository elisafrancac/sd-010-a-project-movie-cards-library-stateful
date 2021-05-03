import React from 'react';
import PropTypes from 'prop-types';

function Title({ value, onChange }) {
  return (
    <label htmlFor="storyline" data-testid="storyline-input-label">
      Sinopse
      <textarea
        type="text"
        name="storyline"
        value={ value }
        data-testid="storyline-input"
        onChange={ onChange }
      />
    </label>
  );
}

Title.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Title;
