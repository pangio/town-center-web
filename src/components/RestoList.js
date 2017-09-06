import Select from 'react-select';
import 'react-select/dist/react-select.css';

import React from 'react'
import RestoBadge from './RestoBadge'
import NavLink from './NavLink'

class RestoList extends React.Component {
  constructor() {
    super()
    this.state = {
      search: '',
      categories: [
      { value:'Pastas', label: 'Pastas'} ,
        { value:'Heladería', label: 'Heladería'} ,
        { value:'Café', label: 'Café'}
      ],
      selectedCategory: ''
    }
    this.handleOnChangeCategory = this.handleOnChangeCategory.bind(this)
    // this.fetchAllCategories = this.fetchAllCategories.bind(this)
  }

  componentWillMount() {
    // console.log('fetching all Categories...')
    // this.fetchAllCategories()
    this.setState({
      selectedCategory: 'Pastas'
    })
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

  handleOnChangeCategory(event) {
    if (event) {      
      this.setState({selectedCategory: event.value})
    }

    // console.log(this.state.selectedCategory)
  }

  render() {
    let filteredRestoList = this.props.restoList.filter(
      (resto) => {
          return resto.name.toLowerCase().includes(this.state.search.toLowerCase()) &&
              resto.category !== undefined && 
              resto.category.toLowerCase() === this.state.selectedCategory.toLowerCase()
      }
    )

    return (
      <div className='row center'>
        <input className='search' placeholder='Buscar...' type='text' value={this.state.search} 
          onChange={this.updateSearch.bind(this)}
          onClick={this.onClick.bind(this)} />

          <Select
              placeholder='Filtrar por categoría'
              className='search'
              name='form-field-name'
              value={this.state.selectedCategory}
              options={this.state.categories}
              onChange={this.handleOnChangeCategory}
          />

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