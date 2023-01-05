import React from 'react'
import "./Cart.css"

const Cart = () => {
  return (
    <>
  <div className="CartContainer">
  <h1>Shopping Cart</h1>
<div className='CartContainer__Cart'>
    <div className='CartContainer__Cart__Products'>
      <div className='CartContainer__Cart__Products__Product'>
        <img  src=''/>
        <div className='CartContainer__Cart__Products__Product-info'>
          <h3 className='CartContainer__Cart__Products__Product-name'>New Bed</h3>
          <h2 className='CartContainer__Cart__Products__Product-price'>$1100</h2>
          <h2 className='CartContainer__Cart__Products__Product-offer'>20%</h2>
          <p className='CartContainer__Cart__Products__Product-quantity'>Qnt:2</p> <input value="1" name=''/>
          
        </div>
      </div>
    </div>
 
</div>
  </div>
    </>
    
  )
}

export default Cart