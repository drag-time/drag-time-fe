import React, { useEffect } from 'react';
import Header from '../../Components/Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import { connect } from 'react-redux';




const MyEvents = (props) => {
  
  const { eventList, userRSVPs, userFavorites } = props;

  const displayRSVPs = () => {
    const rsvpsToDisplay = [];
    userRSVPs.map((rsvpID)=> {
      return rsvpsToDisplay.push(eventList.find(event => event.id === rsvpID))
    })
    return rsvpsToDisplay
  };

  const displayFavorites = () => {
    const favoritesToDisplay = userFavorites.map(event => {
      return(<p>{event.title}</p>)
    })
    return favoritesToDisplay
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
        {!!userRSVPs && displayRSVPs()}

      </section>
      <section>
        <h3>Favorited Events</h3>
        {!!userFavorites && displayFavorites()}
      </section>
    </section>
  );
}

const mapStateToProps = state => {
  return {
    userFavorites: state.savedEvents.userFavorites,
    userRSVPs: state.savedEvents.userRSVPs,
    eventList: state.EventContainerReducers.eventList.data,
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
