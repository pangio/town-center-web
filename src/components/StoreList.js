import Select from 'react-select';
import 'react-select/dist/react-select.css';

import React from 'react'
import StoreBadge from './StoreBadge'
import NavLink from './NavLink'

class StoreList extends React.Component {
  constructor() {
    super()
    this.state = {
      search: '',
      categories: [
      { value:'Tecnología', label: 'Tecnología'} ,
      { value:'Mujer', label: 'Mujer'} ,
      { value:'Hombre', label: 'Hombre'} ,
      { value:'Sports', label: 'Sports'}
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
      selectedCategory: 'mujer'
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
    let filteredStores = this.props.storeList.filter(
      (store) => {
          return store.name.toLowerCase().includes(this.state.search.toLowerCase()) &&
              store.category !== undefined && 
              store.category.toLowerCase() === this.state.selectedCategory.toLowerCase()
      }
    )

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
          options={this.state.categories}
          onChange={this.handleOnChangeCategory}
        />

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