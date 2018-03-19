import React from 'react'
import { Route, IndexRoute, Router } from 'react-router'
import { Provider } from 'react-redux'

import Main from './app/main/index'
import About from './app/about/index'

const Root = ({ store, history }) => (
  <Provider store={store}>
      <Router history={history} >
        <Route path="/" >
          <IndexRoute component={Main}/>
          <Route path="/about" component={About}/>
        </Route>
      </Router>
  </Provider>
)

export default Root