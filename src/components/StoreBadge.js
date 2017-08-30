import React from 'react';
// name
// description
// url
// hours
// level
// local
class StoreBadge extends React.Component {
  render() {
    return (
		<div className='tienda-box badge col-xs-6'>
			<div className='row'>
				<div>
			        <img className='store-sm-img img-responsive col-xs-4' alt=''
	                    src={require('../assets/tiendas/ic_puma.png')} />
		        </div>
				<div className='col-xs-7 store-sm-txt'>
		        	<p><strong>{this.props.store.name}</strong></p>
		        	<p>{this.props.store.hours}</p>
		        	<p>{this.props.store.level} - {this.props.store.local}</p>
		        	<br />
		    	</div>
	    	</div>
    	</div>
    )
  }
}

export default StoreBadge