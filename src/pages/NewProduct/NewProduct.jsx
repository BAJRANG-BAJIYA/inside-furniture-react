import React, { useState } from 'react';
import './Newproduct.css';
import Navbar from "../../components/navbar/Navbar";
 import NewsLetter from "../../components/newsletter/NewsLetter";
import Footer from "../../components/footer/Footer";
import {allProductData} from "../../constants/data"
 



const NewProduct = () => {
  const [detail, setDetail]=useState(allProductData);

  return (
  <>
   <NewsLetter />
     <Navbar />
     <h1 className='CategoryDetail'>Custom Uplostered All New Furniture</h1>

 <div className='newBody'>
   
     
        <div className='productContainer' >
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
          <button className='btn'>ADD TO CART</button>
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

export default NewProduct;
