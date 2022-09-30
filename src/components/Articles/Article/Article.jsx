import { NavLink } from 'react-router-dom'
import './article.scss'
import { pathContext } from '../../../App'
import { useContext } from 'react'

export default function Article({ article, articleStyle }) {
    const { pathName, setPathName } = useContext(pathContext)
    const linkStyles = {
        textDecoration: 'inherit',
        color: 'inherit',
    }
    function handleClick() {
        setPathName(window.location.pathname)
    }
    return (
        <div className={`article article-${articleStyle}`}>
            <NavLink
                className="navlink"
                style={linkStyles}
                to={`/readarticle/${article._id}`}
                onClick={handleClick}
            >
                <img
                    className="article-image"
                    src={article.img}
                    onError={() => handleError()}
                    alt=""
                />
                <div className="info">
                    {articleStyle !== 'trending' && (
                        <p className="category">
                            {article.category.toUpperCase()}
                        </p>
                    )}
                    <h1 className="title">{article.title}</h1>
                    <p className="author">{article.author}</p>
                </div>
            </NavLink>
        </div>
    )
}
