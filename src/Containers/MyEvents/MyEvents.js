import React from 'react';
import Header from '../../Components/Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import Event from '../Event/Event.js';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: scroll;
  height: 100%;
`

const BodyWrapper = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 90%;
`

const EventWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2%;
  background-image: url('https://images.unsplash.com/photo-1593414220166-085caeae0382?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60');
  background-size: cover;
  overflow: scroll;
  height: 100%;


  h2 {
    font-family: 'MuseoModerno', cursive;
    font-weight: 100;
    font-size: 2em;
    color: white;
    text-transform: uppercase;
    background-color: black;
    padding: .5% 1%;
    opacity: 80%;
    border-radius: 15px;

    span {
      font-weight: 500;
      color: #2299A3;
    }
  }


  .my-event-title {
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    align-items: center;
    align-self: center;
    margin: 20px 10%;
    width: 80%;
    font-family: 'Raleway', sans-serif;
    font-weight: 100;
    font-size: 1.8em;
    color: white;
    text-transform: uppercase;
    background-color: black;
    padding: .5% 1%;
    opacity: 80%;
    border-radius: 15px;
  }
`



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

  return(
    <Wrapper>
      <Header />
      <BodyWrapper>
        <SearchForm />
        <EventWrapper>
          <section>
            <h2>My<span>Events</span></h2>
            <h3 className="my-event-title">Events I'm Attending</h3>
            {!!userRSVPs && displaySavedEvent(userRSVPs)}
          </section>
          <section>
            <h3 className="my-event-title">Favorited Events</h3>
            {!!userFavorites && displaySavedEvent(userFavorites)}
          </section>
        </EventWrapper>
      </BodyWrapper>
    </Wrapper>
  );
}

const mapStateToProps = state => {
  return {
    userFavorites: state.savedEvents.userFavorites,
    userRSVPs: state.savedEvents.userRSVPs,
    eventList: state.EventContainerReducer.eventList.data,
  }
}


export default connect(
  mapStateToProps,
  null)(MyEvents)
;
