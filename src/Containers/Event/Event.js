import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Event = (props) => {

  const performers = props.artists.map((artist)=> {
    return (
    <p key={artist.id}>
      {artist.name}
    </p>
    )
  });

  const tags = props.labels.map((label, key) => {
    return(<p key={key}>{label}</p>)
  });


  return(
    <Wrapper>
      <p>Date of event: {props.date}</p>
      <p>Start time: {props.start_time}</p>
      <p>Location: {props.location.name}</p>
      <p>Performers: </p>
      {performers}
      <p>Tags: </p>
      {tags}
    </Wrapper>
  );
}



export default Event;