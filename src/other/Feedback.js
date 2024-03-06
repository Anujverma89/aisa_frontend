import "../assets/css/feedback.css"

function Feedback(){
    return(
        <div className="feedback_form_container">
            <div className="feedback_form_internal_container">
                <div className="form_name_container">
                    <h5>Feedback Form</h5>
                </div>
                <form className="feedbackform">
                    <input type="text" placeholder="Name"/>
                    <div className="college_section">
                        <label>Please select your college </label>
                        <select id="college" name="college" >
                            <option value="Dkte">DKTE'stei</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <input type="text" placeholder="Department"/>
                    <div className="who_section">
                        <label>What suits you the best ?</label>
                        <select id="who_you_are" name="who">
                            <option value="Faculty">Faculty</option>
                            <option value="Student">Student</option>
                        </select>
                    </div>
                    <input type="textarea" placeholder="Write Your Feed Here!"></input>
                    <button type="submit">Give Feedback</button>
                </form>
            </div>
        </div>
    )
}

export default Feedback;