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
`;
const SplashPage = () => {
  return (
    <Wrapper>
      <h1>
        Welcome to Drag Time!
      </h1>
      <NavLink to='/home'>Go to my events</NavLink>
    </Wrapper>
  );
}

export default SplashPage;