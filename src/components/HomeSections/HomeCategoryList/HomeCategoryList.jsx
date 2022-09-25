import Articles from '../../Articles/Articles'
import HomeCategoryLink from './HomeCategoryLink/HomeCategoryLink'
import './homeCategoryList.scss'

export default function HomeCategoryList({ header, category }) {
    const setArticleStyle =
        (header === 'Sweat Equity' && 'large') ||
        (header === 'Skin Care' && 'large') ||
        (header === 'Workout And Gear' && 'large') ||
        (header === 'Astrology' && 'large') ||
        (header === 'Modify This Move' && 'trending') ||
        (header === 'Health And Nutrition' && 'trending') ||
        (header === 'The Latest' && 'midSize') ||
        (header === 'Celebrity Workouts' && 'midSize') ||
        (header === 'Mental Health' && 'midSize') ||
        (header === 'The Latest' && 'midSize')

    const coloredBgSection =
        (header === 'Modify This Move' || header === 'Health And Nutrition') &&
        'bg-purple'

    return (
        <div className={`home-category-list ${coloredBgSection}`}>
            <HomeCategoryLink header={header} />
            <div className="home-category-list-content">
                {header === 'Health And Nutrition' && (
                    <Articles articleStyle="x-large" category="fitness" />
                )}
                <Articles articleStyle={setArticleStyle} category={category} />
                {header === 'Modify This Move' && (
                    <Articles articleStyle="x-large" category="butt-workouts" />
                )}
            </div>
        </div>
    )
}
