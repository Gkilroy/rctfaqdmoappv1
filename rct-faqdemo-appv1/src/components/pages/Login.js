
//--- Login.js --- 

import { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Login = (props) => {

    const [msg, setMsg] = useState("");
    const txtusername = useRef();

    const handleLogin = (e) =>{
        
        const _function_name = "handleLogin";

        try {
            
            const _uid = txtusername.current.value;
            const _pwd = "pwd1"; //optionally: encrypt password
            const _url = `https://d4a4b615-8c0c-4341-adae-e90a82bcb576-00-2xx2fade5wfsh.worf.replit.dev/login/${_uid}/${_pwd}`;            

            fetch(_url)
            .then((res)=>res.json())
            .then((data)=> {
                
                setMsg(data.msg)}

                //if successful login 
                //-- redirect to dashboard 
            )
            .catch((error)=>{
                setMsg("* request error");
                console.log("* request error *");
                console.log(error);
            });

        } catch (error) {
            console.log(`** ${_function_name}::error`)
            console.log(error)
        }
    }

    return (
    <>
        <p>Login Page - v1.0.5</p>
        <div>
            <span>* username: </span><input ref={txtusername} type="text" maxLength={20} placeholder="* username required"/> <br/>
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