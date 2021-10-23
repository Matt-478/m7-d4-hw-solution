import {createStore, combineReducers} from 'redux'
import favouriteReducer from './reducer/favourites'
import jobsReducer from './reducer/jobs'

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

export default createStore(mainReducer,initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

