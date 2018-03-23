import React from 'react'
import { Route, IndexRoute, Router } from 'react-router'
import { Provider } from 'react-redux'

import Main from './app/main/index'
import About from './app/about/index'
import App from './app/app'

const Root = ({ store, history }) => (
  <Provider store={store}>
      <Router history={history} >
        <Route path="/" >
          <IndexRoute component={App}/>
        </Route>
      </Router>
  </Provider>
)

export default Root