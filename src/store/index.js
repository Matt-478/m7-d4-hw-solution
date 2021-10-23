import favouriteReducer from './reducer/favourites'
import jobsReducer from './reducer/jobs'
import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';

export const initialState = {
  favourites: {
    favouritesArray: []
  },
  jobs: {
    elements: []
  }
}

const mainReducer = combineReducers({
  favourites: favouriteReducer,
  jobs: jobsReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default createStore(mainReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
  )

