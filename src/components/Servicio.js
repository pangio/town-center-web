import React, { Component } from 'react';

class Servicio extends Component {
  render() {
    return (
        <h2>Servicio: {this.props.params.id}</h2>
    );
  }
}

export default Servicio;
