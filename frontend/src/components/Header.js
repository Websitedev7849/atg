import logo from "../images/logo.png";
import searchIcon from "../images/search.png";
import backButton from "../images/arrowBack.svg";
import primaryLaptop from "../images/primaryLaptop.png";

/**
 * @todo
 * transfer inline css to external stylesheet
 */

const Header = () => {

  return(
    <section
    className="container-fluid"
    style = {{
        width: "100vw"
    }}
    >
        <nav style={{
            background: "#FFFFFF",
            boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.12)"
        }} 
        className="container-fluid d-flex flex-row justify-content-between align-items-center px-4 py-2">

            <img className="logo" style={{
                width: "162.57px",
                height: "24px"
            }} src={logo} alt="logo"/>

            <div className="searchBar position-relative d-none d-sm-block">
                <img className="position-absolute top-50 translate-middle-y"
                    style={{
                        left: "10px"
                    }}
                    src={searchIcon} alt="search icon" />

                <input className="form-control px-5" 
                style={{
                    width: "100%",
                    borderRadius: "20px",
                    background: "#F2F2F2",
                    color: "#5C5C5C",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "18px",
                }} type="text" placeholder="Search for your favorite groups in ATG" />
            </div>

            <p className="createAcc my-2 d-none d-sm-block"
            style={{
                fontStyle: "normal",
                fontWeight: "500",
            }}>Create account. <a href="/signup"> It’s free! </a></p>

        </nav>
   
   
    <div className="head position-relative" 
     style={{
         background: `url(${primaryLaptop})`,
         backgroundSize: "cover",
         backgroundRepeat: "no-repeat",
         backgroundPosition: "center center",
     }}
    >

        <div className="bg-dark p-2 bg-opacity-75"
            style={{
                height: "100%",
                width: "100%",
                top: "0",
                left: "0",
                zIndex: "-1",
                backgroundColor: "#000"
            }}
        ></div>

        <img className="position-absolute d-sm-none" style={{top: "20px", left: "20px"}} src={backButton} alt="back" />
        
        <button className="position-absolute text-white d-sm-none" style={{
            top: "17px",
            right: "20px",
            fontSize: "12px",
            width: "76px",
            height: "28px",
            border: "0.8px solid #FFFFFF",
            boxSizing: "border-box",
            borderRadius: "4px",
            background: "transparent"
        }} type="button">Join Group</button>
        
        <h3 className="headChildText1 position-absolute text-white">Computer Engineering</h3>
        
        <p className="headChildText2 position-absolute text-white">142,765 Computer Engineers follow this</p>
    
    </div>
   
    </section>
  )
}

export default Header;