import { useState } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown/Dropdown'
import './navLink.scss'

export default function NavLink(props) {
    const [dropdownOnHover, setDropdownOnHover] = useState(false)

    function handleMouseEnter() {
        setDropdownOnHover(true)
    }

    function handleMouseLeave() {
        setDropdownOnHover(false)
    }

    function getLinkEndpoint(linkName) {
        switch (linkName) {
            case 'FITNESS':
                return 'fitness'
            case 'BEAUTY':
                return 'beauty'
            case 'HEALTH AND WELLNESS':
                return 'health-and-wellness'
            case 'NEWS AND TRENDS':
                return 'news-and-trends'
            case 'FOOD AND NUTRITION':
                return 'food-and-nutrition'
            case 'LIFESTYLE':
                return 'lifestyle'
            case 'APPAREL AND GEAR':
                return 'apparel-and-gear'
            case 'ABOUT US':
                return 'about'
        }
    }

    const linkStyles = {
        textDecoration: 'inherit',
        color: 'inherit',
        fontSize: props.specifyNav === 'footer' ? '0.82rem' : '0.875rem',
        fontWeight: props.specifyNav === 'footer' && '700',
        alignSelf: 'start',
    }

    return (
        <div
            className="nav-link"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link to={`/${getLinkEndpoint(props.linkName)}`} style={linkStyles}>
                <li className="fitness">{props.linkName}</li>
            </Link>
            {dropdownOnHover &&
                props.linkName !== 'ABOUT US' &&
                props.specifyNav === 'topNav' && (
                    <Dropdown key={props.linkName} linkName={props.linkName} />
                )}
        </div>
    )
}
