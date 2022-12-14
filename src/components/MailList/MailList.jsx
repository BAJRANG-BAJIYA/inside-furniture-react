import "./mailList.css"
import { BiSend } from "react-icons/bi";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mail__Title">Save time, save money!</h1>
      <h2 className="mail__Desc">Sign up and we'll send the best deals to you</h2>
      <div className="mail__InputContainer">
        <input type="text" placeholder="Your Email" className="mail__input"/>
        <button className="mail__button"><BiSend  size={22}/></button>
      </div> 
    </div>
  )
}

export default MailList
