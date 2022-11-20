import React from 'react'

import Navbar from "../../components/navbar/Navbar";
import NewsLetter from "../../components/newsletter/NewsLetter";
import Footer from "../../components/footer/Footer";
import MailList from '../../components/MailList/MailList';
import Banner from '../../components/banner/Banner';

import Gallery from '../../components/gallery/Gallery';

const Home = () => {
  return (
    <div className='Home'>
  
    <NewsLetter/>
    <Navbar />
    <Banner/>
    <Gallery/>
    <MailList/>
    <Footer />
    
    </div>
  )
}

export default Home