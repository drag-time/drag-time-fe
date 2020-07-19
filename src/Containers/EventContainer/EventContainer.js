import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../Components/Header/Header.js';
import Event from '../Event/Event.js';
import events from './eventsList.js';
// import SearchForm from '../SearchForm/SearchForm.js';

const EventContainer = () => {
  const eventsToDisplay = events.map(event => {
    return(
      <Event {...event}/>
    )
  })
  return(
    <section>
      <Header />
      {/* <SearchForm /> */}
      <h2>Event Feed</h2>
      {eventsToDisplay}
    </section>
  );
}

export default EventContainer;