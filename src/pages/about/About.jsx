import React from 'react'
import Navbar from "../../components/navbar/Navbar";
import NewsLetter from "../../components/newsletter/NewsLetter";
import Footer from "../../components/footer/Footer";


const About = () => {
  return (
    <>
     <NewsLetter />
    <Navbar />
<div className='About'>
   <h3>About</h3>
    </div>
    <Footer />
    </>
    
  )
}

export default About