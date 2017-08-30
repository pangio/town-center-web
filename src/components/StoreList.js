import React from 'react';
import StoreBadge from './StoreBadge'

class StoreList extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }

  updateSearch(event) {
    this.setState({
      search: event.target.value.substr(0, 10)
    });
  }

  render() {
    let filteredStores = this.props.storeList.filter(
      (store) => {
        return store.name.toLowerCase().includes(this.state.search.toLowerCase());
      }
    );

    return (
      <div className='row center'>
        <input className='text' placeholder='Buscar...' type='text' value={this.state.search} onChange={this.updateSearch.bind(this)} />
        <hr />
          <div>
            { filteredStores.map((store, i) => {
              return <StoreBadge store={store} key={i} />
            }) }
          </div>
        </div>
    )
  }
}

export default StoreList