import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="leftSide">
        <li className="leftContent"><span>NEW</span></li>
        <li className="leftContent"><span>BEDROOM</span></li>
        <li className="leftContent"><span>LIVING</span></li>
        <li className="leftContent"><span>DINING</span></li>
        <li className="leftContent"><span>OUTDOOR</span></li>
        <li className="leftContent"><span>DECOR</span></li>
      </ul>
<a  aria-label="The Inside" href="/" className="logo">
  <img className="insideLogo" src="https://theinside.imgix.net/nav/logo.svg?format=auto" alt="logo"></img>
</a>
      <ul className="rightSide">
      <li className="rightContent"><span>COLLABORATION</span></li>
      <li className="rightContent"><span>DESIGN SERVICES</span></li>
      
        

          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
          
        </ul>
    </div>
  )
}

export default Navbar