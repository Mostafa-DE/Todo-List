import React, { Component } from 'react'
import './App.css';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return(
      <div>
        <div className="App">
          < TodoList />
        </div>  
        
      </div>
    );
  }
}

export default App;
