import React from 'react'
import "./Signup.css"
import { NavLink,useNavigate } from 'react-router-dom'
const Signup = () => {
    const navigate = useNavigate()

    let signup = ()=>{
        let url = "http://localhost:3000/signup"
        let username = document.getElementById("username").value
        let password = document.getElementById("password").value
        let today = new Date()
        let date = today.getFullYear() + '-' + (today.getMonth() + 1).toString().padStart(2, '0') + '-' + today.getDate().toString().padStart(2, '0')
        let data = { 
          username: username, 
          password: password,
          dateCreated:date
        };
        if (username!="" && password!=""){
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then(reaponse => {
          return reaponse.json()
        }).then(data=>{
          if (data.response=="succesfull"){
            navigate("/")
          }
        })
      }
      }

    let checkUser = ()=>{
        let url = "http://localhost:3000/checkUser"
        let username = document.getElementById("username").value
        let data = { 
          username:username
        };
        if(username!=""){
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then(reaponse => {
          return reaponse.json()
        }).then(data=>{
            // console.log(data.response)
            let element = document.getElementById("msg")
            element.classList.remove("hidden")
          if(data.response=="succesfull"){
            console.log("1")
            element.classList.add("green")
            element.classList.remove("red")
            element.innerHTML = "Great choice, it's yours!"
          }else{
            console.log("2")
            element.classList.add("red")
            element.classList.remove("green")
            element.innerHTML = "Oops, that one's not available"
          }
        })
      }else{
        let element = document.getElementById("msg").classList.add("hidden")
      }
      }

      let checkpassword = ()=>{
        let password = document.getElementById("password").value
        let confirmPassword = document.getElementById("confirmPassword").value
        let msg = document.getElementById("msg2")
        if (password!=confirmPassword){
            msg.classList.remove("hidden")
        }else{
            msg.classList.add("hidden")
        }
      }

    return (
        <div className='signupBox'>
            <div className='signupHeading'>Become a Member</div>
            <div className='signupForm'>
                <div className='signupFormRow'>
                    <i className="fa-solid fa-envelope signupIcon"></i>
                    <input id = "username" className='signupInput' type='text' placeholder='Username' onChange={checkUser} />
                </div>
                <div id = "msg" className='signupMsg green hidden'>Great choice, it's yours!</div>
                <div className='signupFormRow'>
                    <i className="fa-solid fa-key signupIcon"></i>
                    <input id = "password" className='signupInput' type='password' placeholder='Password' onChange={checkpassword}/>
                </div>
                <div className='signupFormRow'>
                    <i className="fa-solid fa-key signupIcon"></i>
                    <input id = "confirmPassword" className='signupInput' type='password' placeholder='Confirm Password' onChange={checkpassword} />
                </div>
                <div id="msg2" className='signupMsg red hidden' >Password and Confirm Password must be same</div>
                <br />
                <NavLink to="/login" className='signupMsg blue' id="login">Already a member? Signup</NavLink>
                <div className='signupBtn' onClick={signup}>Signup</div>
            </div>
        </div>
    )
}

export default Signup