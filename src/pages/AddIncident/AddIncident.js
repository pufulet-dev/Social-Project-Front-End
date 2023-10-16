import React, {Component} from 'react';
import './AddIncident.css';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

class AddIncident extends Component {
    

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
                            <p className="registerLabel notMandatory"> Incident Type: </p>
                            <div className="registerInputPieceWrapper" >
                                <input type="text" className="registerInput addIncidentInput" />
                            </div>
                        </div>
                        {/* 3 option inputs */}
                        <div className="addIncidentInputWrapper">
                            <p className="registerLabel  notMandatory"> Category: </p>
                            <div className="registerInputPieceWrapper" >
                                <form className="addIncidentOptionInput">
                                    <select className="addSelectInput">
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
                            <p className="registerLabel notMandatory"> Priority: </p>
                            <div className="registerInputPieceWrapper" >
                                <form className="addIncidentOptionInput">
                                    <select className="addSelectInput">
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
                            <p className="registerLabel notMandatory"> Assign to: </p>
                            <div className="registerInputPieceWrapper" >
                                <form className="addIncidentOptionInput">
                                    <select className="addSelectInput">
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
                        <p className="addIncidentDescriptionTitle notMandatory registerLabel">Description:</p>
                        <div className="addIncidentDescription">
                            <img 
                                className="descriptionIcon"
                                src="https://img.icons8.com/ios/452/speech-bubble--v2.png">    
                            </img>
                            <textarea rows="10" placeholder="..." className="addIncidentTextarea"></textarea>
                        </div>
                        {/* rest of the form */}
                        <p className="registerLabel uploadText notMandatory">Upload Photo / Video :</p>
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
                        <button className="registerButton reportNowButton">Report Now</button>
                    </div>
                </div>
            </div>
        );
    };
};

export default AddIncident;