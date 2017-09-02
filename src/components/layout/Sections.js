import React from 'react';
import NavLink from '../NavLink'
import '../../main.css';

class Sections extends React.Component {
  render() {
    const s3url = 'https://s3.amazonaws.com/towncenterweb/assets/'

    return (
        <div className="sections-container">
            <h2 className='background'><span>Experiencia Towncenter</span></h2>
            <div className="sections-boxes">
                <div className="row center">
                    <NavLink to="/tiendas" >
                        <img className="img-responsive col-xs-3 sections-img" alt=''
                            src={s3url + 'btn_compras.png'} />
                    </NavLink>
                    <NavLink to="/" >
                        <img className="img-responsive col-xs-3 sections-img" alt=''
                          src={s3url + 'btn_eventos.png'} />
                    </NavLink>
                    <NavLink to="/restaurantes" >
                        <img className="img-responsive col-xs-3 sections-img" alt=''
                            src={s3url + 'btn_quieroiracomer.png'} />
                    </NavLink>
                    <NavLink to="/cines" >
                        <img className="img-responsive col-xs-3 sections-img" alt=''
                            src={s3url + 'btn_vamosacine.png'} />
                    </NavLink>
                </div>
            </div>
        </div>
    )
  }
}

export default Sections
