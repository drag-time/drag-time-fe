import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { findEvent } from '../../Actions';

const EventDetails = (props) => {

  useEffect(() => {
    props.findEvent(props.eventList, props.eventID)
  }, {})

  return (
    <section>
      {console.log(props)}
      <p>{!!props.selectedEvent && props.selectedEvent.title}</p>
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
    findEvent: (events, eventID) => dispatch(findEvent(events, eventID))
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps)(EventDetails);
