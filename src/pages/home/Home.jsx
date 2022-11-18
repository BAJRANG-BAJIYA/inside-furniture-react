import React from 'react'
import Navbar from "../../components/navbar/Navbar";
import NewsLetter from "../../components/newsletter/NewsLetter";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className='Home'>
    <NewsLetter />
    <Navbar />
    <Footer />
    
    </div>
  )
}

export default Home