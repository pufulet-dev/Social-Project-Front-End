import React, {Component} from 'react';
import './App.css';

// import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import AllIncidents from "./pages/AllIncidents/AllIncidents.js";
import Home from './pages/Home/Home.js';
import LogIn from './pages/LogIn/LogIn.js';
import AddIncident from './pages/AddIncident/AddIncident.js';
import IncidentPage from './pages/IncidentPage/IncidentPage.js';
import PersonalCabUser from './pages/PersonalCabUser/PersonalCabUser.js';

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
                  path="/login"
                  exact
                  component={LogIn} />
                <Route 
                  path="/add-incident"
                  exact
                  component={AddIncident} />
                <Route 
                  path="/incident-page"
                  exact
                  component={IncidentPage} />
                <Route 
                  path="/user-personal-cabinet"
                  exact
                  // component={PersonalCabUser}
                  render={(props) => <PersonalCabUser {...props}/>} />
        </div>
      </Router>
    );
  }
};

{/* <Route path="/test/new" render={(props) => <NewTestComp {...props}/>}/> */}


export default App;
