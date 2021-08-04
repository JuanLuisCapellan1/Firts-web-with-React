import React, {useState} from 'react';
import '../../App.css';
import './SignUp.css';

export default function SignUp() {

  const [user, setUser] = useState({
      name: "",
      email: "",
      password: "",
      repassword: ""
  }) 

  const handleChange = e => {
    const {name, value} = e.target
    setUser({
        ...user,
        [name]: value
    })
  }

  return(
    <div className="contain-register">
      <div className="register">
          {console.log("User", user)}
          <h1>Register</h1>
          <input type="text" name="name" value={user.name} placeholder="Enter your Name" onChange={ handleChange }></input>
          <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={ handleChange }></input>
          <input type="password" name="password" value={user.password} placeholder="Enter your Password" onChange={ handleChange }></input>
          <input type="password" name="repassword" value={user.repassword} placeholder="Re-enter your Password" onChange={ handleChange }></input>

          <div className="button-L">Register</div>
      </div>
    </div>
  );
}