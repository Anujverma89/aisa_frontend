import { Link } from "react-router-dom";
import "../assets/css/footer.css"
import map from "../assets/images/images.jpeg"
import data from "../data.json"


function Footer(){

    const currentdate= new Date();
    return(
        <div className="footerBlack" id="footernav">
            <div className="footerTop">
                <div className="bottom_contact_details">
                    <div className="direct_contact">
                        <div><i className="bi-telephone" style={{fontSize:20, color:"cornflowerblue"}}></i> <a href="tel:+919696714438" target="_blank" rel="noreferrer"><p>9696714438</p></a></div>
                        <div><i className="bi-envelope" style={{fontSize:20, color:"cornflowerblue"}}></i><a href="mailto:aisadkte@gmail.com"  target="_blank" rel="noreferrer"><p>asiadkte@gmail.com</p></a></div>
                    </div>
                    
                    <div className="social_contact">
                        <div><a href={data.linkedin} target="_blank" rel="noreferrer"> <i className="bi-linkedin fa-3x" style={{fontSize:30, color:"cornflowerblue"}}></i> </a></div>
                        <div><a href={data.instgram}vtarget="_blank" rel="noreferrer"> <i className="bi-instagram" style={{fontSize:30, color:"cornflowerblue"}}></i> </a></div>
                        <div><a href={data.youtube} target="_blank" rel="noreferrer"> <i className="bi-youtube" style={{fontSize:30, color:"cornflowerblue"}}></i> </a></div>
                    </div>
                </div>

                <div className="bottom_location_details">
                    <img src={map} alt="description" className="locationImage"/>
                </div>

                <div className="bottom_link_section">
                    <div className="first_section">
                        <ul>
                            <Link to ="/rulebook" className="navigationLinkBottom">Rule Book</Link>
                            <Link to ="/joinaisa" className="navigationLinkBottom">Join Aisa</Link>
                            <a href="https://wa.me/+919696714438" className="navigationLinkBottom" target="_blank" rel="noreferrer">Need Help ?</a>
                            <Link to ="/faqs" className="navigationLinkBottom">FAQs</Link>
                            <Link to ="/blog" className="navigationLinkBottom">Blog</Link>
                        </ul>

                    </div>
                    <div className="second_section">
                        <ul>
                            <Link to="/resources" className="navigationLinkBottom">Resources</Link>
                            <Link to ="/certificate" className="navigationLinkBottom">Certificate</Link>
                            <Link to ="/feedback" className="navigationLinkBottom">Feedback</Link>
                        </ul>
                    </div>
                </div>

            </div>



            <div className="footerBottom">
                <ul className="bottom_link_style">
                    <li>  &copy; AISA DKTE {currentdate.getFullYear()}</li>
                    <Link to = "/policy" className="bottom_link">Term & Condition</Link>
                    
                   
                    <li><a href="#cancellation" className="bottom_link">Cancellation Policy</a></li>
                    <li><a href="#privacy" className="bottom_link">Privacy Policy</a></li>
                </ul>
            </div>
        </div>

    )
}

export default Footer;