import nextImage from '../../../../assets/next.png'
import './homeCategoryLink.scss'
import { Link } from 'react-router-dom'

export default function HomeCategoryLink({ header }) {
    return (
        <Link
            to={`/${header.replaceAll(' ', '-')}`}
            className="home-category-link"
        >
            {header}
            <img src={nextImage} alt="" />
        </Link>
    )
}
