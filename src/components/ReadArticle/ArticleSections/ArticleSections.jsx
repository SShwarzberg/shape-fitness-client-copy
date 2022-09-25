import './articleSections.scss'
import ArticleSection from './ArticleSection/ArticleSection'

export default function ArticleSections({
    articleSections,
    scrollToHeading,
    headerClicked,
}) {
    const articleTitles = articleSections.map((sectionTitle) => {
        return (
            <ArticleSection
                key={sectionTitle}
                sectionTitle={sectionTitle}
                scrollToHeading={scrollToHeading}
                headerClicked={headerClicked && headerClicked}
            />
        )
    })
    return (
        <div className="article-sections">
            <h1 className="article-sections-header">In This Article</h1>
            <div className="article-sections-list">{articleTitles}</div>
        </div>
    )
}
