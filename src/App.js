//Import Nesc files needed

import React, { Component } from 'react';
import './App.css';
import Todos from './componets/Todos'


class App extends Component {
  
  state = {
    Todos: [
      {
        id:1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id:2,
        title: 'Dinner with gf',
        completed: false
      },
      {
        id:3,
        title: 'Meeting with boss',
        completed: false
      },
    ]
  }

  render() {
    return(
      <div className="App">
      <Todos Todos={this.state.Todos} />
      </div>
    );
  }
}

export default App;
