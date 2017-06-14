import React, { Component } from 'react';
import './App.css';
import ModalComponent from './AddRecipe'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="App">
        <ModalComponent />
      </div>
    );
  }
}

export default App;
