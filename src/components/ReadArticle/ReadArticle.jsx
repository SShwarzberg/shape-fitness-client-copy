import Navbar from '../Navbar/Navbar'
import ArticleHeader from './ArticleHeader/ArticleHeader'
import ArticleSections from './ArticleSections/ArticleSections'
import ArticleBody from './ArticleBody/ArticleBody'
import './readArticle.scss'
import RelatedArticles from './RelatedArticles/RelatedArticles'
import Footer from '../Footer/Footer'
import { useState, useEffect, useContext } from 'react'
import { pathContext } from '../../App'

export default function ReadArticle() {
    const { pathName, setPathName } = useContext(pathContext)
    const [article, setArticle] = useState({
        article_body: [],
        article_sections: null,
        author: '',
        img: '',
        category: '',
    })
    const [headerClicked, setHeaderClicked] = useState('')

    useEffect(() => {
        async function getArticleBody() {
            const res = await fetch(
                `https://shape-backend-server.netlify.app/.netlify/functions/api/${window.location.pathname}`
            )
            const data = await res.json()
            setArticle({
                article_body: data.article_body.match(/>[\s\S]*?</g),
                article_sections: data.article_body.match(/>>h1[\s\S]*?</g),
                author: data.author,
                img: data.img,
                title: data.title,
                created_at: data.createdAt,
                category: data.category,
            })
        }
        getArticleBody()
    }, [])

    function scrollToHeading(titleClicked) {
        setHeaderClicked(titleClicked)
    }

    return (
        pathName && (
            <div className="read-article">
                <Navbar />
                <div className="read-article-main">
                    <ArticleHeader author={article.author} article={article} />
                    <div className="article-content">
                        {article.article_sections && (
                            <ArticleSections
                                scrollToHeading={scrollToHeading}
                                articleSections={article.article_sections}
                                headerClicked={headerClicked}
                            />
                        )}
                        {article.article_body && (
                            <ArticleBody
                                headerClicked={headerClicked}
                                articleBody={article.article_body}
                                img={article.img}
                            />
                        )}
                    </div>
                </div>
                <RelatedArticles category={article.category} />
                <Footer />
            </div>
        )
    )
}
