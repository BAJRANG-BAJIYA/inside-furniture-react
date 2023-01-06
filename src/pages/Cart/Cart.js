import React from 'react'
import "./Cart.css"
import { BiTrash } from "react-icons/bi";

const Cart = () => {
  return (
    <>
  <div className="CartContainer">
  <h1 className='CartContainer__CartHeading'>Shopping Cart</h1>
<div className='CartContainer__Cart'>
    <div className='CartContainer__Cart__Products'>
      <div className='CartContainer__Cart__Products__Product'>
        <img  src='https://images.unsplash.com/photo-1672840087930-9717fd4f5609?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
        <div className='CartContainer__Cart__Products__Product-info'>
          <h3 className='CartContainer__Cart__Products__Product-name'>New Bed</h3>
          <h2 className='CartContainer__Cart__Products__Product-price'>$1100</h2>
          <h2 className='CartContainer__Cart__Products__Product-offer'>20%</h2>
          <p className='CartContainer__Cart__Products__Product-quantity'>Qnt:2</p> <input value="1" name=''/>
          <p>
            <i className='' aria-hidden="true"><BiTrash/></i>
            <span className='CartContainer__Cart__Products__Product-remove'>Remove</span>
          </p>
        </div>
      </div>
    </div>
    <div className='cart-total'></div>
</div>
  </div>
    </>
    
  )
}

export default Cart