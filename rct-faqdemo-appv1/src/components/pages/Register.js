import { Link } from "react-router-dom";

const Register = (props) => {

    return (
     <>
        <p>Register Page</p>
        <div>
            <span>* username: </span><input type="text" maxLength={20} placeholder="* username required"/> <br/>
            <span>* password: </span><input type="password" maxLength={10} placeholder="* password required"/> <br/>
            <span>* confirm password: </span><input type="password" maxLength={10} placeholder="* confirm password required"/> <br/>
            <p></p>
            <input type="checkbox"/><span> Terms and Services</span>
            <p></p>
            <p></p><button>register</button>
        </div>
        <p></p>
            <Link to="/login">login</Link>
     </>
    )
}

export default Register;