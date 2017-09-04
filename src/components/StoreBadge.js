import React from 'react';

class StoreBadge extends React.Component {
  render() {
	const s3url = 'https://s3.amazonaws.com/towncenterweb/tiendas/'
	const assetsurl = 'https://s3.amazonaws.com/towncenterweb/assets/'
    const style = {
	  padding: 1
	}
    return (
		<div className='store-badge badge'>
			<img className='img-responsive col-xs-4 store-badge-img' alt=''
				style={style}
				src={s3url + this.props.store.image_url} />
			<div className='col-xs-7 store-sm-txt'>
				<p><strong>{this.props.store.name}</strong></p>
				<p>{this.props.store.hours}</p>
				<br />
	    	</div>

			<div className='col-xs-12 center padding-v badge-location'>
		        <img alt='' src={assetsurl + 'ic_geo.png'} />
		        <span className='lightgray'>{this.props.store.level} - {this.props.store.local}</span>
	    	</div>

    	</div>
    )
  }
}

export default StoreBadge