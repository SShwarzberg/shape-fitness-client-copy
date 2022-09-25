import pinterest from '../../assets/socials images/pinterest.png'
import facebook from '../../assets/socials images/facebook.png'
import twitter from '../../assets/socials images/twitter.png'
import email from '../../assets/socials images/mail.png'
import './socials.scss'

export default function Socials() {
    return (
        <div className="socials">
            <div className="socials-img-container">
                <img className="pinterest" src={pinterest} alt="" />
            </div>
            <div className="socials-img-container">
                <img className="facebook" src={facebook} alt="" />
            </div>
            <div className="socials-img-container">
                <img className="twitter" src={twitter} alt="" />
            </div>
            <div className="socials-img-container">
                <img className="email" src={email} alt="" />
            </div>
        </div>
    )
}
