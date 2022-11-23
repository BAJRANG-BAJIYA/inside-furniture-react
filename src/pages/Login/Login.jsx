import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import NewsLetter from "../../components/newsletter/NewsLetter";
import Footer from "../../components/footer/Footer";
import { Link } from 'react-router-dom';
import "./login.css";

const Login = () => {
  return (
    <>
     <NewsLetter />
    <Navbar />
<div className='Login'>
   <div className='Wrapper'>
<form className='Form'>
<h1 className='Title'> SIGN-IN</h1>
  <input placeholder='username'/>
  <input placeholder='password'/>
  <Link to ="/"><button>Login</button></Link>
  <span className='link'>DO NOT REMEMBER THE PASSWORD</span>
  <Link to ="/register"><span className='link'>CREATE A NEW ACCOUNT</span></Link>
</form>
   </div>
    
    </div>
    <Footer />

    </>
    
  )
}

export default Login
