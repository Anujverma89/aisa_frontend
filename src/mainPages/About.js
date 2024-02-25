import support from "../assets/icons/support.png"
import family from "../assets/icons/family.png"
import team from "../assets/icons/team.png"
import event from "../assets/icons/events.png"

function About(){
    return(
       <div className="aboutMain">
            <div className="aboutHeader">
                <div className="aboutHeaderIntro">
                    <h1>AISA</h1>
                    <hr/>
                    <h4>Unite | Excel | Achieve</h4>
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
                <div>
                    <h3>Our Mission : Our Mission: Unite, Excel, Achieve</h3>
                </div>
                <div className="missionIntro">
                    <ul>
                        <li>Unite: At the heart of our mission is the concept of unity. 
                            We aim to bring together students from diverse backgrounds, disciplines, and skill levels who share a common fascination with AI.
                            By fostering a sense of togetherness, we create an inclusive environment where members can learn from one another, collaborate on projects, 
                            and build lasting connections.
                        </li>
                        <li>Excel: We are committed to excellence in all things AI. 
                            Through workshops, lectures, and hands-on projects, 
                            we empower our members to advance their understanding and 
                            skills in this rapidly evolving field. We believe that AI has the potential to shape the future, 
                            and we're dedicated to helping our members excel and become the AI leaders of tomorrow.
                        </li>
                        <li>Achieve: Beyond the classroom, we are driven to achieve remarkable milestones. 
                            Whether it's participating in AI competitions, conducting research, or working on innovative AI projects, 
                            our club is a platform for members to turn their passion into tangible achievements. 
                            We celebrate each member's unique contribution to the world of AI.
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="aboutOffer">
                <div>
                    <h3>What We Offer</h3>
                </div>
                <div>
                    <ul>
                        <li>
                            <div className="contentImage"><img src={event} alt={event}></img></div>
                            <div className="content">Educational Workshops: Dive deep into AI topics, learn from experts, and stay updated on the latest trends and technologies.</div>
                        </li>
                        <li>
                            <div className="contentImage"><img src={event} alt={event}></img></div>
                            <div className="content">Hands-On Projects: Collaborate with fellow students on real-world AI projects to gain practical experience.</div>
                        </li>
                        <li>
                            <div className="contentImage"><img src={event} alt={event}></img></div>
                            <div className="content">Networking Opportunities: Build meaningful connections with like-minded peers and professionals.</div>
                        </li>
                        <li>
                            <div className="contentImage"><img src={event} alt={event}></img></div>
                            <div className="content">Competitions and Challenges: Test your skills in AI competitions and hackathons, both at the local and national levels.</div>
                        </li>
                        <li>
                            <div className="contentImage"><img src={event} alt={event}></img></div>
                            <div className="content">Guest Speakers: Engage with industry professionals and researchers to gain insights into AI's real-world applications.</div>
                        </li>
                        <li>
                            <div className="contentImage"><img src={event} alt={event}></img></div>
                            <div className="content">Research Support: Explore AI research opportunities and receive guidance on your academic and career pursuits.</div>
                        </li>
                    </ul>
                </div>
            </div>
            
            <hr/>

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