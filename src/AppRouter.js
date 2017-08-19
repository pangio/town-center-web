import React from 'react';
import NavLink from './components/NavLink'
import './index.css';

class AppRouter extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#"><NavLink to="/" onlyActiveOnIndex>Town Center</NavLink></a>
            </div>
            <ul className="nav navbar-nav" role="nav">
              <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
              <li><NavLink to="/cines">Cines</NavLink></li>
              <li><NavLink to="/hospitales">Hospitales</NavLink></li>
              <li><NavLink to="/ofertas">Ofertas</NavLink></li>
              <li><NavLink to="/restaurantes">Restaurantes</NavLink></li>
              <li><NavLink to="/servicios">Servicios</NavLink></li>
              <li><NavLink to="/tiendas">Tiendas</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
            </ul>
          </div>
        </nav>
        {this.props.children}
      </div>
    )
  }
}

export default AppRouter
