import './articleHeading1.scss'

export default function ArticleHeading1({ heading }) {
    return (
        <div className={`article-heading`} id={heading.replaceAll(' ', '_')}>
            {heading}
        </div>
    )
}
