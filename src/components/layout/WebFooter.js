import React from 'react';
import NavLink from '../NavLink'
import '../../main.css';

class WebFooter extends React.Component {
  render() {
    return (
      <div className="center footer-color padding">
        <div className='row center'>
            <span className='footer-imgs'>
                <NavLink to="/" >
                    <img className="img-responsive donde-img" alt=''
                        src={require('../../assets/home/img_donde.png')} />
                </NavLink>
                <NavLink to="/" >
                    <img className="img-responsive donde-img" alt=''
                        src={require('../../assets/home/btn_estasconsuerte.png')} />
                </NavLink>
            </span>
        </div>
        <div className='row center'>
            <NavLink to="/" >
                <img className='footer-icon' alt=''
                    src='https://image.flaticon.com/icons/svg/124/124010.svg' />
            </NavLink>
            <NavLink to="/" >
                <img className='footer-icon' alt=''
                    src='https://image.flaticon.com/icons/svg/61/61164.svg' />
            </NavLink>
            <a className='footer-url' href="/"><strong>towncenter.com.pa</strong></a>
        </div>
      </div>
    )
  }
}

export default WebFooter
