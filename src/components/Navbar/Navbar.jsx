import Navlinks from '../NavLinks/NavLinks'
import Top from './Top/Top'
import './navbar.scss'
import { useEffect, useState } from 'react'

export default function Navbar() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        function watchWidth() {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', watchWidth)

        return () => {
            window.removeEventListener('resize', watchWidth)
        }
    }, [])

    return (
        <div
            className={`navbar ${windowWidth < 1300 && 'navbar-fixed'}`}
            aria-label="navbar"
        >
            <Top windowWidth={windowWidth} />
            {windowWidth > 1300 && (
                <Navlinks flexDirection="row" specifyNav="topNav" />
            )}
        </div>
    )
}
