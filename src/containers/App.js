import React, { Component } from 'react';
import './App.css';
import ModalComponent from '../components/AddRecipe'
import Recipes from '../components/Recipes'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="App">
        <Recipes />
        <ModalComponent />
      </div>
    );
  }
}

export default App;
