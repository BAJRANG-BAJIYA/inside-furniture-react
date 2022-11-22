import React from 'react'
import './Bedroom.css'

const Bedroom = () => {
  return (
    <section className='BedRoom'>
    <div className='column'>
    <div className='Card'>
<div className='img'>
<img src='https://theinside.imgix.net/products/XchwoPNxocDynCp5myCkjc6YZDRqUkdo0GfCJ1uB.jpg?auto=compress%2Cformat&ixlib=react-9.3.0&w=689'/>
</div>
<div className='InfoContainer'>
<h1 className='ProductName' >Custom Upholstered Beds</h1>
<div className='Star'>
  <i className="fa fa star" aria-hidden="true"></i>
  <i className="fa fa star" aria-hidden="true"></i>
  <i className="fa fa star" aria-hidden="true"></i>
  <i className="fa fa star" aria-hidden="true"></i>
  <i className="fa fa star" aria-hidden="true"></i>
  <span>(03)</span>
</div>
<h3 className='Price'>$400</h3>
<button className='Button'>ADD TO CART</button>
</div>
    </div>
    </div>
    </section>
  )
}

export default Bedroom