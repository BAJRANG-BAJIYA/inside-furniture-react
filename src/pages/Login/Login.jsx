import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import NewsLetter from "../../components/newsletter/NewsLetter";
import { Link } from 'react-router-dom';
import "./login.css";

const Login = () => {
  return (
    <>
     <NewsLetter />
    <Navbar />
<div className='Login'>
   <div className='Login__Wrapper'>
<form className='Login__Form'>
<h1 className='Login__Title'> SIGN-IN</h1>
  <input placeholder='username' className="Login__loginInput"/>
  <input placeholder='password' className="Login__loginInput"/>
  <Link to ="/" style={{textDecoration:'none'}}><button className='Login__button'>LOGIN</button></Link>
  <span className='Login__link'>DO NOT REMEMBER THE PASSWORD</span>
  <Link to ="/register" style={{textDecoration:'none'}}><span className='Login__link'>CREATE A NEW ACCOUNT</span></Link>
</form>
   </div>
    
    </div>
    </>
    
  )
}

export default Login
