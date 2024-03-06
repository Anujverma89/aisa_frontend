import "../assets/css/faq.css"
import d from "../helper/data.js"

function Faq(){
    return(
        <div className="faq_container">
            {d.map((data)=>{
                console.log(data)
            })}
        </div>
    )
}

export default Faq;