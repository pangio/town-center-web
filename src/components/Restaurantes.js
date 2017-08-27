import NavLink from './NavLink'
import React, { Component } from 'react';

class Restaurantes extends Component {
    constructor(props) {
    super(props);
      this.state = {
        restaurants: [],
    };

    this.fetchAllRestaurants = this.fetchAllRestaurants.bind(this)
  }

  componentWillMount() {
    console.log('fetching all Restaurants...')
    this.fetchAllRestaurants()
  }

  fetchAllRestaurants() {
    return fetch('http://localhost:8000/api/restaurantes')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ restaurants: responseJson.data })
        console.log(responseJson)
        return responseJson.data
      })
      .catch((error) => {
        console.error(error)
      });
  }

  render() {
    return (
      <div className="center">
        <img className="img-responsive" alt=''
            src={require('../assets/resto/header.png')} />

        { this.props.children }
        <ul>
        {
          this.state.restaurants.length > 0 &&
          this.state.restaurants.map(function(restaurant, i) {
            return (
              <li key={i}>
                <NavLink to={`/restaurantes/${i}`}>{restaurant.name}</NavLink>
              </li>
            )
          })
        }
        </ul>
      </div>
    );
  }
}

export default Restaurantes;
