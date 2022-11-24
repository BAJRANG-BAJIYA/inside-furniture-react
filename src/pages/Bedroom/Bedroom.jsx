import React, { useState } from 'react'
import './Bedroom.css'
import { bedsData } from '../../constants/data'
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import NewsLetter from "../../components/newsletter/NewsLetter";

const Bedroom = () => {
  const [detail, setDetail]=useState(bedsData);

  return (
  <>
   <NewsLetter />
     <Navbar />
     <h1 className='bedroomCategoryDetail'>Custom Uplostered Beds</h1>

 <div className='bodyBedroom'>
   
     
        <div className='bedroomProductContainer' >
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

export default Bedroom;
