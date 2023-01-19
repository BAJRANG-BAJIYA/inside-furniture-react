import React from 'react'
import './BestSellers.css';

const BestSellers = () => {
  return (
    <section className="bestSellers">
    <div className="bestSellers__textContainer">
    <h2 className="bestSellers__textContainer-title">Best Sellers</h2>
    <p className="bestSellers__textContainer-description">Favourate for a reason</p>
    <a  className="bestSellers__textContainer-button" href='/bedroom'>Shop Now</a>
  </div>
  <div className="bestSellers__imageContainer">
    <img className="bestSellers__imageContainer-image" src="https://images.unsplash.com/photo-1615529162924-f8605388461d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="image alt text" />
  </div>
</section>
  )
}
export default BestSellers