import { NavLink } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #57123A;

  h1 {
    font-family: 'MuseoModerno', cursive;
    font-weight: 100;
    font-size: 6em;
    color: white;
    text-transform: uppercase;
  }
  #time {
    font-weight: 500;
    color: #2299A3;
  }
`;

const NavLinkStyled = styled(NavLink)`
  font-family: 'Raleway', sans-serif;
  font-size: 1.6em;
  text-decoration: none;
  border: none;
  background-color: #A39743;
  color: white;
  padding: 1% 5%;
  border-radius: 15px;
  margin: 1%;

  :hover {
    cursor: pointer;
    outline-offset: 15px;
    text-shadow: 1px 1px 2px #427388;
    box-shadow: inset 0 0 40px #A39743, 0 0 40px #A39743;
    outline-color: #A39743;
  }
`
const SplashPage = () => {
  return (
    <Wrapper>
      <h1>
        Drag<span id="time">Time</span>
      </h1>
      <NavLinkStyled to='/home'>Enter</NavLinkStyled>
    </Wrapper>
  );
}

export default SplashPage;
