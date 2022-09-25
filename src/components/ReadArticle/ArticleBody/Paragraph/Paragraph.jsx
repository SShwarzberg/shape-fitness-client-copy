import './paragraph.scss'

export default function Paragraph({ paragraph }) {
    return (
        <>
            <div className="article-paragraph">
                {paragraph.replace('>>p', '').replace('<', '')}
            </div>
        </>
    )
}
