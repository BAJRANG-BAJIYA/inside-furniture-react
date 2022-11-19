import { useState } from "react";


function Slider () {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction)=>{
    
       const left=(props)=>{props.direction === "left" && "10px"};
       const right=(props)=>{props.direction === "right" && "10px"};

      if(direction==="left"){
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      }else{
        setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
      }
    };
  


    return (
      <div className="Container" > 
        <div className="Arrow" direction={left} onClick={()=>handleClick("left")}>
        <ArrowLeftOutlined/>
  </div>
  
  <div className="Wrapper" slideIndex={slideIndex}>
  {sliderItems.map((item) => ( 
  <div className="Slide" bg={item.bg}> 
  <div className="ImgContainer">
  <div className="Image" src={item.img} />
  
  </div>
  
  <div className="InfoContainer" >
  <h1 className="Title" >{item.title}</h1>
  <p className="Desc" >{item.desc}</p>
  <button className="Button">Shop Now</button>
  
  </div>
    </div>
    ))}
  </div> 
  
  <div className="Arrow"  direction="right" onClick={()=>handleClick("right")}>
  <ArrowRightOutlined/>
  </div>
  
  
      </div>
    )
  };
  export default Slider;