import { useEffect } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './article.scss'

export default function Article({ article, articleStyle, handleClick }) {
    const linkStyles = {
        textDecoration: 'inherit',
        color: 'inherit',
    }
    return (
        <NavLink
            className="navlink"
            style={linkStyles}
            to={`/readarticle/${article._id}`}
        >
            <div
                className={`article article-${articleStyle}`}
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
            </div>
        </NavLink>
    )
}
