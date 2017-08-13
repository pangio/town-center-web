import React, { Component } from 'react';

class Store extends Component {

  render() {
    return (
      <div className="">
        <h2>Tiendas</h2>
         {
          this.props.stores.map(function(store, index) {
            return (
              <div className="" key={index} id={index}>
                <p className="">{store.name}</p>
              </div>
            )
          })
         }
      </div>
    );
  }
}

export default Store;
