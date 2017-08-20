import React from 'react';
import NavLink from '../NavLink'
import '../../index.css';

class WebNavBar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <ul className="nav navbar-nav" role="nav">
              <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
              <li><NavLink to="/tiendas">Tiendas</NavLink></li>
              <li><NavLink to="/restaurantes">Restaurantes</NavLink></li>
              <li><NavLink to="/cines">Cines</NavLink></li>
              <li><NavLink to="/ofertas">Ofertas</NavLink></li>
              <li><NavLink to="/hospitales">Hospitales</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/servicios">Servicios</NavLink></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default WebNavBar
