import "../assets/css/header.css"
import logo from "../assets/images/Aisa_logo.jpeg"
import dkte_logo from "../assets/images/Dkte-logo.jpg"
import { useState } from "react"
import Event from "../mainPages/Event"
import Gallery from "../mainPages/Gallery"
import About from "../mainPages/About"
import Members from "../mainPages/Members"
import { Link } from "react-router-dom"
import Home from "../mainPages/Home"

function Header(){
    const [changelogo, setlogo] = useState(logo);
    const [currentClass, setClass] = useState("mobile_nav_link_container");
    const [navigator,setNavigator] = useState("top_hamburger_container");

    let changeImage = function(){
        if(changelogo === logo){
            setlogo(dkte_logo);
        }else{
            setlogo(logo);
        }
    }

    function toggleNavigation(){
        if(currentClass !== "new_mobile_nav_link_container"){
            setClass("new_mobile_nav_link_container");
            setNavigator("bottom_hamburger_container");
        }else{
            setClass("mobile_nav_link_container");
            setNavigator("top_hamburger_container")
        }
    }


    return(
        <section className="navbar_container">
            <div className={navigator}>
                <div className="hamburger" onClick={toggleNavigation}>
                    <li></li>
                    <li></li>
                </div>
            </div>

            <div className="navbar_inner_container">
                
                <div className="image_logo" id="logo_container">
                    <Link to = "/" className="navigationLink">
                        <img src={changelogo} alt="Aisa Logo" height={80} width={80} onMouseEnter={changeImage} onMouseLeave={changeImage} className="logoImage"/>
                    </Link>
                </div>

                <div className="Navigation_link_container">
                    <ul className="nav_link_list">
                        <Link to = "/" className="navigationLink" >Home</Link>
                        <Link to ="/events" className="navigationLink" >Events</Link>
                        <Link to ="/gallery" className="navigationLink">Gallery</Link>
                        <Link to ="/members" className="navigationLink">Members</Link>
                        <Link to ="/about" className="navigationLink">About</Link>
                        <li className="nav_link_item"><a href="#footernav" className="navigationLink">More</a></li>
                    </ul>
                </div>

            </div>

            {/* navigation for small devices  */}
            <div className="mobileDevice">
                <div className={currentClass}>
                    <div className="image_logo" id="logo_container">
                        <Link to = "/" className="navigationLink" onClick={toggleNavigation}>
                        <img src={changelogo} alt="Aisa Logo" height={80} width={80} onMouseEnter={changeImage} onMouseLeave={changeImage} className="logoImage"/>
                        </Link>
                        
                    </div>

                    <div className="mobile_Navigation_link_container">
                        <ul className="mobile_nav_link_list">
                            <Link to = "/" className="navigationLink" onClick={toggleNavigation}>Home</Link>
                            <Link to ="/events" className="navigationLink" onClick={toggleNavigation}>Events</Link>
                            <Link to ="/gallery" className="navigationLink" onClick={toggleNavigation}>Gallery</Link>
                            <Link to ="/members" className="navigationLink" onClick={toggleNavigation}>Members</Link>
                            <Link to ="/about" className="navigationLink" onClick={toggleNavigation}>About</Link>
                            <li className="nav_link_item" onClick={toggleNavigation}><a href="#footernav" className="navigationLink">More</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )
    
}

export default Header;