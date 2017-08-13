import React, { Component } from 'react';

class Offer extends Component {

  render() {
    return (
      <div className="">
        <h2>Ofertas</h2>
         {
          this.props.offers.map(function(offer, index) {
            return (
              <div className="" key={index} id={index}>
                <p className="">{offer.name}</p>
              </div>
            )
          })
         }
      </div>
    );
  }
}

export default Offer;
