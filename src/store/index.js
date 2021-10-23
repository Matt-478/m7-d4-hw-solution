import {createStore} from 'redux'
import mainReducer from './reducer'
import {initialState} from './reducer'

export default createStore(mainReducer,initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

