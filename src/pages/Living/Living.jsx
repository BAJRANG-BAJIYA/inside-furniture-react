import React, { useState } from 'react'
import './Living.css'
import Navbar from "../../components/navbar/Navbar";
import NewsLetter from "../../components/newsletter/NewsLetter";
import Footer from "../../components/footer/Footer";
import {LivingData} from "../../constants/data"

const Living = () => {
  const [detail, setDetail]=useState(LivingData);

  return (
  <>
   <NewsLetter />
     <Navbar />
     <h1 className='CategoryDetailLiving'>Living Chair & Ottomans</h1>

 <div className='bodyLiving'>
   
     
        <div className='LivingProductContainer' >
        {detail.map((detail)=>{
      return(
       <div className="card" key={detail.id}>
       <div className="imgBx">
        <img src={detail.img} />
       </div>
        <div className='content'>
          <div className='productName'>
            <h3>{detail.productName}</h3>
          </div>
          <div className='priceRating'>
            <h2>{detail.price}</h2>
            <div className='rating'>
            {/* <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
        */}
            </div>
          </div>
          <button>ADD TO CART</button>
        </div>
       </div>
      )
     })}
     </div>
    </div>
    <Footer />
  </>
   
    
  )
}

export default Living;