import './articles.scss'
import Article from './Article/Article'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Articles({ articleStyle, category }) {
    const [currentArticles, setCurrentArticles] = useState('')
    const [getArticles, setGetArticles] = useState(null)

    useEffect(() => {
        async function fetchArticles() {
            const res = await fetch(`http://localhost:3000/${category}`)
            const data = await res.json()
            setCurrentArticles(data)
        }
        fetchArticles()
    }, [])

    useEffect(() => {
        setAricleCategory()
    }, [currentArticles])

    function setAricleCategory() {
        let indexLg = 0
        let indexXLarge = 0
        let indexTrending = 0
        let indexMidsize = 0

        const createArticles =
            currentArticles &&
            currentArticles.map((article, i) => {
                const newArticle = (
                    <Article
                        key={article._id}
                        article={article}
                        articleStyle={articleStyle}
                    />
                )
                {
                    if (indexLg < 3 && articleStyle === 'large') {
                        indexLg++
                        return newArticle
                    } else if (articleStyle === 'x-large') {
                        if (indexXLarge < 1) {
                            indexXLarge++
                            return newArticle
                        }
                    } else if (articleStyle === 'small') {
                        if (i > 3) {
                            return newArticle
                        }
                    } else if (articleStyle === 'trending') {
                        if (indexTrending < 5) {
                            indexTrending++
                            return newArticle
                        }
                    } else if (articleStyle === 'midSize') {
                        if (indexMidsize < 6) {
                            indexMidsize++
                            return (
                                <>
                                    {newArticle}
                                    {indexMidsize < 6 && (
                                        <div className="line"></div>
                                    )}
                                </>
                            )
                        }
                    }
                }
            })
        setGetArticles(createArticles)
    }

    return (
        <div className={`articles articles-${articleStyle}`}>
            {getArticles ? getArticles : 'Loading...'}
        </div>
    )
}
