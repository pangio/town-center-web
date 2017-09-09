import Select from 'react-select';
import 'react-select/dist/react-select.css';

import React from 'react'
import RestoBadge from './RestoBadge'
import NavLink from '../NavLink'
import _ from 'underscore'

class RestoList extends React.Component {
  constructor() {
    super()
    this.state = {
      categories: [],
      search: '',
      selectedCategory: ''
    }
    this.handleOnChangeCategory = this.handleOnChangeCategory.bind(this)
    this.getCategories = this.getCategories.bind(this)
  }

  getCategories() {
    let options = []
    let categories = _.pluck(this.props.restoList, 'subcategory')
    categories = _.uniq(categories)
    categories = _.filter(categories, function(c) { return c !== undefined })
    _.each(categories, function(label,i){
      let obj = { value: label, label: label }
      options.push(obj)
    })
    return options
  }

  // componentWillMount() {
  //   console.log('fetching all Categories...')
  // }

  updateSearch(event) {
    this.setState({
      search: event.target.value.substr(0, 10)
    })
  }

  onClick(event) {
    this.setState({search: ''})
  }

  handleOnChangeCategory(event) {
    if (event) {      
      this.setState({selectedCategory: event.value})
    }
  }

  render() {
    let filteredRestoList = this.props.restoList.filter(
      (resto) => {
          return resto.name.toLowerCase().includes(this.state.search.toLowerCase()) &&
              resto.subcategory !== undefined && 
              resto.subcategory.toLowerCase() === this.state.selectedCategory.toLowerCase()
      }
    )

    let options = this.getCategories()

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
              options={options}
              onChange={this.handleOnChangeCategory}
          />

          <div>
            {
              filteredRestoList.map((resto, i) => {
                return (
                  <NavLink to={`/restaurantes/${resto.local}`} key={i} >
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