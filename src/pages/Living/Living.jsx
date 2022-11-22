import React, { useState } from 'react'
import './Living.css'
import Navbar from "../../components/navbar/Navbar";
import NewsLetter from "../../components/newsletter/NewsLetter";
import Footer from "../../components/footer/Footer";
import {bedsData} from "../../constants/data"

const Living = () => {
  const [detail, setDetail]=useState(bedsData);

  return (
    <>
    <NewsLetter/>
    <Navbar/>
    <section className='Living'>
      {
        detail.map((detail)=>{
        return(
          <div className='column' key={detail.id}>
    <div className='Card'>
<div className='img' key={detail.id}>
<img src={detail.img}/>
</div>
<div className='InfoContainer' >
<h1 className='ProductName' >{detail.productName}</h1>
<div className='Star' >
  <i className="fa fa star" aria-hidden="true"></i>
  <i className="fa fa star" aria-hidden="true"></i>
  <i className="fa fa star" aria-hidden="true"></i>
  <i className="fa fa star" aria-hidden="true"></i>
  <i className="fa fa star" aria-hidden="true"></i>
  <span>(04)</span>
</div>
<h3 className='Price'>{detail.price}</h3>
<button className='Button'>ADD TO CART</button>
</div>
    </div>
    </div>
        )
      })}


    
    </section>

  
   <Footer/>
    </>
    
  )
}

export default Living