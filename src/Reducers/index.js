import { combineReducers } from 'redux'

//Combines reducers

const savedEventInitialState = {
  userRSVPs: [],
  userFavorites: [],
  locationList: []
};

const displayEventInitialState = {
  eventList: [],
  selectedEvent: {
    location: {},
    artists: [],
    labels: []
  }
}

const createEventInitialState = {
  locationList: []
}

// move all reducers into here, but have different switches
// for groups of reducers

export const savedEvents = (state = savedEventInitialState, action) => {
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

export const displayEvents = (state = displayEventInitialState, action) => {
  switch (action.type) {
    case 'FIND_EVENT':
      return {
        ...state,
        selectedEvent: action.payload,
      }
    case 'GET_EVENTS':
      return {
        ...state,
        eventList: action.payload,
      }
    default:
      return state
  }
}

export const createEvent = (state = createEventInitialState, action) => {
  switch (action.type) {
    case 'GET_LOCATIONS':
      return {
        ...state,
        locationList: action.payload
      }
    case 'PUBLISH_EVENT':
      return {
        ...state,
      }
    default:
      return state
  }
}

const searchEventsInitialState = {
  searchTerm: '',
  searchTags: [],
}

export const searchEvents = (state = searchEventsInitialState, action) => {
  switch (action.type) {
    case 'SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload
      }
    case 'ADD_TAG':
      return {
        ...state,
        searchTags: [...state.searchTags, action.payload]
      }
    case 'REMOVE_TAG':
      return {
        ...state,
        searchTags: state.searchTags.filter(tag => tag !== action.payload)
      }
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  displayEvents,
  savedEvents,
  createEvent,
  searchEvents
});
