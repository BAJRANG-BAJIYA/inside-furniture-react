import React from 'react'
import './ArrivalPoster.css';
import { Link } from 'react-router-dom';

const ArrivalPoster = () => {
  return (
    <section className="section-feature">
  <div className="feature__image-container">
    <img className="feature__image" src="https://images.unsplash.com/photo-1615529162924-f8605388461d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="image alt text" />
  </div>
  <div className="feature__text-container">
    <h2 className="feature__title">New Arrivals...</h2>
    <p className="feature__description">Slip into something <br/> more Comfortable.</p>
    <Link to ="/newproduct"  style={{textDecoration:'none'}}><span className="feature__button" href=''>Shop the SlipCovered Bed</span></Link>
    
  </div>
</section>

  )
}

export default ArrivalPoster