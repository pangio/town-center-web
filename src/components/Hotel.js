import React, { Component } from 'react';
// import NavLink from '../NavLink'

class Hotel extends Component {
  render() {
    return (
		<div className="center">
	        <img className="img-responsive" alt=''
	            src={require('../assets/hotel/header.png')} />

	        { this.props.children }

	    	<div className='padding'>
	    		<p className=''>250 llaves de la cadena de hoteles Bern 
	    		donde podrán hospedarse sus familiares, ejecutivos o turistas
	    		que visiten Panamá</p>
	        </div>
	    	<div className='padding'>
				<button type="button" className='btn btn-lg more-info-btn'>Más información</button>
	        </div>
        </div>
    );
  }
}

export default Hotel;
