import React,{useState} from 'react';
import './Login.css';

export default function Login() {

    const [user, setUser] = useState({
        email: "",
        password: "",
    }) 
  
    const handleChange = e => {
      const {name, value} = e.target
      setUser({
          ...user,
          [name]: value
      })
    }

    return(
        <div className="contain-login">
            <div className="login">
                {console.log("User", user)}
                <h1>Login</h1>
                <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
                <input type="password"  name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password"></input>
                <div className="button-L">Login</div>
                <div className="or"> or</div>
                <div className="button-L">Register</div>
            </div>
        </div>
    );
}