import './articleBody.scss'
import likeImage from '../../../assets/like.png'
import Paragraph from './Paragraph/Paragraph'
import ArticleHeading1 from './ArticleHeading1/ArticleHeading1'
import ArticleHeading2 from './ArticleHeading2/ArticleHeading2'
import { nanoid } from 'nanoid'
import { useEffect, useRef } from 'react'

export default function ArticleBody({ articleBody, headerClicked, img }) {
    const inputRef = useRef()
    useEffect(() => {
        const titles = Array.from(document.querySelectorAll('.article-heading'))

        titles.map((title, i) => {
            if (
                headerClicked.target.innerHTML
                    .replaceAll('>>h1', '')
                    .replaceAll('<', '')
                    .replaceAll('\n', '') === title.id.replaceAll('_', ' ')
            ) {
                titles[i].scrollIntoView({ behavior: 'smooth' })
            }
        })
    }, [headerClicked])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="article-body">
            <img src={img} alt="" className="article-main-img" />
            <div className="photo-credit" ref={inputRef}>
                PHOTO: GETTY IMAGES
            </div>
            {articleBody.map((paragraph) => {
                if (paragraph.includes('>>p')) {
                    return <Paragraph key={nanoid()} paragraph={paragraph} />
                } else if (paragraph.includes('>>h1')) {
                    paragraph = paragraph
                        .replaceAll('>>h1', '')
                        .replaceAll('<', '')
                        .replaceAll('\n', '')
                    return (
                        <ArticleHeading1
                            key={nanoid()}
                            headerClicked={headerClicked && headerClicked}
                            heading={paragraph}
                        />
                    )
                } else if (paragraph.includes('>>h2')) {
                    return (
                        <ArticleHeading2 key={nanoid()} heading={paragraph} />
                    )
                }
            })}
            <div className="rate-article">
                <p className="rate-article-question">Was this page helpful?</p>
                <div className="rating-buttons">
                    <div className="like-button">
                        <img src={likeImage} alt="" />
                    </div>
                    <div className="dislike-button">
                        <img src={likeImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
