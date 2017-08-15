import React, { Component } from 'react';

class Oferta extends Component {
  render() {
    return (
        <h2>Imperdible Oferta {this.props.params.id}</h2>
    );
  }
}

export default Oferta;
