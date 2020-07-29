import * as actions from '../Actions';

describe('actions', () => {
  it('should be able to fetch events', () => {

  });
  it('should have a type of GET_LOCATIONS', () => {
  });

  it('should be able to find an event by ID', () => {
    const events = [
      {id: 1},
      {id: 2},
      {id: 3},
    ];
    const eventID = 2;
    const expectedAction = {
      type: 'FIND_EVENT',
      payload: events[1]
      };
    const result = actions.findEvent(events, eventID);
    expect(result).toEqual(expectedAction);
  });

  it('should be able to add an event as a RSVP', () => {
    const eventID = 2;
    const expectedAction = {
      type: 'ADD_RSVP',
      payload: 2
    };
    const result = actions.addRSVP(eventID);
    expect(result).toEqual(expectedAction);
  });


  it('should be able to remove RSVP by event ID', () => {
    const eventID = 2;
    const expectedAction = {
      type: 'REMOVE_RSVP',
      payload: 2
    };
    const result = actions.removeRSVP(eventID);
    expect(result).toEqual(expectedAction);
  });

  it('should be able to add a favorite by event ID', () => {
    const eventID = 2;
    const expectedAction = {
      type: 'ADD_FAVORITE',
      payload: 2
    };
    const result = actions.addFavorite(eventID);
    expect(result).toEqual(expectedAction);

  });
  it('should be able to remove a favorite by event ID', () => {
    const eventID = 2;
    const expectedAction = {
      type: 'REMOVE_FAVORITE',
      payload: 2
    };
    const result = actions.removeFavorite(eventID);
    expect(result).toEqual(expectedAction);
  });
});