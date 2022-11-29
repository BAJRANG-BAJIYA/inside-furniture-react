import "./featured.css";
import featured from '../../constants/data';
import { useState } from "react";

const Featured = () => {
  const [detail, setDetail]=useState(featured);


  return (
    <>
<div className="featuredBody">
    {detail.map((index)=>{
      return(
        <div className="featuredItem" key={index.id}>
        <div className="featuredImgBx"><img
          src={index.img}
          alt="image"
          className="featuredImgs"
        /></div>
        <div className="featuredTitles">
          <h3 className="featuredProductName">{index.productName}</h3>
          <a href="/" className="featuredButton">Buy Now</a>
        </div>
      </div>
      )
    })}
 

    
    </div>
    </>
  );
};

export default Featured;







