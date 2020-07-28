import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { searchForTerm, addTagToSearch, removeTagToSearch } from '../../Actions'

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

// const SearchForm = (props) => {
//
// }

// switch back to functional component
// connect to store, update form state

const SearchForm = (props) => {

    const { searchForTerm, addTagToSearch, removeTagToSearch } = props;
    // super(props);
    // this.state = {
    //   keyword: '',
    //   eighteenPlus: false,
    //   twentyOnePlus: false,
    //   coverCharge: false,
    //   dragKing: false,
    //   dragQueen: false,
    //   ballroom: false,
    //   pageant: false,
    //   trivia: false,
    //   musical: false,
    //   tribute: false,
    //   horror: false
    // }


  const trackKeyword = (e) => {
    const searchTerm = e.target.value;
    searchForTerm(searchTerm);
  };

  const trackLabels = (e) => {
    let label = '';
    switch (e.target.id) {
      case 'eighteenPlus':
        label = '18+'
        break;
      case 'twentyOnePlus':
        label = '21+'
        break;
      case 'coverCharge':
        label = 'Cover Charge'
        break;
      case 'dragKing':
        label = 'Drag King'
        break;
      case 'dragQueen':
        label = 'Drag Queen'
        break;
      case 'ballroom':
        label = 'Ballroom'
        break;
      case 'pageant':
        label = 'Pageant'
        break;
      case 'trivia':
        label = 'Trivia'
        break;
      case 'musical':
        label = 'Musical'
        break;
      case 'tribute':
        label = 'Tribute'
        break;
      case 'horror':
        label = 'Horror'
        break;
      default:
        return false;
    }
    if (e.target.checked === true){
      addTagToSearch(label)
    } else {
      removeTagToSearch(label);
    }
  }

  return (
    <Wrapper>
      <form>
        <input onChange={trackKeyword} type="text" placeholder="Search by keyword..." />
        <label>18+
          <input id="eighteenPlus" onClick={trackLabels} type="checkbox" />
          <span></span>
        </label>
        <label>21+
          <input id="twentyOnePlus" onClick={trackLabels} type="checkbox" />
          <span></span>
        </label>
        <label>Cover Charge
          <input id="coverCharge" onClick={trackLabels} type="checkbox" />
          <span></span>
        </label>
        <label>Drag King
          <input id="dragKing"onClick={trackLabels} type="checkbox" />
          <span></span>
        </label>
        <label>Drag Queen
          <input id="dragQueen" onClick={trackLabels} type="checkbox" />
          <span></span>
        </label>
        <label>Ballroom
          <input id="ballroom" onClick={trackLabels} type="checkbox" />
          <span></span>
        </label>
        <label>Pageant
          <input id="pageant"onClick={trackLabels} type="checkbox" />
          <span></span>
        </label>
        <label>Trivia
          <input id="trivia"onClick={trackLabels} type="checkbox" />
          <span></span>
        </label>
        <label>Musical
          <input id="musical" onClick={trackLabels} type="checkbox" />
          <span></span>
        </label>
        <label>Tribute
          <input id="tribute" onClick={trackLabels} type="checkbox" />
          <span></span>
        </label>
        <label>Horror
          <input id="horror" onClick={trackLabels} type="checkbox" />
          <span></span>
        </label>
      </form>
    </Wrapper>
  )
}


const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchForTerm: (searchTerm) => dispatch(searchForTerm(searchTerm)),
    addTagToSearch: (tag) => dispatch(addTagToSearch(tag)),
    removeTagToSearch: (tag) => dispatch(removeTagToSearch(tag))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
