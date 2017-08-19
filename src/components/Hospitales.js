import NavLink from './NavLink'
import React, { Component } from 'react';

class Hospitales extends Component {
    constructor(props) {
    super(props);
      this.state = {
        hospitals: [],
    };

    this.fetchAllHospitals = this.fetchAllHospitals.bind(this)
  }

  componentWillMount() {
    console.log('fetching all Hospitals...')
    this.fetchAllHospitals()
  }

  fetchAllHospitals() {
    return fetch('http://localhost:8000/api/hospitales')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ hospitals: responseJson.data })
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
        <h2>Hospitales</h2>

        { this.props.children }

        <ul>
        {
          this.state.hospitals.length > 0 &&
          this.state.hospitals.map(function(hospital, i) {
            return (
              <li key={i}>
                <NavLink to={`/hospitales/${i}`}>{hospital.name}</NavLink>
              </li>
            )
          })
        }
        </ul>
      </div>
    );
  }
}

export default Hospitales;
