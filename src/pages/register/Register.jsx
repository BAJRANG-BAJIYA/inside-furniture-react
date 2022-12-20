import React from 'react'
import "./register.css"
import Navbar from "../../components/navbar/Navbar";
import NewsLetter from "../../components/newsletter/NewsLetter";
import Footer from "../../components/footer/Footer";


const Register = () => {
  return (
    <>
     <NewsLetter />
    <Navbar />
<div className='Register'>
   <div className='Register__Wrapper'>
    
    <form className='Register__Form'>
    <h1 className='Register__Title'>CREATE AN ACCOUNT</h1> 
      <input placeholder='FirstName' className="Register__registerInput" />
      <input placeholder='LastName' className="Register__registerInput" />
      <input placeholder='UserName' className="Register__registerInput" />
      <input placeholder='PassWord' className="Register__registerInput" />
      <input placeholder='Confirm Password' className="Register__registerInput" />
      <span className='Register__Agreement'>By Creating an account, I consent to the processig of my personal data in accordance with the <b>PRIVACY POLICY</b>
      </span>
      <span className="Register__formButton">CREATE</span>
    </form>

   </div>
    
    </div>
    <Footer />

    </>
    
  )
}

export default Register
