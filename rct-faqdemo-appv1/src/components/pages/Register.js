import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

const Register = (props) => {

    const [msg, setMsg] = useState("");
    const txtusername = useRef("");
    const txtpassword = useRef("");
    const txtconfirmpassword = useRef("");
    const chkterm = useRef("");

    let navigate = useNavigate();

    const handleRegister = (e) =>{

        const _function_name = "handleRegister";
        let _msg = "";

        try {
            
            const _uid = txtusername.current.value;
            const _pwd = txtpassword.current.value; 
            const _confirmpwd = txtconfirmpassword.current.value; 
            const _chkterm = chkterm.current.checked;

            if(_uid === null || _uid === undefined || _uid.trim().length === 0)
            {
                _msg = "* invalid username";                
            }
            
            if(_pwd === null || _pwd === undefined || _pwd.trim().length === 0)
            {
                _msg = _msg + " * invalid password";                
            }
            
            if(_confirmpwd === null || _confirmpwd === undefined || _confirmpwd.trim().length === 0)
            {
                _msg = _msg + " * invalid confirm password";                
            }            
            
            if(_pwd !== _confirmpwd)
            {
                _msg = _msg + " * confirm password does not match password"; 
            }
            
            if(_chkterm === false)
            {
                _msg = _msg + " * please select terms/services"; 
            }
    
            if(_msg.length > 0)
            {
                setMsg(_msg)                
                return false;
            }

            setMsg("* registration successful");

        } catch (error) {
            console.log(`** ${_function_name}::error *`)
            console.log(error);
        }
    }

    return (
     <>
        <p>Register Page</p>
        <div>
            <span>* username: </span><input type="text" ref={txtusername} maxLength={20} placeholder="* username required"/> <br/>
            <span>* password: </span><input type="password" ref={txtpassword} maxLength={10} placeholder="* password required"/> <br/>
            <span>* confirm password: </span><input type="password" ref={txtconfirmpassword} maxLength={10} placeholder="* confirm password required"/> <br/>
            <p></p>
            <input type="checkbox" ref={chkterm} /><span> Terms and Services</span>
            <p>{msg}</p>
            <p></p>
            <p></p><button onClick={handleRegister}>register</button>
        </div>
        <p></p>
            <Link to="/login">login</Link>
     </>
    )
}

export default Register;