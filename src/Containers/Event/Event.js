import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Event = (props) => {
  return(
    <Wrapper>
      <p>{props.name}</p>
      <p>{props.date}</p>
      <p>{props.time}</p>
      <p>{props.location}</p>
      <p>{props.tags}</p>
    </Wrapper>
  );
}



export default Event;