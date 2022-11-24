import React, { useState } from 'react';
import './Office.css';
import Navbar from "../../components/navbar/Navbar";
import NewsLetter from "../../components/newsletter/NewsLetter";
import Footer from "../../components/footer/Footer";
import {officeData} from "../../constants/data"

const Office = () => {
  const [detail, setDetail]=useState(officeData);



  return (
  <>
   <NewsLetter />
     <Navbar />
     <h1 className='officeCategoryDetail'>Custom Desk Chairs + Ottomans & Benches</h1>

 <div className='bodyOffice'>
   
     
        <div className='officeProductContainer' >
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

export default Office;