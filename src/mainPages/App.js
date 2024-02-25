import Header from "../helper/Header"
import Footer from "../helper/Footer"
import Home from "./Home"
import Event from "./Event"
import About from "./About"
import Gallery from "./Gallery"
import Members from "./Members"
import Error from "./Error"
import { Routes, Route } from "react-router-dom"
import "../assets/css/app.css"


// other imports 
import Blog from "../other/Blog"
import Certificate from "../other/Certificate"
import Faq from "../other/Faq"
import Feedback from "../other/Feedback"
import Policy from "../other/Policy"
import Resources from "../other/Resources"
import JoinAisa from "../other/JoinAisa"
import Rulebook from "../other/Rule"

function App(){

  
    return(
        <>
            <Header />

            <div className="routingContent">
                <Routes>
                    <Route path="/" Component={Home}></Route>
                    <Route path="/events" Component={Event}></Route>
                    <Route path="/about" Component={About}></Route>
                    <Route path="/members" Component={Members}></Route>
                    <Route path="/gallery" Component={Gallery}></Route>
                    <Route path="/certificate" Component={Certificate}></Route>
                    <Route path="/blog" Component={Blog}></Route>
                    <Route path="/faqs" Component={Faq}></Route>
                    <Route path="/feedback" Component={Feedback}></Route>
                    <Route path="/policy" Component={Policy}></Route>
                    <Route path="/resources" Component={Resources}></Route>
                    <Route path="/joinaisa" Component={JoinAisa}></Route>
                    <Route path="/rulebook" Component={Rulebook}></Route>
                    <Route path="*" Component={Error} />
                </Routes>    
            </div>

            <Footer />
        </>
    )
}


export default App;