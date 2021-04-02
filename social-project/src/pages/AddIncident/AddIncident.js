import React, {Component} from 'react';
import './AddIncident.css';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

class AddIncident extends Component {
    state = {

    }

    render () {

        return (
            <div>
                <NavigationBar />
                <div className="addIncidentWrapper">
                    <p className="addIncidentTitle">Add Incident Form</p>
                    <div className="addIncidentForm">
                        {/* 4 simple inputs */}
                        <div className="addIncidentInputWrapper">
                            <p className="registerLabel"> Incident Name: </p>
                            <div className="registerInputPieceWrapper" >
                                <input type="text" className="registerInput addIncidentInput" />
                            </div>
                        </div>
                        <div className="addIncidentInputWrapper">
                            <p className="registerLabel"> Location: </p>
                            <div className="registerInputPieceWrapper" >
                                <input type="text" className="registerInput addIncidentInput" />
                            </div>
                        </div>
                        <div className="addIncidentInputWrapper">
                            <p className="registerLabel"> Tags: </p>
                            <div className="registerInputPieceWrapper" >
                                <input type="text" className="registerInput addIncidentInput" />
                            </div>
                        </div>
                        <div className="addIncidentInputWrapper">
                            <p className="registerLabel"> Incident Type: </p>
                            <div className="registerInputPieceWrapper" >
                                <input type="text" className="registerInput addIncidentInput" />
                            </div>
                        </div>
                        {/* 3 option inputs */}
                        <div className="addIncidentInputWrapper">
                            <p className="registerLabel"> Category: </p>
                            <div className="registerInputPieceWrapper" >
                                {/* <input type="text" className="registerInput addIncidentInput" /> */}
                                <form className="addIncidentOptionInput">
                                    <select>
                                        <option>All incidents</option>
                                        <option>Full time</option>
                                        <option>Half time</option>
                                        <option>Remote</option>
                                        <option>In office</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                        <div className="addIncidentInputWrapper">
                            <p className="registerLabel"> Priority: </p>
                            <div className="registerInputPieceWrapper" >
                                {/* <input type="text" className="registerInput addIncidentInput" /> */}
                                <form className="addIncidentOptionInput">
                                    <select>
                                        <option>High</option>
                                        <option>All incidents</option>
                                        <option>Full time</option>
                                        <option>Half time</option>
                                        <option>Remote</option>
                                        <option>In office</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                        <div className="addIncidentInputWrapper">
                            <p className="registerLabel"> Assign to: </p>
                            <div className="registerInputPieceWrapper" >
                                {/* <input type="text" className="registerInput addIncidentInput" /> */}
                                <form className="addIncidentOptionInput">
                                    <select>
                                        <option>Primaria Municipiului Chisinau</option>
                                        <option>All incidents</option>
                                        <option>Full time</option>
                                        <option>Half time</option>
                                        <option>Remote</option>
                                        <option>In office</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                        {/* description textarea */}
                        <p className="addIncidentDescriptionTitle registerLabel">Description:</p>
                        <div className="addIncidentDescription">
                            <img 
                                className="descriptionIcon"
                                src="https://cdn.iconscout.com/icon/free/png-512/writing-1893427-1602558.png">    
                            </img>
                            <textarea rows="10" className="addIncidentTextarea"></textarea>
                        </div>
                        {/* rest of the form */}
                        <p className="registerLabel uploadText">Upload Photo / Video :</p>
                        <div className="addIncidentUploading">
                            <button>Choose File</button>
                            <p>No file choosen</p>
                        </div>
                        <div className="termsAndConditions addIncidentTermsAndConditions">
                            <input type="checkbox" />
                            <p className="accept">I Accept</p>
                            <a 
                                href="https://www.termsfeed.com/blog/sample-terms-and-conditions-template/" 
                                className="termsLink">Terms and Conditions</a>
                        </div>
                        <button className="registerButton reportNow">Report Now</button>
                    </div>
                </div>
            </div>
        );
    };
};

export default AddIncident;