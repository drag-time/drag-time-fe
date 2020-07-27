import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../Components/Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js'
import Event from '../Event/Event.js';
import { connect } from 'react-redux';
import { getEvents } from '../../Actions';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 100%;
`

const BodyWrapper = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-height: 90%;
`

const EventWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 2%;
  background-image: url('https://images.unsplash.com/photo-1593414220166-085caeae0382?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60');
  background-size: cover;
  background-position: center;
  overflow: scroll;


  h2 {
    font-family: 'MuseoModerno', cursive;
    font-weight: 100;
    font-size: 2em;
    color: white;
    text-transform: uppercase;
    background-color: rgba(0,0,0,0.8);
    padding: .5% 1%;
    border-radius: 15px;

    span {
      font-weight: 500;
      color: #2299A3;
    }
  }
`

const EventContainer = (props) => {

  const {eventList, getEvents} = props;

  const displayEvents = () => {
    if (eventList.length === 0 ){
      return 'keep waiting'
    }
    const eventsToDisplay = eventList.data.map((event)=> {
      return(
        <Event key={event.id} {...event} />
      )
    })
    return eventsToDisplay;
  }

  useEffect(() => {
    getEvents();
  }, [getEvents])

  return(
    <Wrapper>
      <Header />
      <BodyWrapper>
        <SearchForm />
        <EventWrapper>
          <h2>Event<span>Feed</span></h2>
          {!!eventList && displayEvents()}
        </EventWrapper>
      </BodyWrapper>
    </Wrapper>
  );
}

const mapStateToProps = state => {
  return {
    eventList: state.EventContainerReducer.eventList,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getEvents: () => dispatch(getEvents())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(EventContainer)
;
