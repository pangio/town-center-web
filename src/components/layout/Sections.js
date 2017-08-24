import React from 'react';
import NavLink from '../NavLink'
import '../../main.css';

class Sections extends React.Component {
  render() {
    return (
    <div className="">
        <div className="center">
            <NavLink to="/tiendas" >
                <img className="slider-offer-img" alt=''
                    src={require('../../assets/home/btn_compras.png')} />
            </NavLink>
        </div>
        <div className="center">
            <NavLink to="/servicios" >
                <img className="slider-offer-img" alt=''
                    src={require('../../assets/home/btn_eventos.png')} />
            </NavLink>
        </div>
        <div className="center">
            <NavLink to="/restaurantes" >
                <img className="slider-offer-img" alt=''
                    src={require('../../assets/home/btn_quieroiracomer.png')} />
            </NavLink>
        </div>
        <div className="center">
            <NavLink to="/cines" >
                <img className="slider-offer-img" alt=''
                    src={require('../../assets/home/btn_vamosacine.png')} />
            </NavLink>
        </div>
    </div>
    )
  }
}

export default Sections
