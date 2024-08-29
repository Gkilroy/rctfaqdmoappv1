import { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Login = (props) => {

    const [msg, setMsg] = useState("");
    const txtusername = useRef("");
    const txtpassword = useRef("");

    const handleLogin = (e) =>{
        
        const _function_name = "handleLogin";
        let _msg = "";

        try {
            
            const _uid = txtusername.current.value;
            const _pwd = txtpassword.current.value; //optionally: encrypt password
            const _url = `https://18959b93-e44b-40f4-95f8-0b8b59c124c6-00-jxhcsmotgrnu.spock.replit.dev/login/${_uid}/${_pwd}`;  

            if(_uid === null || _uid === undefined || _uid.trim().length === 0)
            {
                _msg = "* invalid username";                
            }
            
            if(_pwd === null || _pwd === undefined || _pwd.trim().length === 0)
            {
                _msg = _msg + " * invalid password";                
            }
            
            if(_msg.length > 0)
            {
                setMsg(_msg)                
                return false;
            }

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
        <p>Login Page - v1.0.6</p>
        <div>
            <span>* username: </span><input ref={txtusername} type="text" maxLength={20} placeholder="* username required"/> <br/>
            <span>* password: </span><input ref={txtpassword} type="password" maxLength={10} placeholder="* password required"/> <br/>
            <p>{msg}</p>
            <p></p><button onClick={handleLogin}>login</button>
        </div>
        <p></p>
        <Link to="/register">register</Link>
    </>
    )
}

export default Login;