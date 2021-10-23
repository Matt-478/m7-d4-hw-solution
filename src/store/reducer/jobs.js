import {initialState} from '../index'

export default function jobsReducer(state = initialState.jobs, action) {

  const {type, payload} = action

  switch(type) {
    case 'DISPLAY_JOBS':
      return {
        ...state,
        elements: [...state.elements, payload]
      }

    default: 
      return state
  }
}