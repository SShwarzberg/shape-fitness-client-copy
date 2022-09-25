import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './siteLogo.scss'

export default function SiteLogo() {
    return (
        <div className="site-logo">
            <h1 className="logo-lable" aria-label="SHAPE"></h1>
            <Link to="/">
                <img src={logo} alt="" />
            </Link>
        </div>
    )
}
