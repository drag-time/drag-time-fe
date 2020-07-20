export const EventContainerReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_EVENTS':
      return {
        ...state,
        eventList: action.payload,
      }
    default:
      return state
  }
}