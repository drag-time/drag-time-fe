import * as reducers from '../Reducers';

describe('Search Reducer', () => {
  it('Should be able to search a term as a string', () => {
    const action = {
      type: 'SEARCH_TERM',
      payload: 'Drag'
    }
    const result = reducers.searchEvents({searchTerm: ''}, action);
    expect(result).toEqual({searchTerm: 'Drag'});
  });

  it('Should be able add a tag to search', () => {
    const action = {
      type: 'ADD_TAG',
      payload: 'Drag King'
    }
    const result = reducers.searchEvents({searchTags:[]}, action);
    expect(result).toEqual({searchTags: ['Drag King']});
  });

  it('Should be able to remove a tag for search', () => {
    const action = {
      type: 'REMOVE_TAG',
      payload: 'Drag King'
    }
    const result = reducers.searchEvents({searchTags:['Drag King']}, action);
    expect(result).toEqual({searchTags: []});
  });
})

describe('Saved Events Reducer', () => {
  it('Should be able to add a RSVP event', () => {
    const action = {
      type: 'ADD_RSVP',
      payload: {name: 'Drag Party', location: 'Tracks'}
    }
    const result = reducers.savedEvents({userRSVPs: []}, action);
    expect(result).toEqual({userRSVPs: [{name: 'Drag Party', location: 'Tracks'}]});
  });

  it('Should be able to add a favorite event', () => {
    const action = {
      type: 'ADD_FAVORITE',
      payload: {name: 'Drag Party', location: 'Tracks'}
    }
    const result = reducers.savedEvents({userFavorites: []}, action);
    expect(result).toEqual({userFavorites: [{name: 'Drag Party', location: 'Tracks'}]});
  });

  it('Should be able to remove a favorite', () => {
    const action = {
      type: 'REMOVE_FAVORITE',
      payload: 1
    }
    const result = reducers.savedEvents({userFavorites:[1]}, action);
    expect(result).toEqual({userFavorites: []});
  });

  it('Should be able to remove a RSVP event', () => {
    const action = {
      type: 'REMOVE_RSVP',
      payload: 1
    }
    const result = reducers.savedEvents({userRSVPs:[1]}, action);
    expect(result).toEqual({userRSVPs: []});
  });

  it('Should be able to get locations', () => {
    const action = {
      type: 'GET_LOCATIONS',
      payload: [{id:1, name:'Tracks'}, {id:2, name:'Charlie'}]
    }
    const result = reducers.savedEvents({locationList: []}, action);
    expect(result).toEqual({locationList:[{id:1, name:'Tracks'}, {id:2, name:'Charlie'}]});
  })

}) 

describe('CreateEvent', () => {
  it('Should be able to publish an event', () => {
    const action = {
      type: 'PUBLISH_EVENT',
    }
    const result = reducers.createEvent({}, action);
    expect(result).toEqual({}); 
  })
});

describe('displayEvents', () => {
  it('Should be able to find an event', () => {
    const action = {
      type: 'FIND_EVENT',
      payload: {id:1, name: 'Tracks'}
    }
    const result = reducers.displayEvents({selectedEvent: {} }, action);
    expect(result).toEqual({selectedEvent: {id:1, name: 'Tracks'} }); 
  });
  it('Should be able to get event list', () => {
    const action = {
      type: 'GET_EVENTS',
      payload: [{id:1, name: 'Tracks'},{id:2, name: 'Hambury Mary'} ]
    }
    const result = reducers.displayEvents({eventList: {} }, action);
    expect(result).toEqual({eventList: [{id:1, name: 'Tracks'},{id:2, name: 'Hambury Mary'} ] }); 
  });
})