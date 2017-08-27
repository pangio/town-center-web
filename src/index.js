import AppRouter from './AppRouter';
import registerServiceWorker from './registerServiceWorker';
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Home from './components/Home'
import Cines from './components/Cines'
import Cine from './components/Cine'
import Hospital from './components/Hospital'
import Hotel from './components/Hotel'
import Ofertas from './components/Ofertas'
import Oferta from './components/Oferta'
import Restaurantes from './components/Restaurantes'
import Restaurant from './components/Restaurant'
import Tiendas from './components/Tiendas'
import Tienda from './components/Tienda'

render((
  <Router history={browserHistory}>
    <Route path="/" component={AppRouter}>

      <IndexRoute component={Home} />

      <Route path="/cines" component={Cines} >
        <Route path="/cines/:id" component={Cine} />
      </Route>

      <Route path="/hospital" component={Hospital} >
      </Route>

      <Route path="/ofertas" component={Ofertas} >
        <Route path="/ofertas/:id" component={Oferta} />
      </Route>

      <Route path="/restaurantes" component={Restaurantes} >
        <Route path="/restaurantes/:id" component={Restaurant} />
      </Route>

      <Route path="/tiendas" component={Tiendas} >
        <Route path="/tiendas/:id" component={Tienda} />
      </Route>

      <Route path="/hotel" component={Hotel} />

    </Route>
  </Router>
), document.getElementById('root'))
registerServiceWorker();