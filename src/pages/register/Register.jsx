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
   <div className='Wrapper'>
    
    <form className='Form'>
    <h1 className='Title'>CREATE AN ACCOUNT</h1>
      <input placeholder='Name'/>
      <input placeholder='Last Name'/>
      <input placeholder='UserName'/>
      <input placeholder='PassWord'/>
      <input placeholder='Confirm PassWord'/>
      <span className='Agreement'>By Creating an account, I consent to the processig of my personal data in accordance with the <b>PRIVACY POLICY</b>
      </span>
      <button>CREATE</button>
    </form>

   </div>
    
    </div>
    <Footer />

    </>
    
  )
}

export default Register
