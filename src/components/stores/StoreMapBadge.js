import React from 'react';

class StoreMapBadge extends React.Component {
  render() {
	const s3url = 'https://s3.amazonaws.com/towncenterweb/tiendas/'
	const assetsurl = 'https://s3.amazonaws.com/towncenterweb/assets/'
    const padding1 = { padding: 1 }
    const margin0 = { margin:0 }
    return (
	<div className='row'>
	<div className='col-xs-12'>
		<div className='badge resto-map-badge col-xs-6 float-none'>
			<div style={margin0}>
				<img className='img-responsive col-xs-6 padding' alt=''
					src={s3url + this.props.store.image_url} />
	    	</div>
			<div>
				<div className='col-xs-5 store-sm-txt padding'>
					<strong>{this.props.store.name}</strong>
		    	</div>
	    	</div>

			<div className='row' style={margin0}>
				<div className='col-xs-12 padding-v badge-location'>
			        <img className='badge-location-img' alt='' src={assetsurl + 'ic_geo.png'} />
			        <span className='lightgray'>Abierto {this.props.store.hours}</span>
		    	</div>
	    	</div>

			<div className='row' style={margin0}>
				<div className='col-xs-12 padding-v badge-location'>
			        <img className='badge-location-img' alt='' src={assetsurl + 'ic_geo.png'} />
			        <span className='lightgray'>Acerca de</span>
		    	</div>
	    	</div>

			<div className='row' style={margin0}>
				<div className='col-xs-12 padding-v badge-location'>
			        <img className='badge-location-img' alt='' src={assetsurl + 'ic_geo.png'} />
			        <span className='lightgray'>{this.props.store.level} - {this.props.store.local}</span>
		    	</div>
	    	</div>
    	</div>

		<div className='badge resto-badge col-xs-6 float-none'>
				<img className='img-responsive col-xs-12 resto-map-img' alt=''
					style={padding1}
					src='https://s3.amazonaws.com/towncenterweb/tiendas/map/map_example.png' />
    	</div>
	</div>
	</div>
    )
  }
}

export default StoreMapBadge
