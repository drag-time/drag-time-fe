import React from 'react';
import styled from 'styled-components';
import Header from '../../Components/Header/Header.js';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  font-family: 'Raleway', sans-serif;
  width: 100%;
  height: 100%;
  background-image: url("https://images.unsplash.com/photo-1566055909643-a51b4271aa47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60");
  background-size: cover;
  color: white;
`

const FormWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-bottom: 2%;

  input {
    font-family: 'Raleway', sans-serif;
    padding: 1.2%;
    font-size: 1.3em;
    border-radius: 10px;
    border: none;
    color: black;
    opacity: 70%;

    ::placeholder {
      color: black;
    }
  }

  h2 {
    font-family: 'MuseoModerno', cursive;
    font-weight: 100;
    font-size: 2em;
    color: white;
    text-transform: uppercase;
    padding: .5% 1%;
    border-radius: 15px;
    text-align: center;

    span {
      font-weight: 500;
      color: #2299A3;
    }
  }
`

const RowOneWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-self: center;
  width: 95%;
  height: 40%;
  background-color: rgba(0,0,0,0.8);
  padding-top: 1%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30%;

    img {
      max-width: 100%;
      max-height: 100%;
      margin-top: 2%;
    }

    .time-wrapper {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-around;
      align-items: center;

      label {
        font-size: 1.2em;
      }

      input {
        width: 55%;
        margin: 2%;
      }
    }

    textarea {
      width: 100%;
      height: 100%;
      margin: 2%;
      font-family: 'Raleway', sans-serif;
      font-size: 1.2em;
      padding: 1.2%;
      border-radius: 10px;
      opacity: 70%;

      ::placeholder {
        color: black;
      }
    }
  }
`

const RowTwoWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: rgba(0,0,0,0.8);
  align-self: center;
  align-items: center;
  width: 95%;
  height: 20%;
  padding: 1%;

  select {
    height: 33%;
    width: 16%;
    font-family: 'Raleway', sans-serif;
    border-radius: 10px;
    opacity: 70%;
  }

  input {
    height: 25%;
    width: 16%;
  }
`

const RowThreeWrapper = styled.section`
  display: flex;
  flex-direction: row;
  background-color: rgba(0,0,0,0.8);
  justify-content: space-around;
  align-content: center;
  align-self: center;
  width: 95%;
  height: 35%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  section {
    display: grid;
    width: 80%;
    justify-content: space-around;
    grid-template-columns: 20% 20% 20% 20%;

    input {
      margin: 5%;
    }
  }

  button {
    height: 15%;
  }
`

const CreateEvent = (props) => {
  return(
    <Wrapper>
      <Header />
      <FormWrapper>
        <h2>Create<span>Event</span></h2>
        <RowOneWrapper>
          <section>
            <input type="text" placeholder="Name of Event" />
            <input type="date" />
            <section className="time-wrapper">
              <label for="startTime">Start Time</label>
              <input id="startTime" type="time" />
            </section>
            <section className="time-wrapper">
              <label for="endTime">End Time</label>
              <input id="endTime" type="time" />
            </section>
          </section>
          <section>
            <textarea rows="15" placeholder="Event Description..."></textarea>
          </section>
          <section>
            <img src="https://images.unsplash.com/photo-1553242072-345b34e7b55b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
          </section>
        </RowOneWrapper>
        <RowTwoWrapper>
          <select id="existingLocations">
            <option value="">Existing Locations</option>
            <option value="location1">Location 1</option>
            <option value="location2">Location 2</option>
            <option value="location3">Location 3</option>
            <option value="location4">Location 4</option>
          </select>
          <input type="text" placeholder="New Location Title" />
          <input type="text" placeholder="Street Address" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
          <input type="number" placeholder="Zip" />
        </RowTwoWrapper>
        <RowThreeWrapper>
          <section>
            <label for="eighteenPlus">18+
              <input id="eighteenPlus" type="checkbox" />
            </label>
            <label for="twentyOnePlus">21+
              <input id="twentyOnePlus" type="checkbox" />
            </label>
            <label for="coverCharge">Cover Charge
              <input id="coverCharge" type="checkbox" />
            </label>
            <label for="dragKing">Drag King
              <input id="dragKing" type="checkbox" />
            </label>
            <label for="dragQueen">Drag Queen
              <input id="dragQueen" type="checkbox" />
            </label>
            <label for="ballroom">Ballroom
              <input id="ballroom" type="checkbox" />
            </label>
            <label for="pageant">Pageant
              <input id="pageant" type="checkbox" />
            </label>
            <label for="trivia">Trivia
              <input id="trivia" type="checkbox" />
            </label>
            <label for="musical">Musical
              <input id="musical" type="checkbox" />
            </label>
            <label for="tribute">Tribute
              <input id="tribute" type="checkbox" />
            </label>
            <label for="horror">Horror
              <input id="horror" type="checkbox" />
            </label>
          </section>
          <button>Publish Event</button>
        </RowThreeWrapper>
      </FormWrapper>
    </Wrapper>
  );
}

export default CreateEvent;
