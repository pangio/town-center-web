import NavLink from './NavLink'
import React, { Component } from 'react';

class Servicios extends Component {
    constructor(props) {
    super(props);
      this.state = {
        services: [],
    };

    this.fetchAllServices = this.fetchAllServices.bind(this)
  }

  componentWillMount() {
    console.log('fetching all Services...')
    this.fetchAllServices()
  }

  fetchAllServices() {
    return fetch('http://localhost:8000/api/servicios')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ services: responseJson.data })
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
        <h2>Servicios</h2>

        { this.props.children }

        <ul>
        {
          this.state.services.length > 0 &&
          this.state.services.map(function(service, i) {
            return (
              <li key={i}>
                <NavLink to={`/servicios/${i}`}>{service.name}</NavLink>
              </li>
            )
          })
        }
        </ul>
      </div>
    );
  }
}

export default Servicios;
