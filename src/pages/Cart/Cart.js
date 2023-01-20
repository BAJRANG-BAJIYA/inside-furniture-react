import React from 'react'
import "./Cart.css"
import { BiCartAlt, BiTrash } from "react-icons/bi";

import Navbar from "../../components/navbar/Navbar";

const Cart = () => {
  return (
    <>
    <Navbar/>
  <div className="Wrapper">
  <h1>Shopping Cart</h1>
<div className='project'>
    <div className='shop'>
      <div className='box'>
        <img  src='https://images.unsplash.com/photo-1672840087930-9717fd4f5609?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
        <div className='content'>
          <h3 >New Bed</h3>
          <h4 className='price'>Price:$1100</h4>
 
          <p className='unit'>Quantity: <input value="1" name=''/></p>
          <p className='btn-area'>
            <i className='trash' ><BiTrash/></i>
            <span className='btn2'>Remove</span>
          </p>
        </div>
      </div>
      
    </div>
          <div className='right-bar'>
            <p><span>Subtotal</span> <span>$1200</span></p>
            <hr/>
            <p><span>Tax(5%):</span> <span>$72</span></p>
            <hr/>
            <p><span>Shopping</span> <span>$1272</span></p>
            <hr/>
            <p><span>Total:</span> <span>$1272</span></p>

            <a href='#'><i className='shoping-cart'><BiCartAlt /></i>CHECKOUT</a>
            <hr/>
          </div>
</div>
  </div>
    </>
    
  )
}

export default Cart