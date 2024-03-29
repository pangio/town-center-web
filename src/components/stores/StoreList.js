import Select from 'react-select';
import 'react-select/dist/react-select.css';

import React from 'react'
import StoreBadge from './StoreBadge'
import NavLink from '../NavLink'
import _ from 'underscore'

class StoreList extends React.Component {
  constructor() {
    super()
    this.state = {
      search: '',
      selectedCategory: 'Todas'
    }
    this.handleOnChangeCategory = this.handleOnChangeCategory.bind(this)
    this.getCategories = this.getCategories.bind(this)
  }

  getCategories() {
    let options = []
    let categories = _.pluck(this.props.storeList, 'subcategory')
    categories = _.uniq(categories)
    categories = _.filter(categories, function(c) { return c !== undefined })
    _.each(categories, function(label,i){
      let obj = { value: label, label: label }
      options.push(obj)
    })
    options.push({ value: 'Todas', label: 'Todas' })
    return options
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
  }

  render() {
    let filteredStores = this.props.storeList.filter(
      (store) => {
          if (this.state.selectedCategory === 'Todas') {
              return store.name.toLowerCase().includes(this.state.search.toLowerCase())
          }
          return store.name.toLowerCase().includes(this.state.search.toLowerCase()) &&
              store.subcategory !== undefined && 
              store.subcategory.toLowerCase() === this.state.selectedCategory.toLowerCase()
      }
    )

    let options = this.getCategories()

    return (
      <div className='row center'>
        <div className='col-xs-6 float-none'>
          <input className='search' placeholder='Buscar...' type='text' 
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
            onClick={this.onClick.bind(this)} />
        </div>

        <Select
          placeholder='Filtrar por categoría'
          className='search'
          name='form-field-name'
          value={this.state.selectedCategory}
          options={options}
          onChange={this.handleOnChangeCategory}
        />

        <hr />
          <div>
            {
              filteredStores.map((store, i) => {
                return (
                  <NavLink to={`/tiendas/${store.local}`} key={i} >
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