import "./featured.css";
import featured from '../../constants/data';
import { useState } from "react";

const Featured = () => {
  const [detail, setDetail]=useState(featured);
  return (
    <>
<div className="featuredBody">
    {detail && detail.map((index)=>{
return(
  <div className="featuredItem" key={index.id}>
        <img
          src={index.img}
          alt="image"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>{index.productName}</h1>
          <h2>{index.price}</h2>
        </div>
      </div>
)
    })}
    </div>
    </>
  );
};

export default Featured;







