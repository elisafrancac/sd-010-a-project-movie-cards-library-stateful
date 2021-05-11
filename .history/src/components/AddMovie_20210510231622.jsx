import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
    this.hendleChange = this.hendleChange.bind(this);
  }

  hendleChange({ target }) {
    const { id, value } = target;
    console.log(this);
    this.setState({
      [id]: value,
    });
  }

  render() {
    const { title } = this.state;
    return (
      <form>
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            type="text"
            id="title"
            data-testid="title-input"
            value={ title }
            onChange={ this.hendleChange }
          />
        </label>
      </form>
    );
  }
}
// AddMovie.propTypes = {
// title: PropTypes.string.isRequired,
// };
export default AddMovie;
