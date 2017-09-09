import React from 'react'
import '../../main.css'
import Img from 'react-image'

class ImgCache extends React.Component {
  render() {
    return (<Img className={this.props.classNames} alt=''
        src={this.props.path} />
    )
  }
}

export default ImgCache
