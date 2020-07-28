import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../../Components/Header/Header.js';
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

  select {
    height: 33%;
    width: 16%;
    font-family: 'Raleway', sans-serif;
    border-radius: 10px;
    opacity: 70%;
  }

  input {
    height: 25%;
    width: 16%;
  }
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

const CreateEvent = (props) => {

  const {eventList, locationList, getEvents, getLocations, publishEvent, publishLocation} = props;

  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventImage, setEventImage] = useState('');
  const [labels, setLabels] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [locationName, setLocationName] = useState('');
  const [locationAddress, setLocationAddress] = useState('');
  const [locationCity, setLocationCity] = useState('');
  const [locationState, setLocationState] = useState('');
  const [locationZip, setLocationZip] = useState('');

  const displayExistingLocations = () => {
    const renderedOptions = eventList.data.reduce((acc, eventOption) => {
      if (!acc.length) {
        acc.push(<option id={eventOption.location.id} key={Number(eventOption.location.id)} value={eventOption.location.name} name={eventOption.location.name}>{eventOption.location.name}</option>)
      } else {
        let foundEvent = acc.find(matchingEvent => matchingEvent.props.id === eventOption.location.id)
        if (!foundEvent) {
          acc.push(<option id={eventOption.location.id} key={Number(eventOption.location.id)} value={eventOption.location.name} name={eventOption.location.name}>{eventOption.location.name}</option>)
        }
      }
      return acc;
    }, []);
    return (
      <select onChange={makeLocationSelection}>
        <option value="">Choose Exising Location</option>
        {renderedOptions}
      </select>
    )
  }

  const autoFillLocations = (e) => {
    if (e.target.value !== '') {
      const locationChoiceID = Number(e.target.options[e.target.selectedIndex].id);
      const chosenLocation = locationList.data.find(matchingLocation => matchingLocation.id === locationChoiceID);
      setLocationName(chosenLocation.name);
      setLocationAddress(chosenLocation.address);
      setLocationCity(chosenLocation.city);
      setLocationState(chosenLocation.state);
      setLocationZip(chosenLocation.zip);
    } else {
      setLocationName('');
      setLocationAddress('');
      setLocationCity('');
      setLocationState('');
      setLocationZip('');
    }
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
      case 'eventImage': setEventImage(e.target.value);
        break;
      case 'locationName': setLocationName(e.target.value);
        break;
      case 'streetAdress': setLocationAddress(e.target.value);
        break;
      case 'city': setLocationCity(e.target.value);
        break;
      case 'state': setLocationState(e.target.value);
        break;
      case 'zip': setLocationZip(e.target.value);
        break;
      default: return false;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(locationAddress); 
    const eventObject = {
      event: {
        artists: [],
        date: eventDate || '',
        description: eventDescription || '',
        end_time: endTime || '',
        start_time: startTime || '',
        location: {
          location: {
            address: locationAddress,
            city: locationCity || '',
            name: locationName || '',
            state: locationState || '',
            zip: locationZip || '',
          }
        },
        title: eventName || '',
        type: 'event',
        labels: [],
        cost: 50.00,
        image: "image"
      }
    }
    console.log('event object', eventObject);
    publishEvent(eventObject);
    if (!isSelected) {
      publishLocation(eventObject.event.location)
    } else {
      return;
    }
  }

  useEffect(() => {
    getEvents();
    getLocations();
  }, [getEvents, getLocations])

  return(
    <Wrapper>
      <Header />
      <FormWrapper>
        <form onSubmit={handleSubmit}>
          <h2>Create<span>Event</span></h2>
          <RowOneWrapper>
            <section>
              <input required onChange={(e) => updateFormState(e)} id="eventName" type="text" placeholder="Name of Event" />
              <input required onChange={(e) => updateFormState(e)} id="eventDate" type="date" />
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
              <textarea required onChange={(e) => updateFormState(e)} id="eventDescription" rows="15" placeholder="Event Description..."></textarea>
            </section>
            <section>
              <input required onChange={(e) => updateFormState(e)} id="eventImage" name="uploadImage" type="file" placeholder="Choose an Image" accept="image/*" />
            </section>
          </RowOneWrapper>
          <RowTwoWrapper>
            {!!eventList && displayExistingLocations()}
            {isSelected ? <p>{locationName}</p> :
              <input id="locationName" onChange={(e) => updateFormState(e)} required type="text" placeholder="New Location Title"></input>
            }
            {isSelected ? <p>{locationAddress}</p> :
              <input id="streetAdress" onChange={(e) => updateFormState(e)} required type="text" placeholder="Street Address"></input>
            }
            {isSelected ? <p>{locationCity}</p> :
              <input id="city" onChange={(e) => updateFormState(e)} required type="text" placeholder="City"></input>
            }
            {isSelected ? <p>{locationState}</p> :
              <input id="state" onChange={(e) => updateFormState(e)} required type="text" placeholder="State"></input>
            }
            {isSelected ? <p>{locationZip}</p> :
              <input id="zip" onChange={(e) => updateFormState(e)} required type="text" placeholder="Zip"></input>
            }
          </RowTwoWrapper>
          <RowThreeWrapper>
            <section>
              <label htmlFor="eighteenPlus">18+
                <input id="eighteenPlus" type="checkbox" />
              </label>
              <label htmlFor="twentyOnePlus">21+
                <input id="twentyOnePlus" type="checkbox" />
              </label>
              <label htmlFor="coverCharge">Cover Charge
                <input id="coverCharge" type="checkbox" />
              </label>
              <label htmlFor="dragKing">Drag King
                <input id="dragKing" type="checkbox" />
              </label>
              <label htmlFor="dragQueen">Drag Queen
                <input id="dragQueen" type="checkbox" />
              </label>
              <label htmlFor="ballroom">Ballroom
                <input id="ballroom" type="checkbox" />
              </label>
              <label htmlFor="pageant">Pageant
                <input id="pageant" type="checkbox" />
              </label>
              <label htmlFor="trivia">Trivia
                <input id="trivia" type="checkbox" />
              </label>
              <label htmlFor="musical">Musical
                <input id="musical" type="checkbox" />
              </label>
              <label htmlFor="tribute">Tribute
                <input id="tribute" type="checkbox" />
              </label>
              <label htmlFor="horror">Horror
                <input id="horror" type="checkbox" />
              </label>
            </section>
            <button>Publish Event</button>
          </RowThreeWrapper>
        </form>
      </FormWrapper>
    </Wrapper>
  );
}

const mapStateToProps = state => {
  return {
    eventList: state.displayEvents.eventList,
    locationList: state.createEvent.locationList
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
