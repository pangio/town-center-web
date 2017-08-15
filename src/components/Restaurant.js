import React, { Component } from 'react';

class Restaurant extends Component {
  render() {
    return (
        <h2>Bienvenida al Restaurant {this.props.params.id} !!!</h2>
    );
  }
}

export default Restaurant;
