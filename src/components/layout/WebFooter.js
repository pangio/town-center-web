import React from 'react';
import NavLink from '../NavLink'
import '../../main.css';

class WebFooter extends React.Component {
  render() {
    return (
      <div className="center footer-color padding">
        <ul>
          <p><NavLink to="/" onlyActiveOnIndex>Home</NavLink></p>
          <p><NavLink to="/tiendas">Tiendas</NavLink></p>
          <p><NavLink to="/restaurantes">Restaurantes</NavLink></p>
          <p><NavLink to="/ofertas">Ofertas</NavLink></p>
          <p><NavLink to="/cines">Cines</NavLink></p>
          <p><NavLink to="/hospital">Hospital</NavLink></p>
          <p><NavLink to="/hotel">Hotel</NavLink></p>
          <p><NavLink to="/servicios">Servicios</NavLink></p>
        </ul>
      </div>
    )
  }
}

export default WebFooter
