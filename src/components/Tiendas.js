import React, { Component } from 'react'
import StoreList from './StoreList'
import _ from 'underscore'

class Tiendas extends Component {
    constructor(props) {
    super(props)
      this.state = {
        stores: [],
    }
    this.fetchAllStores = this.fetchAllStores.bind(this)
  }

  componentWillMount() {
    console.log('fetching all Stores...')
    this.fetchAllStores()
  }

  fetchAllStores() {
    fetch('http://localhost:8000/api/tiendas')
      .then(response => response.json())
      .then(response => {
        this.setState({ stores: JSON.parse(response.data) })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  isLoaded() {
    return this.state.stores !== []
  }

  render() {
    // <StoreList storeList={_.take(this.state.stores, 10)} />
    return (
      <div className='center page-container'>
        <h2 className='background'><span>¡Compras!</span></h2>

        <img className="img-responsive" alt=''
            src={require('../assets/tiendas/header.png')} />

        { this.props.children }
    		{
          this.isLoaded() &&
          <StoreList storeList={_.filter(this.state.stores, function(s) {
            return s.type === 'store'
          })} />
        }
      </div>
    )
  }
}

export default Tiendas
