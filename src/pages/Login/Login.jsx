import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login, signUp } from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'
const Login = () => {

  const [signState,setSignState]=useState("Sign In");

  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const [loading,setLoading]=useState(false);

  const user_auth=async(e)=>{
    e.preventDefault();
    setLoading(true);
    if(signState==="Sign In"){
      await login(email,password);
    }else{
      await signUp(name,email,password);
    }
    setLoading(false);
  }

  return (
    loading?<div className="loginSpinner">
      <img src={netflix_spinner} alt="" />
    </div>:
    <div className='login'>
      <img src={logo} alt="" className='loginlogo'/>
      <div className="loginform">
        <h1>{signState}</h1>
        <form >
          {signState==="Sign Up"?<input value={name} onChange={(e)=>{setName(e.target.value)}} 
          type="text" placeholder='Your Name' />:<></>}   
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} 
          type="email" placeholder='Email'/>
          <input value={password} onChange={(e)=>{setPassword(e.target.value)}}
           type="password" placeholder='Password'/>
          <button onClick={user_auth} type='submit'>{signState}</button>
          <div className="fromhelp">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help</p>
          </div>
        </form>
        <div className="formswitch">
          {signState==="Sign In"?<p>New to Netflix? <span onClick={()=>{
            setSignState("Sign Up")
          }}>Sign Up Now</span></p>:
          <p>Already have Account? <span onClick={()=>{
            setSignState("Sign In")
          }}>Sign In Now</span></p>}
          
          
        </div>
      </div>
    </div>
  )
}

export default Login