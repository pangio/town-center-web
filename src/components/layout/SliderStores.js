import React from 'react';
import NavLink from '../NavLink'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '../../main.css';

class SliderStores extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        settings: {
          arrows: true,
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        },
    }
  }

  componentWillMount() {
  }
  render() {
    return (
        <div>
            <Slider {...this.state.settings}>
                <div className="center">
                    <NavLink to="/tiendas/1" >
                        <img className="store-slider-img" alt=''
                            src={require('../../assets/tiendas/store_01.png')} />
                    </NavLink>
                </div>
                <div className="center">
                    <NavLink to="/tiendas/2" >
                        <img className="store-slider-img" alt=''
                            src={require('../../assets/tiendas/store_02.png')} />
                    </NavLink>
                </div>
                <div className="center">
                    <NavLink to="/tiendas/3" >
                        <img className="store-slider-img" alt=''
                            src={require('../../assets/tiendas/store_03.png')} />
                    </NavLink>
                </div>
                <div className="center">
                    <NavLink to="/tiendas/4" >
                        <img className="store-slider-img" alt=''
                            src={require('../../assets/tiendas/store_04.png')} />
                    </NavLink>
                </div>
                <div className="center">
                    <NavLink to="/tiendas/5" >
                        <img className="store-slider-img" alt=''
                            src={require('../../assets/tiendas/store_05.png')} />
                    </NavLink>
                </div>
                <div className="center">
                    <NavLink to="/tiendas/6" >
                        <img className="store-slider-img" alt=''
                            src={require('../../assets/tiendas/store_06.png')} />
                    </NavLink>
                </div>
            </Slider>
      </div>
    )
  }
}

export default SliderStores
