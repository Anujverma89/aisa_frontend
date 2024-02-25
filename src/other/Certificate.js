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
        <div>
            <form action="/gochole"method="get" onSubmit={findCertificate}>
                <label>Enter Uniqe Registration UID sent on your email Id while Registration</label>
                <input type="text" placeholder="Registration ID" name="registrationID"></input>
                <button type="submit">Get Certificate</button>
            </form>
        </div>
    )
}

export default Certificate;