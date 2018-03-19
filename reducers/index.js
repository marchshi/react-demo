import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux'

import reducerDemo from '../app/about/reducers'

const rootReducer = combineReducers({
  reducerDemo,
  routing
})

export default rootReducer
