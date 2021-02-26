import react, { Component } from 'react';
import './SearchIncident.css';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import peopleImage from './SearchIncidentPhoto.png';
import { connect } from 'react-redux';

class SearchIncident extends Component {

    render() {

        return (
            <div> 
                <NavigationBar />
                <div className="searchIncidentWrapper" >
                    <div className="addIncident" >
                        <span className="start" >Start</span>
                        <span>Add</span>
                        <span>new</span>
                        <span className="incident" >incident</span>
                        <span>now!</span>
                    </div>
                    <p className="searchText" >Search reported incidents using the filters below.</p>
                    <span className="filtersWrapper" >
                        <input 
                            type="text" 
                            placeholder="Reported By" 
                            className="reportedByInput" />
                        <select >
                            <option> Location </option>
                            <option> Anenii Noi </option>
                            <option> Basarabeasca </option>
                            <option> Briceni </option>
                            <option> Cahul </option>
                            <option> Cantemir </option>
                            <option> Călărași </option>
                            <option> Chișinău </option>
                        </select>
                        <select>
                            <option> Category </option>
                            <option> Alimentation </option>
                            <option> Comunication </option>
                        </select>
                        <button className="searchButton" > Search </button>
                    </span>
                    <p className="quoteAndAuthor">
                            <span className="quote"> Lasting solution to many social problems will be found only as we each learn to say, 'I am society'. </span>
                            <span className="quoteAuthor"> Mal Fletcher </span>
                    </p>
                    <img src={peopleImage} className="peopleImage" />
                </div>
            </div>
        );
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
        // toggle: () => dispatch({type:"TOGGLE"})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchIncident);