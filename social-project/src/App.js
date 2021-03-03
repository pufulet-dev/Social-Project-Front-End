import React, {Component} from 'react';
import './App.css';

// import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import AllIncidents from "./pages/AllIncidents/AllIncidents.js";
import Home from './pages/Home/Home.js';
import SearchIncident from './pages/SearchIncident/SearchIncident.js';
import LogIn from './pages/LogIn/LogIn.js';

class App extends Component {

  state = {
    aux: "",
  };

  render() {
    return (
      <Router>
        <div className="App">
                <Route 
                  path="/"
                  exact  
                  component={Home} />
                <Route 
                  path="/all-incidents" 
                  exact
                  component={AllIncidents} />
                <Route 
                  path="/search-incident"
                  exact
                  component={SearchIncident} />
                <Route 
                  path="/login"
                  exact
                  component={LogIn} />
        </div>
      </Router>
    );
  }
};

export default App;
