import nextImage from '../../../../assets/next.png'
import './homeCategoryLink.scss'

export default function HomeCategoryLink({ header }) {
    return (
        <div className="home-category-link">
            {header}
            <img src={nextImage} alt="" />
        </div>
    )
}
