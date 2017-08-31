import React from 'react';

class RestoBadge extends React.Component {
  render() {
    return (
		<div className='tienda-box badge'>
			<div className='row'>
				<div>
					<img className='store-sm-img img-responsive col-xs-4' alt=''
						src={require('../assets/tiendas/ic_puma.png')} />
		        </div>
				<div className='col-xs-7 store-sm-txt'>
					<p><strong>{this.props.resto.name}</strong></p>
					<p>{this.props.resto.hours}</p>
					<p>{this.props.resto.type}</p>
					<p>{this.props.resto.level} - {this.props.resto.local}</p>
					<br />
		    	</div>
	    	</div>
    	</div>
    )
  }
}

export default RestoBadge
