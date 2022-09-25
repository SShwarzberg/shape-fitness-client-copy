import Articles from '../../Articles/Articles'
import './relatedArticles.scss'

export default function RelatedArticles() {
    return (
        <div className="related-articles">
            Related Articles
            <Articles articleStyle="small" category="beauty" />
        </div>
    )
}
