import React from 'react'
import "./Login.css"
import { NavLink } from 'react-router-dom'
const Login = () => {

  let login = () => {}

  return (
    <div className='loginBox'>
      <div className='loginHeading'>Log Into Your Account</div>
      <div className='loginForm'>
        <div className='loginFormRow'>
          <i className="fa-solid fa-envelope loginIcon"></i>
          <input id = "username" className='loginInput' type='text' placeholder='Username' />
        </div>
        <div className='loginFormRow'>
          <i className="fa-solid fa-key loginIcon"></i>
          <input className='loginInput' type='password' id = "password" placeholder='Password' />
        </div>
        <div className='loginMsg blue' id="forgotPassword">Forgot Password</div>
        <br />
        <NavLink to="/signup" className='loginMsg blue' id="createAccount">New User? Sign Up</NavLink>
        <div className='loginBtn' onClick={login}>Login</div>
      </div>
    </div>
  )
}

export default Login