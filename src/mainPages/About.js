import support from "../assets/icons/support.png"
import family from "../assets/icons/family.png"
import team from "../assets/icons/team.png"
import event from "../assets/icons/events.png"
import "../assets/css/about.css"
import robot from "../assets/images/robohand.png"
function About(){

    return(
       <div className="aboutMain">
            <div className="aboutHeader">
                <div className="aboutHeaderIntro">
                    <div className="imageSection" draggable='true'>
                        <img src={robot} className="shapeimage" id="robot_hand"></img>
                    </div>
                    <div className="aboutTextSection">
                        <h1 id="AISA_Head">AISA</h1>
                        <div className="horizontatl_row"></div>
                        <h4>Unite | Excel | Achieve</h4>
                    </div>
                </div>
                <div className="aboutHeaderIcon">
                    <div><img src={family}  alt={family} className="iconImage"></img></div>
                    <div><img src={team}  alt={team}  className="iconImage" ></img></div>
                    <div><img src={support}  alt={support} className="iconImage" ></img></div>
                    <div><img src={event}  alt={event} className="iconImage" ></img></div>
                </div>
            </div>

            <div className="aboutIntro">
                <h5>
                Welcome to the Artificial Intelligence Student Club, where we believe in the power of unity, the pursuit of excellence, and the drive to achieve remarkable accomplishments. Our club is a vibrant community of students passionate about the exciting world of Artificial Intelligence (AI) and its boundless possibilities.
                </h5>
            </div>
            <div className="aboutMission">
                <div className="about_mission_header">
                    <h3>Our Mission: Unite, Excel, Achieve</h3>
                </div>
                <div className="missionIntro">
                    <ul className="missionIntrolist">
                        <li className="introlist"><b>Unite:</b> At the heart of our mission is the concept of unity. 
                            We aim to bring together students from diverse backgrounds, disciplines, and skill levels who share a common fascination with AI.
                            By fostering a sense of togetherness, we create an inclusive environment where members can learn from one another, collaborate on projects, 
                            and build lasting connections.
                        </li>
                        <li className="introlist"><b>Excel:</b> We are committed to excellence in all things AI. 
                            Through workshops, lectures, and hands-on projects, 
                            we empower our members to advance their understanding and 
                            skills in this rapidly evolving field. We believe that AI has the potential to shape the future, 
                            and we're dedicated to helping our members excel and become the AI leaders of tomorrow.
                        </li>
                        <li className="introlist"><b>Achieve</b>: Beyond the classroom, we are driven to achieve remarkable milestones. 
                            Whether it's participating in AI competitions, conducting research, or working on innovative AI projects, 
                            our club is a platform for members to turn their passion into tangible achievements. 
                            We celebrate each member's unique contribution to the world of AI.
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="aboutOffer">
                <div className="whatweofferintro">
                    <h3>What We Offer</h3>
                </div>
                <div className="listcontainer">
                    <ul className="unorderedlist_container">
                        <li className="whatweoffer">
                            <div className="content"><h5>Educational Workshops:</h5> Dive deep into AI topics, learn from experts, and stay updated on the latest trends and technologies.</div>
                        </li>
                        <li className="whatweoffer">
                            <div className="content"><h5>Hands-On Projects:</h5> Collaborate with fellow students on real-world AI projects to gain practical experience.</div>
                        </li>
                        <li className="whatweoffer">
                            <div className="content"><h5>Networking Opportunities:</h5> Build meaningful connections with like-minded peers and professionals.</div>
                        </li>
                        <li className="whatweoffer">
                            <div className="content"><h5>Competitions and Challenges:</h5> Test your skills in AI competitions and hackathons, both at the local and national levels.</div>
                        </li>
                        <li className="whatweoffer">
                            <div className="content"><h5>Guest Speakers:</h5> Engage with industry professionals and researchers to gain insights into AI's real-world applications.</div>
                        </li>
                        <li className="whatweoffer">
                            <div className="content"><h5>Research Support:</h5> Explore AI research opportunities and receive guidance on your academic and career pursuits.</div>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="horizontalrow"></div>

            <div className="aboutEnd">
                <p>
                    Join us in the exciting journey of unraveling the mysteries of Artificial Intelligence, 
                    where unity, excellence, and achievement are our guiding principles. 
                    Together, we are poised to shape the future with the intelligence of tomorrow. 
                    Be part of our AI community and help create a brighter future through technology and innovation.
                </p>
            </div>
       </div>
    )
}

export default About;