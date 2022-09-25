import NavLinks from '../../NavLinks/NavLinks'
import Search from '../Top/Search/Search'
import './sidebar.scss'

export default function Sidebar() {
    return (
        <div className="sidebar">
            {window.innerWidth < 900 && (
                <div className="sidebar-search-wrapper">
                    <Search sidebar="sidebar" />
                </div>
            )}
            <NavLinks flexDirection="column" specifyNav="sidebar" />
        </div>
    )
}
