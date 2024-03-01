import "../assets/css/resources.css"

function Resources(){
    let data = ["AI-ML","AI-DS"]
    return(
       <div className="resource_container">
            <div className="Resouces_intro_container">
                <h4>We have Handfully crafted resouces for you !!<br></br>
                    Please Process To Download
                </h4>
            </div>
            <div className="folder_container_section">
                <div className="resource_folder">
                    <div className="folder_icon_top">
                        <div className="folder_icon_white">

                        </div>
                    </div>
                    <div className="brand_text_div">
                        <h4>{data[0]}</h4>
                    </div>
                </div>
                <div className="resource_folder">
                    <div className="folder_icon_top">
                        <div className="folder_icon_white">

                        </div>
                    </div>
                    <div className="brand_text_div">
                        <h4>{data[1]}</h4>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default Resources;