import React, { useState } from 'react'
import './Bedroom.css'
import { bedsData } from '../../constants/data'
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import NewsLetter from "../../components/newsletter/NewsLetter";

const Bedroom = () => {
  const [detail, setDetail]= useState(bedsData);
  return (
  <>
  <NewsLetter/>
  <Navbar/>
  <h1 className='CategoryDetail'>Custom Uplostered BedRoom Furniture</h1>
 <section className='BedRoom'>
    
    {detail.map((detail)=>{
      return(
        <div className='column' key={detail.id}> 
    <div className='Card'>
<div className='img'>
<img src={detail.img}/>
</div>
<div className='InfoContainer'>
<h1 className='ProductName' >{detail.productName}</h1>
<div className='Star'>
  <i className="fa fa star" aria-hidden="true"></i>
  <i className="fa fa star" aria-hidden="true"></i>
  <i className="fa fa star" aria-hidden="true"></i>
  <i className="fa fa star" aria-hidden="true"></i>
  <i className="fa fa star" aria-hidden="true"></i>
  <span>({detail.avgRating})</span>
</div>
<h3 className='Price'>{detail.price}</h3>
<button className='Button'>ADD TO CART</button>
</div>
    </div>
    </div>
      )
    })}
    
    </section>
    <h1 className='CategoryDetail'></h1>

<Footer/>
  </>
   
  )
}

export default Bedroom