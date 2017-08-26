import React from 'react';
import NavLink from '../NavLink'
import '../../main.css';

class Sections extends React.Component {
  render() {
    return (
        <div className="sections-container">
        <div className="sections-boxes">
            <span className="sections-heading">EXPERIENCIA TOWNCENTER</span>
            <div className="row center">
                <NavLink to="/tiendas" >
                    <img className="img-responsive col-xs-3 sections-img" alt=''
                        src={require('../../assets/home/btn_compras.png')} />
                </NavLink>
                <NavLink to="/servicios" >
                    <img className="img-responsive col-xs-3 sections-img" alt=''
                        src={require('../../assets/home/btn_eventos.png')} />
                </NavLink>
                <NavLink to="/restaurantes" >
                    <img className="img-responsive col-xs-3 sections-img" alt=''
                        src={require('../../assets/home/btn_quieroiracomer.png')} />
                </NavLink>
                <NavLink to="/cines" >
                    <img className="img-responsive col-xs-3 sections-img" alt=''
                        src={require('../../assets/home/btn_vamosacine.png')} />
                </NavLink>
            </div>
        </div>

        <br/><br/>
        <div className='row center'>
            <NavLink to="/" >
                <img className="img-responsive donde-img" alt=''
                    src={require('../../assets/home/img_donde.png')} />
            </NavLink>
        </div>
        </div>
    )
  }
}

export default Sections
