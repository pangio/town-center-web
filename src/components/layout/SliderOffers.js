import React from 'react';
import NavLink from '../NavLink'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '../../main.css';

class SliderOffers extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        settings: {
          autoplay: true,
          arrows: true,
          centerMode: true,
          // dots: true,
          infinite: true,
          pauseOnHover: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          speed: 500,
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
                    <NavLink to="/ofertas/1" >
                        <img className="img-responsive slider-offer-img" alt=''
                            src={require('../../assets/ofertas/280x380_01.png')} />
                    </NavLink>
                </div>
                <div className="center">
                    <NavLink to="/ofertas/2" >
                        <img className="img-responsive slider-offer-img" alt=''
                            src={require('../../assets/ofertas/280x380_02.png')} />
                    </NavLink>
                </div>
                <div className="center">
                    <NavLink to="/ofertas/3" >
                        <img className="img-responsive slider-offer-img" alt=''
                            src={require('../../assets/ofertas/280x380_03.png')} />
                    </NavLink>
                </div>
                <div className="center">
                    <NavLink to="/ofertas/4" >
                        <img className="img-responsive slider-offer-img" alt=''
                            src={require('../../assets/ofertas/280x380_04.png')} />
                    </NavLink>
                </div>
                <div className="center">
                    <NavLink to="/ofertas/5" >
                        <img className="img-responsive slider-offer-img" alt=''
                            src={require('../../assets/ofertas/280x380_05.png')} />
                    </NavLink>
                </div>
                <div className="center">
                    <NavLink to="/ofertas/6" >
                        <img className="img-responsive slider-offer-img" alt=''
                            src={require('../../assets/ofertas/280x380_06.png')} />
                    </NavLink>
                </div>
            </Slider>
      </div>
    )
  }
}

export default SliderOffers
