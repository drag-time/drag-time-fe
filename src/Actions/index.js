export function getEvents() {
  return dispatch => {
    return fetch(process.env.REACT_APP_API_URL+'/api/events')
      .then((response) => response.json())
      .then(events => {
        return dispatch({
          type: 'GET_EVENTS',
          payload: events
        });
      });
  }
}

export function getLocations() {
  return dispatch => {
    return fetch(process.env.REACT_APP_API_URL+'/api/locations')
      .then((response) => response.json())
      .then(locations => {
        return dispatch({
          type: 'GET_LOCATIONS',
          payload: locations
        })
      })
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

export function addRSVP(eventID) {
  return dispatch => {
    return dispatch({
      type: 'ADD_RSVP',
      payload: Number(eventID)
    })
  }
}

export function removeRSVP(eventID) {
  return dispatch => {
    return dispatch({
      type: 'REMOVE_RSVP',
      payload: Number(eventID)
    })
  }
}

export function addFavorite(eventID) {
  return dispatch => {
    return dispatch({
      type: 'ADD_FAVORITE',
      payload: Number(eventID)
    })
  }
}

export function removeFavorite(eventID) {
  return dispatch => {
    return dispatch({
      type: 'REMOVE_FAVORITE',
      payload: Number(eventID)
    })
  }
}

export function publishEvent(eventObject) {
  return dispatch => {
    return dispatch({
      type: 'PUBLISH_EVENT',
      payload: eventObject
    })
  }
}
