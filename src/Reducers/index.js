import { combineReducers } from 'redux'
import { EventContainerReducer } from './EventContainerReducer';
import { EventDetailsReducer} from './EventDetailsReducers';
//Combines reducers
export const rootReducer = combineReducers({
  EventContainerReducer,
  EventDetailsReducer
});
