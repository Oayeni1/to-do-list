import React, {useState} from "react";
import './logForm.css';


const LogForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const Username = (e) =>{
        setUsername(e.target.value)
    } 

    const Password = (e) =>{
        setPassword(e.target.value)
    } 


    const popup =() => { 
        alert(`Username: ${username}  Password: ${password}`)
    }

    return (
        <div className="contain">
            <h1 className="log">Login</h1>
            <input type="text" onChange={Username} placeholder="username"/>
            <input type="password" onChange={Password} placeholder="password"/>
            <button className="login-btn" onClick={popup}>Login Now</button>
            
        </div>
    )
}

export default LogForm;