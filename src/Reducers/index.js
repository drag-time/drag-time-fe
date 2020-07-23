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
        userRSVPs: [...state.userRSVPs, Number(action.payload)]
      }
    case 'ADD_FAVORITE':
      return {
        ...state, 
        userFavorites: [...state.userFavorites, Number(action.payload)],
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
