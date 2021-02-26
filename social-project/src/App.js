import React, {Component} from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import { Route } from "react-router-dom";

import AllIncidents from "./pages/AllIncidents/AllIncidents.js";
import Home from './pages/Home/Home.js';
import SearchIncident from './pages/SearchIncident/SearchIncident.js';

class App extends Component {

  state = {
    aux: "",
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route 
            exact
            path="/"  
            render={() => <Home /> } />
          <Route 
            exact 
            path="/all-incidents" 
            render={() => <AllIncidents /> } />
          <Route 
            exact
            path="/search-incident"
            render={() => <SearchIncident /> } />
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
