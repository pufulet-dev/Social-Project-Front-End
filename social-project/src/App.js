import React, {Component} from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import { Route } from "react-router-dom";

import AllIncidents from "./pages/AllIncidents/AllIncidents.js";
import Home from './pages/Home/Home.js';

class App extends Component {

  state = {
    aux: "",
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route 
            path="/" 
            exact 
            render={() => <Home /> } />
          <Route 
            path="/all-incidents" 
            exact 
            render={() => <AllIncidents /> } />
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
