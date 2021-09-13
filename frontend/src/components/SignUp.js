import { useHistory } from "react-router-dom";

import closeBtn from "../images/close.svg";
import fb from "../images/fb.svg";
import google from "../images/google.svg";
import people from "../images/people.svg";

const SignUp = () => {

    const history = useHistory();

    const closeSignUp = () => {
        history.push("/");
    }

    return (
        <div className="position-fixed w-sm-50 p-4 signup">

            <p className="greenMessage bg-success text-white p-1 px-2 rounded-pill d-none d-sm-block">
                Let's learn, share and inspire each other with our passion for computer engineering. Sign up now 🤘🏼
            </p>

            <div className="header d-flex justify-content-between ">
                <strong>Create Account</strong>
                <img src={closeBtn} onClick={closeSignUp} alt="close" />
            </div>

            <div className="d-grid position-relative my-3 getInfo">
                <input type="text" placeholder="First Name" className="form-control input1" />
                <input type="text" placeholder="Last Name" className="form-control input2" />
                <input type="text" placeholder="Email" className="form-control input3" />
                <input type="text" placeholder="Password" className="form-control input4" />
                <input type="text" placeholder="Confirm Password" className="form-control input5" />

                <button className="btn btn-primary rounded-pill createAccBtn">Create Account</button>

                <button className="btn bg-secondary bg-opacity-10 fbBtn">
                    <img src={fb} alt="facebook" />
                    <span className="mx-2">Sign up with Facebook</span>
                </button>

                <button className="btn bg-secondary bg-opacity-10 googleBtn">
                    <img src={google} alt="google" />
                    <span className="mx-2">Sign up with Google</span>
                </button>

                <img className="position-absolute d-none d-lg-inline top-0 end-0" src={people} alt="people" />

                <p className="text-muted agreement">
                    By signing up, you agree to our Terms and conditions, Privacy policy
                </p>

            </div>


        </div>
    )
}

export default SignUp;