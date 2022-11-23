import React from 'react';
import './Newproduct.css';
import Navbar from "../../components/navbar/Navbar";
 import NewsLetter from "../../components/newsletter/NewsLetter";
import Footer from "../../components/footer/Footer";
 
 



const NewProduct = () => {
  return (
    <div className='body'>
    <NewsLetter />
     <Navbar />
<div className='productContainer'>
       <div className="card">
       <div className="imgBx">
        <img src='https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVkfGVufDB8fDB8fA%3D%3D&w=1000&q=80' />
       </div>
        <div className='content'>
          <div className='productName'>
            <h3>rayan ronald</h3>
          </div>
          <div className='priceRating'>
            <h2>13.55</h2>
            <div className='rating'>
            {/* <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
        */}
            </div>
          </div>
          <button>ADD TO CART</button>
        </div>
       </div>
    
    </div>
    
    <Footer />
    </div>
    
  )
}

export default NewProduct;
