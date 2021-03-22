import react, { Component } from 'react';
import './SearchIncident.css';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import peopleImage from './SearchIncidentPhoto.png';
import { withRouter } from 'react-router-dom';

// import { connect } from 'react-redux';

class SearchIncident extends Component {

    render() {

        return (
            <div> 
                <NavigationBar />
                <div className="searchIncidentWrapper" >
                    <div className="addIncident" >
                        {/* <span className="start" >Start</span> */}
                        <a href="/add-incident" className="start">
                            Start
                        </a>
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
                            <option> Bălți </option>
                            <option> Bender </option>
                            <option> Briceni </option>
                            <option> Cahul </option>
                            <option> Cantemir </option>
                            <option> Călărași </option>
                            <option> Căușeni </option>
                            <option> Ceadîr-Lunga </option>
                            <option> Chișinău </option>
                            <option> Cimișlia </option>
                            <option> Comrat </option> 
                            <option> Criuleni </option>
                            <option> Dondușeni </option>
                            <option> Drochia </option>
                            <option> Dubăsari </option>
                            <option> Edineț </option>
                            <option> Fălești </option>
                            <option> Florești </option>
                            <option> Glodeni </option>
                            <option> Hîncești </option>
                            <option> Ialoveni </option>
                            <option> Leova </option>
                            <option> Nisporeni </option>
                            <option> Ocnița </option>
                            <option> Orhei </option>
                            <option> Rezina </option>
                            <option> Rîșcani </option>
                            <option> Sîngerei </option>
                            <option> Soroca </option>
                            <option> Strășeni </option>
                            <option> Șoldănești </option>
                            <option> Ștefan Vodă </option>
                            <option> Taraclia </option>
                            <option> Telenești </option>
                            <option> Tiraspol </option>
                            <option> Ungheni </option>
                            <option> U.T.A.G. </option>
                            <option> U.T.A.N. </option>
                        </select>
                        <select>
                            <option> Category </option>
                            <option> Alimentation </option>
                            <option> Comunication </option>
                        </select>
                        <button className="searchButton" > 
                            <a href="/all-incidents">
                                Search
                            </a>
                        </button>
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

export default withRouter(SearchIncident);