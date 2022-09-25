import Articles from '../Articles/Articles'
import HeaderCard from './HeaderCard/HeaderCard'
import './main.scss'

export default function Main({ category }) {
    return (
        <div className="main">
            <HeaderCard category={category} />
            <Articles category={category} articleStyle={'large'} />
            <Articles category={category} articleStyle={'small'} />
        </div>
    )
}
