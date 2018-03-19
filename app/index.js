import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute , hashHistory} from 'react-router'

import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Main from './modules/main/index'
import About from './modules/about/index'

render(
  <AppContainer>
      <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root'),
)