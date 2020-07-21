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
`

const BodyWrapper = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
`

const EventWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
`

const EventContainer = (props) => {

  const displayEvents = () => {
    if (props.eventList.length === 0 ){
      return 'keep waiting'
    }
    const eventsToDisplay = props.eventList.data.map((event)=> {
      return(
        <Event key={event.id} {...event} />
      )
    })
    return eventsToDisplay;
  }

  useEffect(() => {
    props.getEvents();
  })

  return(
    <Wrapper>
      <Header />
      <BodyWrapper>
        <SearchForm />
        <EventWrapper>
          <h2>Event Feed</h2>
          {!!props.eventList && displayEvents()}
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
