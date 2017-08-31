import React from 'react'
import RestoBadge from './RestoBadge'

class Restaurant extends React.Component {
    constructor(props) {
    super(props)
      this.state = {
        restaurant: undefined
    }
    this.fetchRestaurant = this.fetchRestaurant.bind(this)
  }

  componentWillMount() {
    console.log('props')
    console.log(this.props)
    console.log('fetching Restaurant...')
    this.fetchRestaurant()
  }

  fetchRestaurant() {
	let resto = {
		name: 'Pizzeria Hut Hut',
		hours: '10AM a 9PM',
		type: 'restaurant',
		level: 'R3',
		local: '403',
	}
    this.setState({ restaurant: resto })
    
  	// let id = this.props.params.id
   //  fetch(`http://localhost:8000/api/restaurantes/${id}`)
   //    .then(response => response.json())
   //    .then(response => {
   //      this.setState({ restaurant: JSON.parse(response.data) })
   //    })
   //    .catch((error) => {
   //      console.error(error)
   //    })
  }

  isLoaded() {
    return this.state.restaurant !== undefined
  }

  render() {
    return (
    	this.isLoaded() &&
    	<RestoBadge resto = {this.state.restaurant}/>
    )
  }
}

export default Restaurant
