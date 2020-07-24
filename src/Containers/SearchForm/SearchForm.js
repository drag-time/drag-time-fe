import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 20%;
  padding: 1%;
  background-color: #57123A;
  height: 90%;
  border-right: 1px solid white;

  input {
    font-family: 'Raleway', sans-serif;
    font-size: 1.3em;
    padding: 3%;
    border-radius: 10px;
    border: none;
    margin: 2%;
  }

  button {
    font-family: 'Raleway', sans-serif;
    font-size: 1.1em;
    border: none;
    background-color: #A39743;
    color: white;
    padding: 2% 5%;
    border-radius: 15px;
    margin: 5%;

    :hover {
      cursor: pointer;
      outline-offset: 15px;
      text-shadow: 1px 1px 2px #427388;
      box-shadow: inset 0 0 40px #A39743, 0 0 40px #A39743;
      outline-color: #A39743;
    }
  }

  label {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 3%;
    cursor: pointer;
    font-size: 1.1em;
    font-family: 'Raleway', sans-serif;
    color: white;
    border-bottom: 1px solid white;
    margin: 2%;

    :hover input ~ span {
      background-color: #A39743;
      outline-offset: 15px;
      text-shadow: 1px 1px 2px #427388;
      box-shadow: inset 0 0 40px #A39743, 0 0 40px #A39743;
      outline-color: #A39743;
    }

    input {
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;

      :checked ~ span {
        background-color: #A39743;
        border: 1px solid white;
      }
      :checked ~ span:after {
        display: block;
      }
    }

    span {
      height: 22px;
      width: 22px;
      background-color: #2299A3;
      margin-left: auto;
      border-radius: 10px;
      border: 1px solid white;

      :after {
        content: '';
        display: none;
        width: 5px;
        margin-left: 41%;
        margin-top: 10%;
        height: 12px;
        border: solid white;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
      }
    }
  }
`


const SearchForm = (props) => {

  return (
    <Wrapper>
      <input type="text" placeholder="Search by keyword..." />
      <label>18+
        <input type="checkbox" />
        <span></span>
      </label>
      <label>21+
        <input type="checkbox" />
        <span></span>
      </label>
      <label>Cover Charge
        <input type="checkbox" />
        <span></span>
      </label>
      <label>Drag King
        <input type="checkbox" />
        <span></span>
      </label>
      <label>Drag Queen
        <input type="checkbox" />
        <span></span>
      </label>
      <label>Ballroom
        <input type="checkbox" />
        <span></span>
      </label>
      <label>Pageant
        <input type="checkbox" />
        <span></span>
      </label>
      <label>Trivia
        <input type="checkbox" />
        <span></span>
      </label>
      <label>Musical
        <input type="checkbox" />
        <span></span>
      </label>
      <label>Tribute
        <input type="checkbox" />
        <span></span>
      </label>
      <label>Horror
        <input type="checkbox" />
        <span></span>
      </label>
      <button>Submit Search</button>
    </Wrapper>
  )
}

export default SearchForm;

//
// <TagWrapper>
//   <input type="checkbox" id="18+" name="18+" value="18+" />
//   <label for="18+">18+</label>
// </TagWrapper>
// <TagWrapper>
//   <input type="checkbox" id="21+" name="21+" value="21+" />
//   <label for="21+">21+</label>
// </TagWrapper>
// <TagWrapper>
//   <input type="checkbox" id="cover-charge" name="cover-charge" value="cover-charge" />
//   <label for="cover-charge">Cover Charge</label>
// </TagWrapper>
// <TagWrapper>
//   <input type="checkbox" id="drag-king" name="drag-king" value="drag-king" />
//   <label for="drag-king">Drag King</label>
// </TagWrapper>
// <TagWrapper>
//   <input type="checkbox" id="drag-queen" name="drag-queen" value="drag-queen" />
//   <label for="drag-queen">Drag Queen</label>
// </TagWrapper>
// <TagWrapper>
//   <input type="checkbox" id="ballroom" name="ballroom" value="ballroom" />
//   <label for="ballroom">Ballroom</label>
// </TagWrapper>
// <TagWrapper>
//   <input type="checkbox" id="pageant" name="pageant" value="pageant" />
//   <label for="pageant">Pageant</label>
// </TagWrapper>
// <TagWrapper>
//   <input type="checkbox" id="trivia" name="trivia" value="trivia" />
//   <label for="trivia">Trivia</label>
// </TagWrapper>
// <TagWrapper>
//   <input type="checkbox" id="musical" name="musical" value="musical" />
//   <label for="musical">Musical</label>
// </TagWrapper>
// <TagWrapper>
//   <input type="checkbox" id="horror" name="horror" value="horror" />
//   <label for="horror">Horror</label>
// </TagWrapper>
// <TagWrapper>
//   <input type="checkbox" id="tribute" name="tribute" value="tribute" />
//   <label for="tribute">Tribute</label>
// </TagWrapper>

//
// const TagWrapper = styled.section`
//   display: flex;
//   flex-direction: row;
//   padding: 2%;
//   align-items: center;
//
//   label {
//     font-family: 'Raleway', sans-serif;
//     font-size: 1.3em;
//   }
//   input {
//
//   }
