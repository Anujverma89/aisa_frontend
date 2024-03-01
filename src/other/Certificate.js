import "../assets/css/certificate.css"

let certobj = ["asdfghjkl","sjkdfhakjsdfh"];

function Certificate(){
    
    const findCertificate = (e)=>{
        e.preventDefault();
        let value = e.target[0].value;
        for(let o in certobj){
            if(o === value){
                console.log("User verified");
                console.log("Wiat for Details");
            }else{
                console.log("Registration not successful");
            }
        }
    }


    return(
        <div className="certificate_container">
            <form action="/gochole"method="get" onSubmit={findCertificate} >
                <div className="form_container">
                    <h5>Enter Uniqe Registration UID sent on your email Id while Registration</h5>
                    
                    <input type="text" placeholder="Enter Registration ID" name="registrationID"></input>
        
                    <div className="button_container">
                        <button type="submit">Get Certificate</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Certificate;