import React, { Component } from 'react';
import { render } from 'react-dom';
import './NavigationBar.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import SearchIncident from '../../pages/SearchIncident/SearchIncident.js';

class NavBar extends Component {

    // handleClick = () => {
    //     this.props.history.push(this.props.path);
    // }

    render() {
        return (
            <Router>
                <div className="wrapper">
                    <div className="navigation-bar">
                        {/* <a 
                            href="/" 
                            className="title links">Incidents Reporting Platform</a> */}
                        <Link 
                            to="/"
                            className="title links">
                                Incidents Reporting Platform
                        </Link>
                        {/* <a 
                            href="/all-incidents"
                            className="links">INCIDENTS</a> */}
                        <Link
                            to="all-incidents"
                            className="links">
                                INCIDENTS
                        </Link>
                        {/* <a 
                            href="/public-institutions"
                            className="links">PUBLIC INSTITUTIONS</a> */}
                        <Link
                            to="/public-institutions"
                            className="links">
                                PUBLIC INSTITUTIONS
                        </Link>
                        {/* <a 
                            href="/about-us"
                            className="links">ABOUT US</a> */}
                        <Link
                            to="/about-us"
                            className="links">
                                ABOUT US
                        </Link>
                        <div className="buttonWrapper">
                            {/* <Route  path={this.props.path}>
                                <button onClick={this.props.toggle} className="button"> 
                                    {this.props.toggleLogInRegister} 
                                </button>
                            </Route> */}

                            <Link exact to={this.props.path} component={SearchIncident} >
                                <button onClick={this.props.toggle} className="button">
                                     {this.props.toggleLogInRegister} 
                                </button>
                            </Link>
                        </div>
                        
                    </div>
                </div>   
            </Router>
            
        )
    }
};

const mapStateToProps = state => {
    return {
        counter: state.counter, 
        toggleLogInRegister: state.toggleLogInRegister,
        path: state.path,       
    };
}

const mapDispatchToProps = dispatch => {
    return {
        toggle: () => dispatch({type:"TOGGLE"})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);