import './articleHeading2.scss'

export default function ArticleHeading2({ heading }) {
    return (
        <div className="section-subheader">
            {heading.replaceAll('>>h2', '').replaceAll('<', '')}
        </div>
    )
}
