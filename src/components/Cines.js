import NavLink from './NavLink'
import React, { Component } from 'react';

class Cines extends Component {
    constructor(props) {
    super(props);
      this.state = {
        cinemas: [],
    };

    this.fetchAllCinemas = this.fetchAllCinemas.bind(this)
  }

  componentWillMount() {
    console.log('fetching all Cinemas...')
    this.fetchAllCinemas()
  }

  fetchAllCinemas() {
    return fetch('http://localhost:8000/api/cines')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ cinemas: responseJson.data })
        console.log(responseJson)
        return responseJson.data
      })
      .catch((error) => {
        console.error(error)
      });
  }

  render() {
    return (
      <div className="">
        <h2>Cines - web</h2>

        { this.props.children }

        <ul>
        {
          this.state.cinemas.length > 0 &&
          this.state.cinemas.map(function(cinema, i) {
            return (
              <li key={i}>
                <NavLink to={`/cines/${i}`}>{cinema.name}</NavLink>
              </li>
            )
          })
        }
        </ul>
      </div>
    );
  }
}

export default Cines;