import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute , hashHistory} from 'react-router'

import Main from './modules/main/index'
import About from './modules/about/index'

//render((
//<Router history={hashHistory}>
//    <Route path="/" >
//        <IndexRoute component={Main}/>
//        <Route path="/about" component={About}/>
//    </Route>
//</Router>
//), document.getElementById('content'))
