import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fListsContainer">
        <div className="fList">
        <a className="footerInfo">ABOUT THE INSIDE</a>
          <a className="fListItem" href="">About Us</a>
          <a className="fListItem">Careers</a>
          <a className="fListItem">COVID-19</a>
          <a className="fListItem">Press</a>
          <a className="fListItem">Reviews</a>
          <a className="fListItem">Blogs</a>
        </div>
        <div className="fList">
        <a className="footerInfo">RESOURCES</a>
          <a className="fListItem" href="">Contact</a>
          <a className="fListItem">FAQ</a>
          <a className="fListItem">Our Guarantee</a>
          <a className="fListItem">Shipping</a>
          <a className="fListItem">Financing</a>
          <a className="fListItem">Affiliates</a>
          <a className="fListItem">Gift Cards</a>
        </div>
        <div className="fList">
        <a className="footerInfo">TRADE</a>
          <a className="fListItem" href="">Trade Loyalty Program</a>
        </div>
        
        <div className="fList">
        <a className="footerInfo">NEED HELP?</a>
          <a className="fListItem">If you have a question about your order, your swatches, the assortment, or anything else on your mind, we're here <br/>for you! </a>
         
        </div>
      </div>
      <div className="fText">Copyright © 2022 INSIDEFURNITURE.COM.</div>
    </div>
  );
};

export default Footer;
