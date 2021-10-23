import {initialState} from '../index'

 const favouriteReducer = (state = initialState.favourites, action) => {
  switch(action.type) {
    case 'ADD_TO_FAV': 
      return {
        ...state,
        favouritesArray: [...state.favouritesArray, action.payload]
      }

    case 'REMOVE_FROM_FAV': 
      return {
        ...state,
        favouritesArray: [...state.favouritesArray.filter((company) => company !== action.payload)]
      }

    default: 
      return state
  }
}

export default  favouriteReducer