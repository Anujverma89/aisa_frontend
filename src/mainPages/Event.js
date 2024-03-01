import "../assets/css/event.css"

function Event(){
    return(
        <div className="eventMainContainer">
            <div className="technicalevents eventmainbox">
                <div className="eventIntroName">
                   Technical Events
                </div>
                <div className="technicalEventCard eventcardcontainer">

                </div>
            </div>

            <div className="nontechnicalevent eventmainbox">
                <div className="eventIntroName">
                    Non Technical Events
                </div>
                <div className="nonTechnicalEventCard eventcardcontainer">

                </div>
            </div>

            <div className="careerdevelopmentevent eventmainbox">
                <div className="eventIntroName">
                    Career Development Events
                </div>
                <div className="nonTechnicalEventCard eventcardcontainer">

                </div>
            </div>

        </div>
    )
}

export default Event;