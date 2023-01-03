import "./Navbar.css"
import { Link }from "react-router-dom"
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobile, setIsMobile]=useState(false)
  return (
    <div className="navbar">
      <ul className= { isMobile ? "nav-links-mobile" : "leftSide"}>
        <li className="leftContent"><Link to ="/newproduct" style={{textDecoration:'none'}}><span >NEW</span></Link></li>
        <li className="leftContent"><Link to ="/bedroom" style={{textDecoration:'none'}}><span>BEDROOM</span></Link></li>
        <li className="leftContent"><Link to ="/living" style={{textDecoration:'none'}}><span>LIVING</span></Link></li>
        <li className="leftContent"><Link to ="/dining" style={{textDecoration:'none'}}><span>DINING</span></Link></li>
        <li className="leftContent"><Link to ="/outdoor" style={{textDecoration:'none'}}><span>OUTDOOR</span></Link></li>
        <li className="leftContent"><Link to ="/office" style={{textDecoration:'none'}}><span>OFFICE</span></Link></li>
      </ul>
<a  aria-label="The Inside" href="/" className="logo"><Link to ="/"><img className="insideLogo" src="https://theinside.imgix.net/nav/logo.svg?format=auto" alt="logo"></img></Link>
  
</a>
      <ul className= { isMobile ? "nav-links-mobile" : "rightSide"}>
      <li className="rightContent"><span>COLLABORATION</span></li>
      <li className="rightContent"><span>DESIGNS</span></li>
      <li className="rightContent"><Link to ="/register" style={{textDecoration:'none'}}><span>REGISTER</span></Link></li>
      <li className="rightContent"><Link to ="/login" style={{textDecoration:'none'}}><span>LOGIN</span></Link></li>
      <li className="rightContent"><Link to ="/search" style={{textDecoration:'none'}}><span>SEARCH</span></Link></li> 
      <li className="rightContent"><Link to ="/cart" style={{textDecoration:'none'}}><span>CART</span></Link></li>
          
        </ul>
        <button className="mobile-menu-icon">
          {isMobile ? (
            <i className="FaBars"><FaBars /></i>
          ) : (
            <i className="FaTimes"><FaTimes /></i>
          )
          }
        </button>
    </div>
  )
}

export default Navbar;