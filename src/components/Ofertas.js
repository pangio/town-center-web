import NavLink from './NavLink'
import React, { Component } from 'react';

class Ofertas extends Component {
    constructor(props) {
    super(props);
      this.state = {
        sales: [],
    };

    this.fetchAllSales = this.fetchAllSales.bind(this)
  }

  componentWillMount() {
    console.log('fetching all Sales...')
    this.fetchAllSales()
  }

  fetchAllSales() {
    return fetch('http://localhost:8000/api/ofertas')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ sales: responseJson.data })
        console.log(responseJson)
        return responseJson.data
      })
      .catch((error) => {
        console.error(error)
      });
  }

  render() {
    return (
      <div className='center page-container'>
        <h2 className='background'><span>¡Las Mejores Ofertas!</span></h2>

        <img className="img-responsive" alt=''
            src='https://s3.amazonaws.com/towncenterweb/assets/header-ofertas.png' />
      </div>
    )
  }
}

export default Ofertas;
