import React from 'react'
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import NewsLetter from "../../components/newsletter/NewsLetter";
import Footer from "../../components/footer/Footer";
import MailList from '../../components/MailList/MailList';
import Banner from '../../components/banner/Banner';
// import Featured from '../../components/featured/Featured';
// import Categories from '../../components/CategoryItem/Categories';

import ShopAll from '../../components/shopAll/ShopAll';
import ArrivalPoster from '../../components/ArrivalPoster/ArrivalPoster';
import BestSellers from '../../components/BestSellers/BestSellers';
import CategoryItem from '../../components/CategoryItem/CategoryItem';



const Home = () => {
  return (
    <div className='Home'>
    <NewsLetter/>
    <Navbar />
    <Banner/>
    <CategoryItem/>
    <ArrivalPoster/>
    <ShopAll/>
    {/* <Featured/> */}
    {/* <Categories/> */}
    <BestSellers/>
  
    <MailList/>
    <Footer />
    </div>
  )
}

export default Home