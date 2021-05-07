import React from 'react';

export default class Genre extends React.Component {
  render() {
    const {genre, changeHandler} = this.props;
    return (
      <div>
        <label
          htmlFor="title" 
          data-testid="title-input-label"
        >
          Título
        </label>
        <input
          name="title" 
          id="title" 
          data-testid="title-input" 
          value={ title } 
          onChange={ this.changeHandler } />
      </div>
    )
  }
}