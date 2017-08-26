import React, { Component } from 'react';
// import NavLink from '../NavLink'

class Hospital extends Component {
  render() {
    return (
    	<div>
	        <img className="img-responsive" alt=''
	            src={require('../assets/hospital/header.png')} />
	    	<div className='padding'>
	    		<p className='center'>
	    			La comunidad de Costa del Este y sus alrededores podrán sentir la seguridad en
	    			 la cercanía de Pacífica Salud: Hospital Costa del Este y Consultorios; 
	    			 teniendo la ventaja de formar parte de un proyecto dinámico con el ambiente 
	    			 ideal para el paciente.
	    		</p>
    		</div>
    		<div className='hospital-section'>
	    		<p>
	    			<strong>Espacios para Consultorios Médicos y Clínicas desde 30m2.</strong>
	    		</p>
	    		<p>
	    			Amplias salas de espera por cada nivel.
	    		</p>
	    		<p>
	    			Tres elevadores de alta velocidad y uno de carga por cada torre médica.
	    		</p>
	    		<p>
	    			Sala de emergencia, cuidados intensivos y servicios de laboratorios entre otros.
	    		</p>
    		</div>
    		<div className='hospital-section'>
	    		<p>
	    			<strong>Para su comodidad:</strong>
	    		</p>
	    		<p>
	    			Opción de administración legal.
	    		</p>
	    		<p>
	    			Compra por leasing *.
	    		</p>
	        </div>
        </div>
    );
  }
}

export default Hospital;
