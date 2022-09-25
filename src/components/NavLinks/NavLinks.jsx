import './navLinks.scss'
import NavLink from './NavLink/NavLink'
import { Link } from 'react-router-dom'

export default function Bottom({ specifyNav, flexDirection }) {
    const navLinkNames = [
        'FITNESS',
        'BEAUTY',
        'HEALTH AND WELLNESS',
        'NEWS AND TRENDS',
        'FOOD AND NUTRITION',
        'LIFESTYLE',
        'APPAREL AND GEAR',
        'ABOUT US',
    ]

    const navLinks = navLinkNames.map((linkName) => {
        return <NavLink specifyNav={specifyNav} linkName={linkName} />
    })

    const styles = {
        flexDirection: specifyNav === 'footer' && 'column',
        marginTop: specifyNav !== 'topNav' && 0,
    }

    const navStyles = {
        marginTop: specifyNav !== 'topNav' && 0,
    }
    return (
        <div className="navlinks" style={navStyles}>
            <ul className={`nav-links ${flexDirection} `} style={styles}>
                {navLinks}
            </ul>
        </div>
    )
}
