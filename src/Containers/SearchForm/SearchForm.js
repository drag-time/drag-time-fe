import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 20%;
  padding: 1%;
  background-color: #57123A;
  height: 100%;
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
    font-size: 1.1em;
    font-family: 'Raleway', sans-serif;
    color: white;
    border-bottom: 1px solid white;
    margin: 2%;

    /* :hover input ~ span {
      background-color: #A39743;
      outline-offset: 15px;
      text-shadow: 1px 1px 2px #427388;
      box-shadow: inset 0 0 40px #A39743, 0 0 40px #A39743;
      outline-color: #A39743;
    } */

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
      cursor: pointer;
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

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      eighteenPlus: false,
      twentyOnePlus: false,
      coverCharge: false,
      dragKing: false,
      dragQueen: false,
      ballroom: false,
      pageant: false,
      trivia: false,
      musical: false,
      tribute: false,
      horror: false
    }
  }

  trackKeyword = (e) => {
    this.setState({
      keyword: e.target.value
    });
  };

  trackLabels = (e) => {
    const label = e.target.id;
    if (!this.state[label]) {
      this.setState({
        [label]: true
      })
    } else {
      this.setState({
        [label]: false
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <Wrapper>
        <form>
          <input onChange={this.trackKeyword} type="text" placeholder="Search by keyword..." />
          <label>18+
            <input type="checkbox" />
            <span onClick={this.trackLabels} id="eighteenPlus"></span>
          </label>
          <label>21+
            <input type="checkbox" />
            <span onClick={this.trackLabels} id="twentyOnePlus"></span>
          </label>
          <label>Cover Charge
            <input type="checkbox" />
            <span onClick={this.trackLabels} id="coverCharge"></span>
          </label>
          <label>Drag King
            <input type="checkbox" />
            <span onClick={this.trackLabels} id="dragKing"></span>
          </label>
          <label>Drag Queen
            <input type="checkbox" />
            <span onClick={this.trackLabels} id="dragQueen"></span>
          </label>
          <label>Ballroom
            <input type="checkbox" />
            <span onClick={this.trackLabels} id="ballroom"></span>
          </label>
          <label>Pageant
            <input type="checkbox" />
            <span onClick={this.trackLabels} id="pageant"></span>
          </label>
          <label>Trivia
            <input type="checkbox" />
            <span onClick={this.trackLabels} id="trivia"></span>
          </label>
          <label>Musical
            <input type="checkbox" />
            <span onClick={this.trackLabels} id="musical"></span>
          </label>
          <label>Tribute
            <input type="checkbox" />
            <span onClick={this.trackLabels} id="tribute"></span>
          </label>
          <label>Horror
            <input type="checkbox" />
            <span onClick={this.trackLabels} id="horror"></span>
          </label>
          <button>Submit Search</button>
        </form>
      </Wrapper>
    )
  }
}

export default SearchForm;
