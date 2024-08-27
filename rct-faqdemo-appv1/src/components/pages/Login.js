import { useState } from "react";
import { Link } from "react-router-dom";

const Login = (props) => {

    const [msg, setMsg] = useState("");

    const handleLogin = (e) =>{
        setMsg("** handleLogin")
    }

    return (
    <>
        <p>Login Page - v1.0.4</p>
        <div>
            <span>* username: </span><input type="text" maxLength={20} placeholder="* username required"/> <br/>
            <span>* password: </span><input type="password" maxLength={10} placeholder="* password required"/> <br/>
            <p>{msg}</p>
            <p></p><button onClick={handleLogin}>login</button>{"  "}<Link to="/dashboard">dashboard</Link>
        </div>
        <p></p>
        <Link to="/register">register</Link>
    </>
    )
}

export default Login;