import React, { Component } from 'react';
import CardList from './CardList';
import './App.css';

const usersArr = [];

class App extends Component {
  state = {
      data: [],
      visible: true

    }


    componentDidMount(){
      fetch('https://dummyjson.com/users?limit=20')
        .then(response => response.json())
        .then(json => json.users.forEach(u => usersArr.push(u)))
        .then(data=> this.setState({ data: data }));
    }


    render(){

      const buttonText = this.state.visible ? 'Hide monsters' : 'Show monsters';

      return (
          <div className = 'tc'>
            <h1 className='creepster'>Monster Book</h1>
            <h3 className='pa2'> The app that keeps all your monsters in one place </h3>
            <button 
                onClick={()=> {
                  this.setState({ visible: !this.state.visible });
                }}
            >
              {buttonText}
            </button>
            {this.state.visible ?
              <div>
                <h2> Click on a card to see more information about the monster </h2>
                <CardList usersArr={ usersArr }/>
              </div>
            : null}
          </div>
      );
    }  
  }
 
export default App;
