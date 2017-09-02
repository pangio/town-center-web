import React from 'react';

class StoreBadge extends React.Component {
  render() {
	const s3url = 'https://s3.amazonaws.com/towncenterweb/tiendas/'
    return (
		<div className='tienda-box badge'>
			<div className='row'>
				<div>
			        <img className='store-sm-img img-responsive col-xs-4' alt=''
						src={s3url + this.props.store.image_url} />
		        </div>
				<div className='col-xs-7 store-sm-txt'>
		        	<p><strong>{this.props.store.name}</strong></p>
		        	<p>{this.props.store.hours}</p>
		        	<p>{this.props.store.type}</p>
		        	<p>{this.props.store.level} - {this.props.store.local}</p>
		        	<br />
		    	</div>
	    	</div>
    	</div>
    )
  }
}

export default StoreBadge