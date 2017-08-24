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
          slidesToShow: 3,
          slidesToScroll: 3
        },
        // imgs: {            
        //     img1: '../../assets/home/img_offer.png',
        //     img2: '../../assets/home/img_offer.png',
        //     img3: '../../assets/home/img_offer.png'
        // }
    }
  }

  componentWillMount() {
    // let img1 = '../../assets/home/img_offer.png'
    // let img2 = '../../assets/home/img_offer.png'
    // let img3 = '../../assets/home/img_offer.png'
    // let x = [img1, img2, img3]
    // this.setState({imgs, x})
  }
  render() {
    return (
        <div>
            <Slider {...this.state.settings}>
                <div className="center">
                    <NavLink to="/ofertas/1" >
                        <img className="offer-img" alt=''
                            src={require('../../assets/ofertas/280x380_01.png')} />
                    </NavLink>
                </div>
                <div className="center">
                    <NavLink to="/ofertas/2" >
                        <img className="offer-img" alt=''
                            src={require('../../assets/ofertas/280x380_02.png')} />
                    </NavLink>
                </div>
                <div className="center">
                    <NavLink to="/ofertas/3" >
                        <img className="offer-img" alt=''
                            src={require('../../assets/ofertas/280x380_03.png')} />
                    </NavLink>
                </div>
                <div className="center">
                    <NavLink to="/ofertas/4" >
                        <img className="offer-img" alt=''
                            src={require('../../assets/ofertas/280x380_04.png')} />
                    </NavLink>
                </div>
                <div className="center">
                    <NavLink to="/ofertas/5" >
                        <img className="offer-img" alt=''
                            src={require('../../assets/ofertas/280x380_05.png')} />
                    </NavLink>
                </div>
                <div className="center">
                    <NavLink to="/ofertas/6" >
                        <img className="offer-img" alt=''
                            src={require('../../assets/ofertas/280x380_06.png')} />
                    </NavLink>
                </div>
            </Slider>
      </div>
    )
  }
}

export default SliderStores
