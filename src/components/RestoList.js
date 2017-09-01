import React from 'react'
import RestoBadge from './RestoBadge'
import NavLink from './NavLink'

class RestoList extends React.Component {
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
    let filteredRestoList = this.props.restoList.filter(
      (resto) => {
        return resto.name.toLowerCase().includes(this.state.search.toLowerCase())
      }
    )

    return (
      <div className='row center'>
        <input className='text' placeholder='Buscar...' type='text' value={this.state.search} 
          onChange={this.updateSearch.bind(this)}
          onClick={this.onClick.bind(this)} />

        <hr />
          <div>
            {
              filteredRestoList.map((resto, i) => {
                return (
                  <NavLink to={`/restaurantes/${resto.name}`} key={i} >
                      <RestoBadge resto={resto} key={i} />
                  </NavLink>
                )
              })
            }
          </div>
        </div>
    )
  }
}

export default RestoList