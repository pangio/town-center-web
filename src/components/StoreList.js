import React from 'react'
import StoreBadge from './StoreBadge'
import NavLink from './NavLink'

class StoreList extends React.Component {
  constructor() {
    super()
    this.state = {
      search: ''
    }
  }

  updateSearch(event) {
    this.setState({
      search: event.target.value.substr(0, 10)
    })
  }

  onClick(event) {
    this.setState({
      search: ''
    })
  }

  render() {
    let filteredStores = this.props.storeList.filter(
      (store) => {
        return store.name.toLowerCase().includes(this.state.search.toLowerCase())
      }
    )

    return (
      <div className='row center'>
        <input className='search' placeholder='Buscar...' type='text' 
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
          onClick={this.onClick.bind(this)} />
        <hr />
          <div>
            {
              filteredStores.map((store, i) => {
                return (
                  <NavLink to={`/tiendas/${store.name}`} key={i} >
                      <StoreBadge store={store} key={i} />
                  </NavLink>
                )
              })
            }
          </div>
        </div>
    )
  }
}

export default StoreList