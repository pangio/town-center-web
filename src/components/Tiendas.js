import NavLink from './NavLink'
import React, { Component } from 'react';

class Tiendas extends Component {
    constructor(props) {
    super(props);
      this.state = {
        stores: [],
    };

    this.fetchAllStores = this.fetchAllStores.bind(this)
  }

  componentWillMount() {
    console.log('fetching all Stores...')
    this.fetchAllStores()
  }

  fetchAllStores() {
    return fetch('http://localhost:8000/api/tiendas')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ stores: responseJson.data })
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
        <img className="img-responsive" alt=''
            src={require('../assets/tiendas/header.png')} />

        { this.props.children }
        <ul>
		{
		  this.state.stores.length > 0 &&
		  this.state.stores.map(function(store, i) {
            return (
            	<li key={i}>
	              <NavLink to={`/tiendas/${i}`}>{store.name}</NavLink>
              </li>
            )
          })
        }
        </ul>
      </div>
    );
  }
}

export default Tiendas;
