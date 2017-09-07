import React, { Component } from 'react';
import SalesList from './SalesList'
import _ from 'underscore'

class Ofertas extends Component {
    constructor(props) {
    super(props)
      this.state = {
        sales: [],
    }
    this.fetchAllSales = this.fetchAllSales.bind(this)
  }

  componentWillMount() {
    console.log('fetching all Sales...')
    this.fetchAllSales()
  }

  fetchAllSales() {
    // fetch('http://localhost:8000/api/ofertas')
    fetch('http://192.168.0.9:8000/api/ofertas')
      .then(response => response.json())
      .then(response => {
        this.setState({ sales: JSON.parse(response.data) })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  isLoaded() {
    return this.state.sales !== []
  }

  render() {
    return (
      <div className='center page-container'>
        <h2 className='background'><span>¡Las Mejores Ofertas!</span></h2>
        <img className="img-responsive" alt=''
            src='https://s3.amazonaws.com/towncenterweb/assets/header-ofertas.png' />

        { this.props.children }
        {
          this.isLoaded() &&
          <SalesList salesList={_.filter(this.state.sales, function(s) {
            // return s
            return s.image_url !== undefined
          })} />
        }
      </div>
    )
  }
}

export default Ofertas;
