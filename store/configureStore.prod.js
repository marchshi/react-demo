import { createStore, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'

const routeMid = routerMiddleware(browserHistory)

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            thunkMiddleware, // 允许我们 dispatch() 函数
            routeMid,
        ),
    )
    return store
}
