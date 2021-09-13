import location from "../images/location.svg";
import edit from "../images/edit.svg";
const GetLocation = () => {

    const getLocationInput = {
        width: "243px",
        borderBottom: "1px solid #000"
    }
  
    const input = {
        border: "none"
    }

    const section = {
        top: "5rem",
        right: "10rem"
    }

    return(
        <section className="position-absolute d-none d-xl-inline" style={section}>
            <div className="input-group mb-3" style={getLocationInput} >
                <img src={location} alt="location" />
                <input style={input} type="text" defaultValue="Get Location" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button className="btn" type="button" id="button-addon2">
                    <img src={edit} alt="edit" />
                </button>
            </div>


            <p className="text-muted text-wrap py-3" style={{ width: "243px" }}>
                Your location will help us serve better and extend a personalised experience.
            </p>

        </section>
    )
}

export default GetLocation;