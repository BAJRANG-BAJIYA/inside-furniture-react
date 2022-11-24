import "./Navbar.css"
import { Link }from "react-router-dom"
const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="leftSide">
        <li className="leftContent"><Link to ="/newproduct" style={{textDecoration:'none'}}><span >NEW</span></Link></li>
        <li className="leftContent"><Link to ="/bedroom" style={{textDecoration:'none'}}><span>BEDROOM</span></Link></li>
        <li className="leftContent"><Link to ="/living" style={{textDecoration:'none'}}><span>LIVING</span></Link></li>
        <li className="leftContent"><Link to ="/dining" style={{textDecoration:'none'}}><span>DINING</span></Link></li>
        <li className="leftContent"><Link to ="/outdoor" style={{textDecoration:'none'}}><span>OUTDOOR</span></Link></li>
        <li className="leftContent"><Link to ="/office" style={{textDecoration:'none'}}><span>OFFICE</span></Link></li>
      </ul>
<a  aria-label="The Inside" href="/" className="logo"><Link to ="/"><img className="insideLogo" src="https://theinside.imgix.net/nav/logo.svg?format=auto" alt="logo"></img></Link>
  
</a>
      <ul className="rightSide">
      <li className="rightContent"><span>COLLABORATION</span></li>
      <li className="rightContent"><span>DESIGNS</span></li>
      <a className="navButton"><Link to ="/register" style={{textDecoration:'none'}}>Register</Link></a>
      <a className="navButton"><Link to ="/login" style={{textDecoration:'none'}}>Login</Link></a>
      <a className="navCart"><Link to ="/Cart" style={{textDecoration:'none'}}>Cart</Link></a>
          
        </ul>
    </div>
  )
}

export default Navbar;