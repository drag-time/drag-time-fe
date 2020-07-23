import React, { useEffect } from 'react';
import Header from '../../Components/Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import Event from '../Event/Event.js';
import { connect } from 'react-redux';




const MyEvents = (props) => {
  
  const { eventList, userRSVPs, userFavorites } = props;

  const displaySavedEvent = (saveType) => {
    const savedTypeToDisplay = [];
    saveType.map((ID)=> {
      return savedTypeToDisplay.push(eventList.find(event => event.id === ID))
    })
    const savedTypeToRender = savedTypeToDisplay.map(event =>{
      return(
        <Event key={event.id} {...event}/>
      )
    })
    return savedTypeToRender
  };


  // useEffect(() => {
  //   getRSVPs();
  //   getFavorites();
  // }, [getRSVPs, getFavorites])

  return(
    <section>
      <Header />
      <SearchForm />
      <h2>My<span>Events</span></h2>
      <section>
        <h3>Events I'm Attending</h3>
        {!!userRSVPs && displaySavedEvent(userRSVPs)}

      </section>
      <section>
        <h3>Favorited Events</h3>
        {!!userFavorites && displaySavedEvent(userFavorites)}
      </section>
    </section>
  );
}

const mapStateToProps = state => {
  return {
    userFavorites: state.savedEvents.userFavorites,
    userRSVPs: state.savedEvents.userRSVPs,
    eventList: state.EventContainerReducer.eventList.data,
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps)(MyEvents)
;
