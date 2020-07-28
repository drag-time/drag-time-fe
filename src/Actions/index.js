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
    let foundEvent = events.filter(event => Number(event.id) === Number(eventID));
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
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(eventObject);
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    return fetch("http://localhost:4000/api/events", requestOptions)
      .then(response => response.json())
      .then(result => console.log('result', result))
      .catch(error => console.log('error', error));
  }
}

export function publishLocation(locationObject) {
  return dispatch => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(locationObject);
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    return fetch("http://localhost:4000/api/locations", requestOptions)
      .then(response => response.json())
      .then(result => console.log('result', result))
      .catch(error => console.log('error', error));
  }
}



  //
  // return fetch(process.env.REACT_APP_API_URL+"/api/events", {
  //   method: 'POST',
  //   body: JSON.stringify({"event":{
  //     "title": "some drag show",
  //     "cost": 50.00,
  //     "description": "another drag show",
  //     "date": "2010-04-17",
  //     "start_time": "14:00:00",
  //     "end_time": "14:00:00",
  //     "image": "https://www.example.com/1.jpg",
  //     "labels": ["18+"]
  //   }
  // })
  // })
  // .then(response => console.log(response))
  // .then(response => {
  //   return dispatch({
  //     type: 'PUBLISH_EVENT',
  //     payload: response
  //   })
  // })


  export function searchForTerm(searchTerm) {
    return dispatch => {
      return dispatch({
        type:'SEARCH_TERM',
        payload: searchTerm.toUpperCase()
      })
    }
  }

  export function addTagToSearch(tag) {
    return dispatch => {
      return dispatch({
        type:'ADD_TAG',
        payload: tag
      })
    }
  }

  export function removeTagToSearch(tag) {
    return dispatch => {
      return dispatch({
        type:'REMOVE_TAG',
        payload: tag
      })
    }
  }