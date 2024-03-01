import "../assets/css/gallery.css"

function Gallery(){
    function doSomework(){
        let firstChild = document.getElementById("imageContainer");
        console.log(firstChild.firstChild);
    }
    return(
        <div className="gallerymainContainer">
            <div className="image_Container" id="imageContainer">
                
                <div className="image1"> </div>
                <div className="image2"> </div>
                <div className="image3"> </div>
                <div className="image4"> </div>
                <div className="image5"> </div>
            </div>
        </div>
    )
}

export default Gallery;