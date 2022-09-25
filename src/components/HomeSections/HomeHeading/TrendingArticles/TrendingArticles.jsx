import './trendingArticles.scss'
import Articles from '../../../Articles/Articles'

export default function TrendingArticles() {
    return (
        <div className="trending-articles">
            <h1 className="title">Trending Now</h1>
            <Articles articleStyle="trending" category="beauty" />
        </div>
    )
}
