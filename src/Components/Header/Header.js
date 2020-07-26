import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const Wrapper = styled.section`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #57123A;
  border-bottom: 1px solid white;

  h1 {
    font-family: 'MuseoModerno', cursive;
    font-weight: 100;
    font-size: 2em;
    color: white;
    text-transform: uppercase;
    margin-left: 1%;
  }
  .time {
    font-weight: 500;
    color: #2299A3;
  }
`
const NavLinkStyled = styled(NavLink)`
  text-align: center;
  text-decoration: none;
  font-family: 'Raleway', sans-serif;
  font-size: 1em;
  border: none;
  background-color: #A39743;
  color: white;
  border-radius: 15px;
  padding: 1% 5%;
  width: 30%;

  :hover {
    cursor: pointer;
    outline-offset: 15px;
    text-shadow: 1px 1px 2px #427388;
    box-shadow: inset 0 0 10px #A39743, 0 0 10px #A39743;
    outline-color: #A39743;
  }
`;

const LinkContainer = styled.section`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Header = () => {
  return (
    <Wrapper>
      <h1>Drag<span className="time">Time</span></h1>
      <LinkContainer>
        <NavLinkStyled to='/home'>Home</NavLinkStyled>
        <NavLinkStyled to='/create-event'>Create Event</NavLinkStyled>
        <NavLinkStyled to='/my-events'>My Events</NavLinkStyled>
      </LinkContainer>
    </Wrapper>
  );
}

export default Header;
