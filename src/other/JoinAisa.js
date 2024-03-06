import "../assets/css/joinaisa.css"
import { useState } from "react";

function JoinAisa(){
    let volunteer_form = "Student Volunteer Form";
    let committee_form = "Student Committee Form";
    let [isAccepting, setAcceptance] = useState(true);
    let [formtype, setformtype] = useState(volunteer_form);
    
    let changeform = function (){
        setformtype(committee_form)
    }

    

    if(isAccepting){
            return(
                <div className="join_aisa_container">
                    <div className="joining_form" id="JoiningForm">
                        <div className="volunteer_form">
                            <h5>{formtype}</h5>
                        </div>
                        <form className="aisa_registration_form">
                            <input type="text" name="name" placeholder="Your Name"></input>
                            <input type="text" name="prn" placeholder="Enter Your PRN"></input>
                            <div className="departmentInput">
                                <label>Select Your Department</label>
                                <select id="department">
                                    <option value="AI-ML">AI-ML</option>
                                    <option value="AI-DS">AI-DS</option>
                                </select>
                            </div>
                            <input type="tel" name="contact" placeholder="Enter Contact No"></input>
                            <input type="text" name="cgpa" placeholder="Your CGPA"></input>
                            <button type="submit">Join AISA</button>
                        </form>
                    </div>
                </div>
            )
    }else{
        return(
            <div className="join_aisa_container">
                <div className="NotAccepting" id="NotAccepting">
                    <div className="not_accepting_heading">
                        <h1>Sorry !! &#128542;
                            <br></br>
                            <span><p>We are not accepting any students in our club as of now.</p></span>
                        </h1>
                    </div>
                    <div className="connectwithus">
                        <h6>Connect with us, To know when we are accepting Students in our club.</h6> 
                        <form className="connectwithusform">
                            <input type="email" placeholder="jhondoe@gmail.com" name="emailId"></input>
                            <button type="submit">Connect Now</button>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

export default JoinAisa;