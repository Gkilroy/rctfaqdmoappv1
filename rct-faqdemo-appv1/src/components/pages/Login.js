import { Link } from "react-router-dom";

const Login = (props) => {

    return (
    <>
        <p>Login Page - v1.0.1</p>
        <div>
            <span>* username: </span><input type="text" maxLength={20} placeholder="* username required"/> <br/>
            <span>* password: </span><input type="password" maxLength={10} placeholder="* password required"/> <br/>
            <p></p><button>login</button>
        </div>
        <p></p>
        <Link to="/register">register</Link>
    </>
    )
}

export default Login;