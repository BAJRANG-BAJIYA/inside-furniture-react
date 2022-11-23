import "./Navbar.css"
import { Link }from "react-router-dom"
const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="leftSide">
        <li className="leftContent"><Link to ="/newproduct"><span>NEW</span></Link></li>
        <li className="leftContent"><Link to ="/bedroom"> <span>BEDROOM</span></Link></li>
        <li className="leftContent"><Link to ="/living"> <span>LIVING</span></Link></li>
        <li className="leftContent"><Link to ="/dining"><span>DINING</span></Link></li>
        <li className="leftContent"><Link to ="/outdoor"><span>OUTDOOR</span></Link></li>
        <li className="leftContent"><Link to ="/office"><span>OFFICE</span></Link></li>
      </ul>
<a  aria-label="The Inside" href="/" className="logo"><Link to ="/"><img className="insideLogo" src="https://theinside.imgix.net/nav/logo.svg?format=auto" alt="logo"></img></Link>
  
</a>
      <ul className="rightSide">
      <li className="rightContent"><span>COLLABORATION</span></li>
      <li className="rightContent"><span>DESIGN SERVICES</span></li>
      <button className="navButton"><Link to ="/register">Register</Link></button>
      <button className="navButton"><Link to ="/login">Login</Link></button>
          
        </ul>
    </div>
  )
}

export default Navbar