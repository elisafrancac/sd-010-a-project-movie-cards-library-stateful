import React from 'react';

export default class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      // subtitle: '',
      // title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  render() {
    // const { onClick } = this.props;
    return (
      <section>
        <form data-testid="add-movie-form" />
      </section>
    );
  }
}
