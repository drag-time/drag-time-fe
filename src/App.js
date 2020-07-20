import React from 'react';
import './App.css';
import { GlobalStyle } from './GlobalStyle.js';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import SplashPage from './Components/SplashPage/SplashPage.js';
import EventContainer from './Containers/EventContainer/EventContainer.js'
import CreateEvent from './Containers/CreateEvent/CreateEvent.js';
import MyEvents from './Containers/MyEvents/MyEvents.js';
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

`
function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Route exact path='/'component={SplashPage}/>
      <Route path='/home'component={EventContainer}/>
      <Route path='/create-event'component={CreateEvent}/>
      <Route path='/my-events'component={MyEvents}/> 
    </Wrapper>
  );
}

export default App;
