import './top.scss'
import SiteLogo from '../../SiteLogo/SiteLogo'
import { useState, useEffect } from 'react'
import menu from '../../../assets/menu.png'
import close from '../../../assets/close.png'
import Sidebar from '../Sidebar/Sidebar'
import Search from './Search/Search'

export default function Top({ windowWidth }) {
    const [displaySideBar, setDisplaySideBar] = useState(false)
    const [overflowHidden, setOverflowHidden] = useState()

    useEffect(() => {
        if (windowWidth > 1200) {
            setDisplaySideBar(false)
        }
    }, [windowWidth])

    useEffect(() => {
        if (overflowHidden === true) document.body.style.overflow = 'hidden'
        else document.body.style.overflow = 'auto'
    }, [overflowHidden])

    function handleSidebarOpen() {
        setOverflowHidden((prevState) => !prevState)
        setDisplaySideBar((prevState) => !prevState)
    }

    return (
        <div className="top">
            {displaySideBar === true && <Sidebar />}
            <div className="left">
                {window.innerWidth < 1300 && (
                    <img
                        className="menu-button"
                        src={displaySideBar ? close : menu}
                        onClick={handleSidebarOpen}
                    />
                )}
                <SiteLogo />
            </div>
            <div className="right">
                {window.innerWidth > 900 && <Search />}
                <h3>Newsletter</h3>
            </div>
        </div>
    )
}
