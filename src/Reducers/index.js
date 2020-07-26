import { combineReducers } from 'redux'
import { EventContainerReducer } from './EventContainerReducer';
import { EventDetailsReducer} from './EventDetailsReducers';
//Combines reducers

const initialState = {
  userRSVPs: [],
  userFavorites: [],
};

const savedEvents = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_RSVP':
      return {
        ...state,
        userRSVPs: [...state.userRSVPs, action.payload]
      }
    case 'ADD_FAVORITE':
      return {
        ...state,
        userFavorites: [...state.userFavorites,action.payload],
      }
    case 'REMOVE_RSVP':
      return {
        ...state,
        userRSVPs: state.userRSVPs.filter(event => event !== action.payload)
      }
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        userFavorites: state.userFavorites.filter(event => event !== action.payload)
      }
    case 'GET_LOCATIONS':
      return {
        ...state,
        locationList: action.payload
      }
    default:
      return state
  }

}
export const rootReducer = combineReducers({
  EventContainerReducer,
  savedEvents,
  EventDetailsReducer
});
