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
      <div className="center">
        <h2>Ofertas</h2>

        { this.props.children }

        <ul>
        {
          this.state.sales.length > 0 &&
          this.state.sales.map(function(sale, i) {
            return (
              <li key={i}>
                <NavLink to={`/ofertas/${i}`}>{sale.name}</NavLink>
              </li>
            )
          })
        }
        </ul>
      </div>
    );
  }
}

export default Ofertas;
