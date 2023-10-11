import "./mailList.css"
import {Logo_subheadings,Logo_headings, body_styles} from '../../global'

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle" style={Logo_headings}>Save time, save money!</h1>
      <span className="mailDesc" style={Logo_subheadings}>Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer"  style={Logo_subheadings}>
        <input type="text" placeholder="Your Email" style={body_styles} />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList