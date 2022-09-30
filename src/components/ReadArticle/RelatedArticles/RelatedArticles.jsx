import Articles from '../../Articles/Articles'
import './relatedArticles.scss'

export default function RelatedArticles({ category }) {
    return (
        <div className="related-articles">
            <div className="related-articles-title">Related Articles</div>
            <Articles articleStyle="small" category={category} />
        </div>
    )
}
