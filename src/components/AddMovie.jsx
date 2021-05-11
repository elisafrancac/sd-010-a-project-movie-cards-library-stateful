import React from 'react';
// implement AddMovie component here

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    // const { title } = this.state;

    this.state = {
      // subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  handleChange({ target }) {
    this.setState({
      title: target.value,
    });
  }
  
  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="text" data-testid="title-input-label">
            Título
            <input
              type="text"
              data-testid="title-input"
              value={ this.state.title }
              onChange={ this.handleChange }
            />
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;
