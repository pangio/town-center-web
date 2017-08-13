import React, { Component } from 'react';
import { Grid, Navbar } from 'react-bootstrap';
import logo from './logo.svg';
import Stores from './components/Store';
import Offers from './components/Offer';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
        stores: [],
        offers: []
    };

    this.fetchAllStores = this.fetchAllStores.bind(this)
    this.fetchAllOffers = this.fetchAllOffers.bind(this)
  }

  componentWillMount() {
    this.fetchAllStores()
    this.fetchAllOffers()
  }

  fetchAllStores = () => {
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

  fetchAllOffers = () => {
    return fetch('http://localhost:8000/api/ofertas')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ offers: responseJson.data })
        console.log(responseJson)
        return responseJson.data
      })
      .catch((error) => {
        console.error(error)
      });
  }

  render() {
    return (
      <div className="App">
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Home </a>
                <a href="/tiendas">Tiendas </a>
                <a href="/ofertas">Ofertas </a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
        </p>

        {
          this.state.stores.length > 0 &&
          <Stores stores={this.state.stores}/>
        }
        {
          this.state.offers.length > 0 &&
          <Offers offers={this.state.offers}/>
        }
      </div>
    );
  }
}

export default App;
