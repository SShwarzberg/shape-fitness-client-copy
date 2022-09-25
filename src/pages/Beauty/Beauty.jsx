import Main from '../../components/Main/Main'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Sidebar from '../../components/Navbar/Sidebar/Sidebar'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Beauty() {
    const [windowWidth, setWindowWidth] = useState()
    const [displaySideBar, setDisplaySideBar] = useState(false)

    useEffect(() => {
        function watchWidth() {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', watchWidth)

        return () => {
            window.removeEventListener('resize', watchWidth)
        }
    }, [])

    function handleSidebarClose() {
        setDisplaySideBar(false)
    }
    function handleSidebarOpen() {
        setDisplaySideBar((prevState) => !prevState)
    }

    return (
        <div className="beauty">
            <Navbar
                handleSidebarOpen={() => handleSidebarOpen()}
                displaySideBar={displaySideBar}
            />
            {displaySideBar === true && (
                <Sidebar handleSidebarClose={() => handleSidebarClose()} />
            )}
            <Main category="beauty" />
            <Footer />
        </div>
    )
}
