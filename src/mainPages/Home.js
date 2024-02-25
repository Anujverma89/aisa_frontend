import "../assets/css/home.css"
import { useState } from "react";
import data from "../events.json"

function Home(){
    let i=0;
    let j=0;
    let b_name = ["A","I","S","A"];
    let b_moto = "Unite | Excel | Achieve"
    let init = "";
    // const [name, setName] = useState(init);
    // const [moto, setMoto] = useState(motoA);
    // const [time, setTime] = useState("1");
    setInterval(()=>{
        if(i===(b_name.length-1)){
            // console.log(i)
            i=0;
            init="";
            // setName(init);
            // console.log(name);
            // name.reset()
        }else{
            init+=b_name[i];
            i+=1;
            // console.log(name);
            // console.log(init)
        }
        
    },100)

    return(
        <section>
            <div className="body_main">
                <div className="branding_motive">
                    <h1>
                        {init}
                        <hr></hr>
                        {/* {moto} */}
                        {/* {time} */}
                    </h1>
                </div>

                <div className="notice_board">

                </div>

                <div className="pastEventOuterContainer">
                    
                </div>

                <div className="inspirations_section_container">
                    <div><h5>Our Inspirations</h5></div>
                    <div className="inspirations_section">
                        <div className="data_card hod_detail"></div>
                        <div className="data_card faculty_coordinator"></div>
                    </div>
                </div>

                <div className="feedBack_container">
                    <div className="feedback_room">
                        <div className="text"><h5>Want to give us Suggestions or Feedback ?</h5></div>
                        <div><button>Give Feedback</button></div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Home;