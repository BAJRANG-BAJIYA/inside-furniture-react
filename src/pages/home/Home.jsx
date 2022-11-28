import React from 'react'

import Navbar from "../../components/navbar/Navbar";
import NewsLetter from "../../components/newsletter/NewsLetter";
import Footer from "../../components/footer/Footer";
import MailList from '../../components/MailList/MailList';
import Banner from '../../components/banner/Banner';
// import Featured from '../../components/featured/Featured';
import Categories from '../../components/CategoryItem/Categories';

// import ShopAll from '../../components/shopAll/ShopAll';




const Home = () => {
  return (
    <div className='Home'>
    <NewsLetter/>
    <Navbar />
    <Banner/>
    {/* <ShopAll/> */}
    {/* <Featured/> */}
    <Categories/>
    <MailList/>
    <Footer />
    </div>
  )
}

export default Home