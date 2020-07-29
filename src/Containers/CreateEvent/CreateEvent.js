import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../../Components/Header/Header.js';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getEvents, getLocations, publishEvent, publishLocation } from '../../Actions';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  font-family: 'Raleway', sans-serif;
  width: 100%;
  height: 100%;
  background-image: url("https://images.unsplash.com/photo-1566055909643-a51b4271aa47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60");
  background-size: cover;
  color: white;
`

const FormWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-bottom: 2%;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  input {
    font-family: 'Raleway', sans-serif;
    padding: 1.2%;
    font-size: 1.3em;
    border-radius: 10px;
    border: none;
    color: black;
    opacity: 70%;

    ::placeholder {
      color: black;
    }
  }

  h2 {
    font-family: 'MuseoModerno', cursive;
    font-weight: 100;
    font-size: 2em;
    color: white;
    text-transform: uppercase;
    padding: .5% 1%;
    border-radius: 15px;
    text-align: center;

    span {
      font-weight: 500;
      color: #2299A3;
    }
  }
`

const RowOneWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-self: center;
  width: 95%;
  height: 40%;
  background-color: rgba(0,0,0,0.8);
  padding-top: 1%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30%;

    #uploadImage {
      color: white;
      align-self: center;
      width: 100%;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      margin-top: 2%;
    }

    .time-wrapper {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-around;
      align-items: center;

      label {
        font-size: 1.2em;
      }

      input {
        width: 55%;
        margin: 2%;
      }
    }

    select {
      width: 100%;
      align-self: center;
      font-family: 'Raleway', sans-serif;
      border-radius: 10px;
      opacity: 70%;
      font-size: 1.4em;
    }

    textarea {
      width: 100%;
      height: 100%;
      margin: 2%;
      font-family: 'Raleway', sans-serif;
      font-size: 1.2em;
      padding: 1.2%;
      border-radius: 10px;
      opacity: 70%;

      ::placeholder {
        color: black;
      }
    }
  }
`

const RowTwoWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: rgba(0,0,0,0.8);
  align-self: center;
  align-items: center;
  width: 95%;
  height: 20%;
  padding: 1%;
`

const RowThreeWrapper = styled.section`
  display: flex;
  flex-direction: row;
  background-color: rgba(0,0,0,0.8);
  justify-content: space-around;
  align-content: center;
  align-self: center;
  width: 95%;
  height: 35%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  section {
    display: grid;
    width: 80%;
    justify-content: space-around;
    grid-template-columns: 20% 20% 20% 20%;

    input {
      margin: 5%;
    }
  }

  button {
    font-family: 'Raleway', sans-serif;
    font-size: 1.1em;
    border: none;
    background-color: #A39743;
    color: white;
    height: 20%;
    width: 25%;
    border-radius: 15px;
    margin: auto 0 2% auto;

    :hover {
      cursor: pointer;
      outline-offset: 15px;
      text-shadow: 1px 1px 2px #427388;
      box-shadow: inset 0 0 20px #A39743, 0 0 20px #A39743;
      outline-color: #A39743;
    }
  }
`

const EventCreatedHeader = styled.h3`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: rgba(0,0,0,0.8);
  padding: 5%;
  font-family: 'Raleway', sans-serif;
  font-size: 2em;
  border-radius: 15px;
  border: 1px solid white;
  margin: auto;
`

const NavLinkStyled = styled(NavLink)`
  font-family: 'Raleway', sans-serif;
  font-size: .5em;
  border: none;
  background-color: #A39743;
  color: white;
  width: 60%;
  border-radius: 15px;
  margin: 5%;
  padding: 4%;
  text-decoration: none;

  :hover {
    cursor: pointer;
    outline-offset: 15px;
    text-shadow: 1px 1px 2px #427388;
    box-shadow: inset 0 0 20px #A39743, 0 0 20px #A39743;
    outline-color: #A39743;
  }
`

const CreateEvent = (props) => {

  const {eventList, locationList, getEvents, getLocations, publishEvent} = props;

  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventImage, setEventImage] = useState('');
  const [labels, setLabels] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [location, setLocation] = useState(0);
  const [eventCost, setEventCost] = useState(0);
  const [eventPerformers, setEventPerformers] = useState([]);
  const [isEventCreated, setIsEventCreated] = useState(false);

  const displayExistingLocations = () => {
    const renderedOptions = locationList.reduce((acc, locationOption) => {
      acc.push(<option id={locationOption.id} key={Number(locationOption.id)} value={locationOption.name} name={locationOption.name}>{locationOption.name}</option>)
      return acc;
    }, [])
    return (
      <select id="eventLocation" required onChange={makeLocationSelection}>
        <option value="">Choose Exising Location</option>
        {renderedOptions}
      </select>
    )
  }

  const autoFillLocations = (e) => {
    const locationChoiceID = Number(e.target.options[e.target.selectedIndex].id);
    const chosenLocation = locationList.find(matchingLocation => matchingLocation.id === locationChoiceID);
    setLocation(chosenLocation);
  }

  const makeLocationSelection = (e) => {
    !!e.target.value ? setIsSelected(true) : setIsSelected(false);
    autoFillLocations(e)
  }

  const updateFormState = (e) => {
    switch (e.target.id) {
      case 'eventName': setEventName(e.target.value);
        break;
      case 'eventDate': setEventDate(e.target.value);
        break;
      case 'startTime': setStartTime(e.target.value);
        break;
      case 'endTime': setEndTime(e.target.value);
        break;
      case 'eventDescription': setEventDescription(e.target.value);
        break;
      case 'imageURL': setEventImage(e.target.value);
        break;
      case 'eventCost': setEventCost(e.target.value);
        break;
      case 'eventPerformers': setEventPerformers(e.target.value.split(','));
        break;
      case 'eighteenPlus':
          setLabels([...labels, '18+'])
        break;
      case 'twentyOnePlus':
        setLabels([...labels, '21+'])
        break;
      case 'coverCharge':
        setLabels([...labels, 'Cover Charge'])
        break;
      case 'dragKing':
        setLabels([...labels, 'Drag King'])
        break;
      case 'dragQueen':
        setLabels([...labels, 'Drag Queen'])
        break;
      case 'ballroom':
        setLabels([...labels, 'Ballroom'])
        break;
      case 'pageant':
        setLabels([...labels, 'Pageant'])
        break;
      case 'trivia':
        setLabels([...labels, 'Trivia'])
        break;
      case 'musical':
        setLabels([...labels, 'Musical'])
        break;
      case 'tribute':
        setLabels([...labels, 'Tribute'])
        break;
      case 'horror':
        setLabels([...labels, 'Horror'])
        break;
      default: return false;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventObject = {
      event: {
        artists: [],
        date: eventDate || '',
        description: eventDescription || '',
        end_time: endTime || '',
        start_time: startTime || '',
        location_id: location.id || 0,
        title: eventName || '',
        type: 'event',
        labels: labels,
        cost: eventCost || 0,
        image: eventImage || ''
      }
    }
    setIsEventCreated(true);
    publishEvent(eventObject);
  }

  useEffect(() => {
    getEvents();
    getLocations();
  }, [getEvents, getLocations])

  return(
    <Wrapper>
      <Header />
      {!!isEventCreated ? <EventCreatedHeader>Event Created!<NavLinkStyled to="/home">Back to Events</NavLinkStyled></EventCreatedHeader> :
        <FormWrapper>
          <form onSubmit={handleSubmit}>
            <h2>Create<span>Event</span></h2>
            <RowOneWrapper>
              <section>
                <input required onChange={(e) => updateFormState(e)} id="eventName" type="text" placeholder="Name of Event" />
                <input required onChange={(e) => updateFormState(e)} id="eventDate" type="date" />
                <section className="time-wrapper">
                  <label htmlFor="eventCost">Event Cost</label>
                  <input required onChange={(e) => updateFormState(e)} type="number" id="eventCost" placeholder="Cost" />
                </section>
                <section className="time-wrapper">
                  <label htmlFor="startTime">Start Time</label>
                  <input required onChange={(e) => updateFormState(e)} id="startTime" type="time" />
                </section>
                <section className="time-wrapper">
                  <label htmlFor="endTime">End Time</label>
                  <input required onChange={(e) => updateFormState(e)} id="endTime" type="time" />
                </section>
              </section>
              <section>
                <textarea required onChange={(e) => updateFormState(e)} id="eventDescription" rows="8" placeholder="Event Description..."></textarea>
                <textarea required onChange={(e) => updateFormState(e)} id="eventPerformers" rows="8" placeholder="Performers (please separate by comma)..."></textarea>
              </section>
              <section>
                {!!eventList && !!locationList && displayExistingLocations()}
                <input type="text" id="imageURL" required onChange={(e) => updateFormState(e)} placeholder="Image URL" />
              </section>
            </RowOneWrapper>
            <RowTwoWrapper>
              <p>{location.name}</p>
              <p>{location.address}</p>
              <p>{location.city}</p>
              <p>{location.state}</p>
              <p>{location.zip}</p>
            </RowTwoWrapper>
            <RowThreeWrapper>
              <section>
                <label htmlFor="eighteenPlus">18+
                  <input onClick={(e) => updateFormState(e)} id="eighteenPlus" type="checkbox" />
                </label>
                <label htmlFor="twentyOnePlus">21+
                  <input onClick={(e) => updateFormState(e)} id="twentyOnePlus" type="checkbox" />
                </label>
                <label htmlFor="coverCharge">Cover Charge
                  <input onClick={(e) => updateFormState(e)} id="coverCharge" type="checkbox" />
                </label>
                <label htmlFor="dragKing">Drag King
                  <input onClick={(e) => updateFormState(e)} id="dragKing" type="checkbox" />
                </label>
                <label htmlFor="dragQueen">Drag Queen
                  <input onClick={(e) => updateFormState(e)} id="dragQueen" type="checkbox" />
                </label>
                <label htmlFor="ballroom">Ballroom
                  <input onClick={(e) => updateFormState(e)} id="ballroom" type="checkbox" />
                </label>
                <label htmlFor="pageant">Pageant
                  <input onClick={(e) => updateFormState(e)} id="pageant" type="checkbox" />
                </label>
                <label htmlFor="trivia">Trivia
                  <input onClick={(e) => updateFormState(e)} id="trivia" type="checkbox" />
                </label>
                <label htmlFor="musical">Musical
                  <input onClick={(e) => updateFormState(e)} id="musical" type="checkbox" />
                </label>
                <label htmlFor="tribute">Tribute
                  <input onClick={(e) => updateFormState(e)} id="tribute" type="checkbox" />
                </label>
                <label htmlFor="horror">Horror
                  <input onClick={(e) => updateFormState(e)} id="horror" type="checkbox" />
                </label>
              </section>
              <button>Publish Event</button>
            </RowThreeWrapper>
          </form>
        </FormWrapper>
      }
    </Wrapper>
  );
}

const mapStateToProps = state => {
  return {
    eventList: state.displayEvents.eventList,
    locationList: state.createEvent.locationList.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getEvents: () => dispatch(getEvents()),
    getLocations: () => dispatch(getLocations()),
    publishEvent: (eventObject) => dispatch(publishEvent(eventObject)),
    publishLocation: (locationObject) => dispatch(publishLocation(locationObject))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(CreateEvent)
