import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovieComponent from './addMovieComponent';
import AddRating from './AddRating';
import Select from './addSelect';
import Subtitle from './SubTitle';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handle = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubtitle = (event) => {
    const { value } = event.target;
    this.setState({
      subtitle: value,
    });
  }

  handleButton = () => {
    const { onClick } = this.props;
    const keys = Object.keys(this.state);
    keys.forEach((element) => {
      if (element === 'rating') {
        this.setState({
          rating: 0,
        });
        onClick(this.state);
      } else {
        this.setState({
          [element]: '',
        });
        onClick(this.state);
      }
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <AddMovieComponent
          name="title"
          value={ title }
          dataTestidlabel="title-input-label"
          dataTestidInput="title-input"
          onChange={ this.handle }
          text="Título"
        />
        <Subtitle value={ subtitle } onChange={ this.handleSubtitle } />
        <AddMovieComponent
          name="imagePath"
          value={ imagePath }
          dataTestidlabel="image-input-label"
          dataTestidInput="image-input"
          onChange={ this.handle }
          text="Imagem"
        />
        <AddMovieComponent
          name="storyline"
          value={ storyline }
          dataTestidlabel="storyline-input-label"
          dataTestidInput="storyline-input"
          onChange={ this.handle }
          text="Sinopse"
        />
        <AddRating value={ rating } onChange={ this.handle } />
        <Select value={ genre } onChange={ this.handle } />
        <button
          type="button"
          onClick={ () => {
            this.handleButton();
          } }
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
