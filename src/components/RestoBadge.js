import React from 'react';

class RestoBadge extends React.Component {
  render() {
	const s3url = 'https://s3.amazonaws.com/towncenterweb/restaurantes/'
	const assetsurl = 'https://s3.amazonaws.com/towncenterweb/assets/'
    const padding1 = { padding: 1 }
    const margin0 = { margin:0 }
    return (
		<div className='badge resto-badge'>
			<div className='row' style={margin0}>
				<img className='img-responsive col-xs-12 resto-badge-img' alt=''
					style={padding1}
					src={s3url + this.props.resto.image_url} />
	    	</div>
			<div className='row' style={margin0}>
				<div className='col-xs-12 store-sm-txt'>
					<p><strong>{this.props.resto.name}</strong></p>
					<p>{this.props.resto.hours}</p>
					<br />
		    	</div>
	    	</div>

			<div className='row' style={margin0}>
				<div className='col-xs-12 center padding-v badge-location'>
			        <img alt='' src={assetsurl + 'ic_geo.png'} />
			        <span className='lightgray'>{this.props.resto.level} - {this.props.resto.local}</span>
		    	</div>
	    	</div>
    	</div>
    )
  }
}

export default RestoBadge
