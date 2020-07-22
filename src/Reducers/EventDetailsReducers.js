export const EventDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FIND_EVENT':
      return {
        ...state,
        selectedEvent: action.payload,
      }
    default:
      return state
  }
}
