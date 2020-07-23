import React, { useEffect } from 'react';
import Header from '../../Components/Header/Header.js';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { findEvent, addRSVP, addFavorite } from '../../Actions';

const EventWrapper = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 92vh;
  background-image: url('https://images.unsplash.com/photo-1567200202742-669ea35bca78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1526&q=80');
  background-size: cover;
  color: white;
`

const InfoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  font-family: 'Raleway', sans-serif;
  margin: 2%;
  background-color: black;
  opacity: 85%;
  padding: 2%;

  h2 {
    font-size: 3.5em;
    border-bottom: 1px solid white;
  }

  h4 {
    font-size: 1.2em;
  }

  h3 {
    font-size: 1.4em;
  }

  p {
    display: inline-block;
    font-size: .7em;
    padding: 2%;
    background-color: #57123A;
    margin: 1%;
    border-radius: 10px;
  }
`

const ImgWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 40%;

  img {
    width: 500px;
    height: 500px;
  }
`

const ButtonWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  button {
    font-family: 'Raleway', sans-serif;
    font-size: 1.4em;
    border: none;
    background-color: #A39743;
    color: white;
    padding: 2% 3%;
    border-radius: 15px;
    margin: 2%;
    width: 30%;

    :hover {
      cursor: pointer;
      outline-offset: 15px;
      text-shadow: 1px 1px 2px #427388;
      box-shadow: inset 0 0 20px #A39743, 0 0 20px #A39743;
      outline-color: #A39743;
    }
  }
`

const EventDetails = (props) => {

  const {eventList, eventID, selectedEvent, findEvent, addRSVP, addFavorite} = props;

  const displayPerformers = () => {
    console.log(selectedEvent);
    const performers = selectedEvent.artists.map(artist => {
      if (selectedEvent.artists.indexOf(artist) === selectedEvent.artists.length -1) {
        return `& ${artist.name}`
      } else {
        return `${artist.name}, `
      }
    })
    return performers;
  }

  const displayLabels = () => {
    const labels = selectedEvent.labels.map((label, key) => {
      return(<p key={key}>{label}</p>)
    })
    return labels;
  }

  const displayEventDetails = () => {
    return (
      <EventWrapper>
        <InfoWrapper>
          <h2>{selectedEvent.title} | {selectedEvent.location.name}</h2>
          <ButtonWrapper>
            <button onClick={()=> addRSVP(eventID)}>RSVP</button>
            <button>Share</button>
            <button onClick={()=> addFavorite(eventID)}>Add Favorite</button>
          </ButtonWrapper>
          <h4>{selectedEvent.description}</h4>
          <h3>Performers: {displayPerformers()}</h3>
          <h3>Cost: ${selectedEvent.cost}</h3>
          <h3>Date: {selectedEvent.date}</h3>
          <h3>Start time: {selectedEvent.start_time}, End time: {selectedEvent.end_time}</h3>
          <h3>Address: {selectedEvent.location.address}</h3>
          <h3>Tags: {displayLabels()}</h3>
        </InfoWrapper>
        <ImgWrapper>
          <img src={selectedEvent.image} alt={selectedEvent.title} />
        </ImgWrapper>
      </EventWrapper>
    )
  }

  useEffect(() => {
    findEvent(eventList, eventID)
  }, [findEvent, eventID, eventList])

  return (
    <section>
      <Header />
        {!!selectedEvent && displayEventDetails()}
    </section>
  )
}

const mapStateToProps = state => {
  return {
    eventList: state.EventContainerReducer.eventList.data,
    selectedEvent: state.EventDetailsReducer.selectedEvent
  }
}

const mapDispatchToProps = dispatch => {
  return {
    findEvent: (events, eventID) => dispatch(findEvent(events, eventID)),
    addRSVP: (eventID) => dispatch(addRSVP(eventID)),
    addFavorite: (eventID) => dispatch(addFavorite(eventID)),
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps)(EventDetails)
;
