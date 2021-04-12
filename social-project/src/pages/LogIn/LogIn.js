import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './LogIn.css';
import LogInImage from './LogInImage.png';

import axios from 'axios';
// import {​​​​​ REFRESH_TOKEN_STORAGE, TOKEN_STORAGE }​​​​​ from './constants';
// import ENV_HOST from './constants/env';

class LogIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loginStatus: [],
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleLoginRequest = this.handleLoginRequest.bind(this);
    };

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    };

    handleLoginRequest() {
        // const requestOptions = {
        //     method: 'GET',
        //     headers: { 
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //         'username': 'test',
        //         'password': 'test'
        //     }
        // };
        // const response = await fetch("http://localhost:8080/app-api/login", requestOptions);
        // const data = await response.json();
        // this.setState({loginStatus: data});
        // console.log(this.state.loginStatus);

        const options = {
            headers: {
                'username': 'test',
                'password': 'test',
            }
          };
          
          axios
            .get('http://localhost:8080/app-api/login', options)
            .then(response => {
                console.log('respppppppp');
                console.log(response);
            })
            .catch(error => {
                console.log('errrrrrrr');
                console.log(error);
            });
    };

    

    // useEffect(() => {​​​​​
    //     setLoading(true);
    //     axios('http://localhost:8080/app-api/login', {​​​​​
    //         headers: {​​​​​ username: "test", password: "test" }​​​​​,
    //         params: {​​​​​
    //                 // onlyJobWithTriggers: jobTriggerOnly,
    //         }​​​​​,
    //     }​​​​​)
    //         .then((res) => {​​​​​
    //             console.log(res);
    //             // setData(res.data.responseObjects.jobNames);
    //             // setCount(res.data.responseObjects.pagination.totalItems);
    //     }​​​​​)
    //         // .then(() => setLoading(false))
    //         .catch((error) => {​​​​​
    //             // enqueueSnackbar(`Error: ${​​​​​error}​​​​​`, {​​​​​
    //             // variant: 'error',
    //             console.log(error);
    //         }​​​​​);
    //     }​​​​​);
    // }​​​​​);

    render() {

        // const ENV_HOST = "localhost:8080";


        // axios.defaults.baseURL = "https://​​​​​localhost:8080/app-api/login";
        // axios.interceptors.request.use(
        //    (request) => {​​​​​
        //       const token =
        //          localStorage.getItem(TOKEN_STORAGE) ||
        //          sessionStorage.getItem(TOKEN_STORAGE);
        // if (request.url !== 'headers/get-build-version-and-get-site-name') {​​​​​
        //          request.headers.Authorization = token;
        // }​​​​​
        //       console.log('request: ', request);
        // return request;
        // }​​​​​,
        // (error) => {​​​​​
        //       return Promise.reject(error);
        // }​​​​​
        // );
        // axios.interceptors.response.use(
        //    (response) => {​​​​​
        //       console.log('response success: ', response);
        // return response;
        // }​​​​​,
        // (error) => {​​​​​
        //       console.log('response ERROR: ', error);
        // if (
        //          error.response.status === 401 &&
        //          window.location.pathname !== '/login'
        // ) {​​​​​
        //          let refreshToken =
        //             localStorage.getItem(REFRESH_TOKEN_STORAGE) ||
        //             sessionStorage.getItem(REFRESH_TOKEN_STORAGE);
        // console.log('REFRESH-token ', refreshToken);
        // window.location.replace(window.location.origin + '/login');
        // }​​​​​
        //       return Promise.reject(error);
        // }​​​​​
        // );
        // const loginAxios = axios.create({​​​​​
        //    baseURL: "https://​​​​​localhost:8080/app-api/login",
        // }​​​​​);

        return (
            <div> 
                <div className="wrapper">
                        <div className="navigation-bar">
                            <a 
                                href="/" 
                                className="title links">Incidents Reporting Platform</a>
                            <a 
                                href="/all-incidents"
                                className="links">INCIDENTS</a>
                            <a 
                                href="/public-institutions"
                                className="links">PUBLIC INSTITUTIONS</a>
                            <a 
                                href="/about-us"
                                className="links">ABOUT US</a>
                            <div className='buttonWrapper'>
                                <button className="button">
                                    <a
                                        href="/"
                                        className="button"
                                    > Register </a>
                                </button>
                            </div>
                            
                        </div>
                    </div>
                    <div className="logInWrapper"> 
                        <img src={LogInImage} className="logInImage" />
                        <div className="registerBox logInBox">
                            <p className="welcome" > Login </p> 
                            <p className="registerLabel"> Username </p>
                            <div className="registerInputPieceWrapper" >
                                <input 
                                    type="text" 
                                    name="username"
                                    value={this.state.username} 
                                    onChange={this.handleInputChange}
                                    className="registerInput" />
                            </div>
                            <p>
                                {/* {this.state.loginStatus} */}
                            </p>
                            <p className="registerLabel">Password</p>
                            <div className="registerInputPieceWrapper" >
                                <input 
                                    type="password" 
                                    name="password"
                                    value={this.state.password} 
                                    onChange={this.handleInputChange}
                                    className="registerInput" />
                            </div>
                            <div className="termsAndConditions logInRemember">
                                <div className="allRemember">
                                    <input type="checkbox" /> 
                                    <p className="accept"> Remember me </p>
                                </div>
                                <a href="https://dexonline.ro/" className="forgotPassword" > Forgot password? </a>
                            </div>
                            <button 
                                className="registerButton" 
                                onClick={this.handleLoginRequest}> 
                                    Sign in 
                            </button>
                            <div className="logInQuestion" >
                                <p className="noAccount" > Don't have an account? </p>
                                <a href="/" className="signUp" > Sign up </a>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
};

export default withRouter(LogIn);