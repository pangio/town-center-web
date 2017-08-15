import React, { Component } from 'react';

class Hospital extends Component {
  render() {
    return (
        <h2>Bienvenido al Hospital {this.props.params.id}</h2>
    );
  }
}

export default Hospital;
