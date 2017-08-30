import React, { Component } from 'react';

class Tienda extends Component {
  render() {
    return (
        <h2>Tienda {this.props.params.id}</h2>
    );
  }
}

export default Tienda;
