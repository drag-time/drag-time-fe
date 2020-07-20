import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../Components/Header/Header.js';
import Event from '../Event/Event.js';
// import events from './eventsList.js';
import { connect } from 'react-redux';
import { getEvents } from '../../Actions';
// import SearchForm from '../SearchForm/SearchForm.js';

const EventContainer = (props) => {

  const displayEvents = () => {
    if (props.eventList.length === 0 ){
      return 'keep waiting'
    }
    const eventsToDisplay = props.eventList.data.map(event => {
      return(
        <Event {...event} />
      )
    })
    return eventsToDisplay
  }

  useEffect(() => {
    props.getEvents();
  },[])

  return(
    <section>
      <Header />
      <h2>Event Feed</h2>
      {!!props.eventList && displayEvents()}
    </section>
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