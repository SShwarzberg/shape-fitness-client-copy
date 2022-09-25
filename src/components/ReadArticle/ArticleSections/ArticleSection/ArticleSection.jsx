import { nanoid } from 'nanoid'

export default function ArticleSection({
    sectionTitle,
    scrollToHeading,
    headerClicked,
}) {
    return (
        <div
            key={nanoid()}
            className={`article-sections-title ${
                headerClicked === sectionTitle && 'selected-section'
            }`}
            onClick={(e) => scrollToHeading(e, sectionTitle)}
        >
            {sectionTitle.replaceAll('>>h1', '').replaceAll('<', '')}
        </div>
    )
}
