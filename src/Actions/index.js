export function getEvents() {
  return dispatch => {
    return fetch('http://localhost:4000/api/events')
      .then((response) => response.json())
      .then(events => {
        return dispatch({
          type: 'GET_EVENTS',
          payload: events
        });
      });
  }
}

export function findEvent(events, eventID) {
  return dispatch => {
    let foundEvent = events.filter(event => event.id === Number(eventID))
    return dispatch({
      type: 'FIND_EVENT',
      payload: foundEvent[0]
    });
  }
}
