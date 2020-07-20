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
