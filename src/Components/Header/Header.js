import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const Wrapper = styled.section`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black; 
`
const NavLinkStyled = styled(NavLink)`
  width: 20%;
  text-align: center;
  text-decoration: none;
`;

const LinkContainer = styled.section`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Header = () => {
  return (
    <Wrapper>
      <h1>Drag Time</h1>
      <LinkContainer>
        <NavLinkStyled to='/home'>Home</NavLinkStyled>
        <NavLinkStyled to='/create-event'>Create Event</NavLinkStyled>
        <NavLinkStyled to='/my-events'>My Events</NavLinkStyled>
      </LinkContainer>
    </Wrapper>
  );
}

export default Header;