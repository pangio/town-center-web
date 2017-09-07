import React from 'react'
import SliderMovies from './SliderMovies'

class MoviesList extends React.Component {
  render() {
    return (
      <div className='row center'>
        <SliderMovies moviesList={this.props.moviesList} />
      </div>
    )
  }
}

export default MoviesList