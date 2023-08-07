import React, { Component } from 'react';
import CardList from './Components/CardList';
import './App.css';

const usersArr = [];

class App extends Component {
  state = {
    data: [],
    visible: true

  }

  componentDidMount() {
    fetch('https://dummyjson.com/users?limit=15')
      .then(response => response.json())
      .then(json => json.users.forEach(u => usersArr.push(u)))
      .then(data => this.setState({ data: data }));
  }

  render() {
    const { visible } = this.state;
    const buttonText = visible ? 'Hide monsters' : 'Show monsters';

    return (
      <div className='tc'>
        <h1 className='creepster'>Monster Book</h1>
        <h3 className='pa2'> All your monsters in one place! </h3>
        <button
          onClick={() => {
            this.setState({ visible: !visible });
          }}
        >
          {buttonText}
        </button>
        {visible ?
          
            <CardList usersArr={usersArr} />
          
          : null}
      </div>
    );
  }
}

export default App;
