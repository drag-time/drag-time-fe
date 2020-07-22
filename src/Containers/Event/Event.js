import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  margin: auto;
  width: 80%;
  padding: 2%;
  display: flex;
  background-color: black;
  opacity: 80%;
  color: white;
  font-family: 'Raleway', sans-serif;
  border-radius: 10px;

  h3 {
    font-size: 2.3em;
    border-bottom: 1px solid white;
    padding-bottom: 1%;
  }

  h4 {
    font-size: 1.5em
  }

  h5 {
    font-size: 1em;
    margin: 2% auto;
  }
`;

const InfoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;

  p {
    display: inline-block;
    font-size: .7em;
    padding: 2%;
    background-color: #57123A;
    margin: 1%;
    border-radius: 10px;
  }
`

const ImgWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;

  img {
    width: 250px;
    height: 250px;
    margin: auto;
  }
`

const Event = (props) => {

  const performers = props.artists.map((artist)=> {
    if (props.artists.indexOf(artist) === props.artists.length -1) {
      return `& ${artist.name}`
    } else {
      return `${artist.name}, `
    }
  });

  const tags = props.labels.map((label, key) => {
    return(<p key={key}>{label}</p>)
  });


  return(
    <Wrapper>
      <InfoWrapper>
        <h3>{props.title} | {props.location.name}</h3>
        <h5>{props.description}</h5>
        <h4>Date of event: {props.date}</h4>
        <h4>Performers: {performers}</h4>
        <h4>Tags: {tags}</h4>
        <NavLink to={`/event-details/${props.id}`}>See Info</NavLink>
      </InfoWrapper>
      <ImgWrapper>
        <img src={props.image} alt={props.title}/>
      </ImgWrapper>
    </Wrapper>
  );
}



export default Event;
