import React, {Component} from 'react';
import './App.css';
import Home from './pages/Home.js';

class App extends Component {

  state = {
    aux: "",
  };

  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
