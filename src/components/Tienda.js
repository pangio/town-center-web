import React from 'react'
import StoreBadge from './StoreBadge'
import NavLink from './NavLink'

class Tienda extends React.Component {
    constructor(props) {
    super(props)
      this.state = {
        store: undefined
    }
    this.fetchStore = this.fetchStore.bind(this)
  }

  componentWillMount() {
    console.log('fetching Store...')
    this.fetchStore()
  }

  fetchStore() {
  	let id = this.props.params.id
    // fetch('http://localhost:8000/api/tiendas/'+ id)
    fetch('http://192.168.0.9:8000/api/tiendas/'+ id)
      .then(response => response.json())
      .then(response => {
        this.setState({ store: response.data.Item })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  isLoaded() {
  	return this.state.store !== undefined
  }

  render() {
    return (
		this.isLoaded() &&
		<NavLink to={`/tiendas/${this.state.store.name}`}>
			<StoreBadge store = {this.state.store} />
		</NavLink>
    )
  }
}

export default Tienda
