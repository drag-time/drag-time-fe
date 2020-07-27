import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { addRSVP, addFavorite, removeRSVP, removeFavorite } from '../../Actions';


const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  margin: auto;
  width: 80%;
  padding: 2%;
  display: flex;
  background-color: rgba(0,0,0,0.8);
  color: white;
  font-family: 'Raleway', sans-serif;
  border-radius: 10px;
  margin-top: 10px;

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
const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  font-size: 2em;
  border: none;
  font-family: 'Raleway', sans-serif;
  font-size: 1.2em;
  border: none;
  background-color: #A39743;
  color: white;
  padding: 1% 2%;
  border-radius: 15px;
  margin: 2%;
  width: 30%;
  text-align: center;

  :hover {
    cursor: pointer;
    outline-offset: 15px;
    text-shadow: 1px 1px 2px #427388;
    box-shadow: inset 0 0 20px #A39743, 0 0 20px #A39743;
    outline-color: #A39743;
  }
`

const ButtonWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  
  .small-text {
    font-size: .8em;
  } 

  button {
    font-family: 'Raleway', sans-serif;
    font-size: 1.2em;
    border: none;
    background-color: #A39743;
    color: white;
    padding: 1% 2%;
    border-radius: 15px;
    margin: 2%;
    width: 30%;

    :hover {
      cursor: pointer;
      outline-offset: 15px;
      text-shadow: 1px 1px 2px #427388;
      box-shadow: inset 0 0 20px #A39743, 0 0 20px #A39743;
      outline-color: #A39743;
    }
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

  const checkIfRSVP = () => {
    const checkRSVP = props.userRSVPs.filter(eventID => props.id === eventID);
    if (!!checkRSVP.length){
      return (
        <button onClick={()=> props.removeRSVP(props.id)} className='small-text'>Remove RSVP</button>
      )
    } else {
      return (
        <button onClick={()=> props.addRSVP(props.id)}>RSVP</button>
      )
    }
  };

  const checkIfFavorite = () => {
    const checkFavorite = props.userFavorites.filter(eventID => props.id === eventID);
    if (!!checkFavorite.length){
      return (
        <button onClick={()=> props.removeFavorite(props.id)} className='small-text'>Remove Favorite</button>
      )
    } else {
      return (
        <button onClick={()=> props.addFavorite(props.id)}>Favorite</button>
      )}
  }


  return(
    <Wrapper>
      <InfoWrapper>
        <h3>{props.title} | {props.location.name}</h3>
        <h5>{props.description}</h5>
        <h4>Date of event: {props.date}</h4>
        <h4>Performers: {performers}</h4>
        <h4>Tags: {tags}</h4>
        <ButtonWrapper>
          {!!props.userRSVPs && checkIfRSVP()}
          {!!props.userFavorites && checkIfFavorite()}
          <NavLinkStyled to={`/event-details/${props.id}`}>See Info</NavLinkStyled>
        </ButtonWrapper>
      </InfoWrapper>
      <ImgWrapper>
        <img src={props.image} alt={props.title}/>
      </ImgWrapper>
    </Wrapper>
  );
}

const mapStateToProps = state => {
  return {
    userFavorites: state.savedEvents.userFavorites,
    userRSVPs: state.savedEvents.userRSVPs,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addRSVP: (eventID) => dispatch(addRSVP(eventID)),
    addFavorite: (eventID) => dispatch(addFavorite(eventID)),
    removeRSVP: (eventID) => dispatch(removeRSVP(eventID)),
    removeFavorite: (eventID) => dispatch(removeFavorite(eventID)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Event)
;

