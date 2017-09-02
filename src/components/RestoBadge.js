import React from 'react';

class RestoBadge extends React.Component {
  render() {
	const s3url = 'https://s3.amazonaws.com/towncenterweb/restaurantes/'
    return (
		<div className='tienda-box badge'>
			<div className='row'>
				<div>
					<img className='store-sm-img img-responsive col-xs-4' alt=''
						src={s3url + this.props.resto.image_url} />
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
