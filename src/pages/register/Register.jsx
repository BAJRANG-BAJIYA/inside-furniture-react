import React from 'react'
import "./register.css"
import Navbar from "../../components/navbar/Navbar";
import NewsLetter from "../../components/newsletter/NewsLetter";
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
     <NewsLetter />
    <Navbar />
<div className='Register'>
   <div className='Register__Wrapper'>
    
    <form className='Register__Form'>
    <h1 className='Register__Title'>CREATE AN ACCOUNT</h1> 
      <input placeholder='Firstname' className="Register__registerInput" />
      <input placeholder='Lastname' className="Register__registerInput" />
      <input placeholder='Username' className="Register__registerInput" />
      <input placeholder='Password' className="Register__registerInput" />
      <input placeholder='Confirm Password' className="Register__registerInput" />
      <span className='Register__Agreement'>By Creating an account, I consent to the processig of my data in with the <b>PRIVACY POLICY</b>
      </span>
      <Link to ="/login" style={{textDecoration:'none'}}>
      <button className="Register__Button">CREATE</button></Link>
    </form>

   </div>
     
    </div>
    </>   
  )
}
export default Register
