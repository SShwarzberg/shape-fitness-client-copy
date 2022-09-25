import './search.scss'
import search from '../../../../assets/search.png'
import close from '../../../../assets/close.png'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Search({ sidebar }) {
    const inputRef = useRef()
    const [openSearch, setOpenSearch] = useState(false)
    const [searchInput, setSearchInput] = useState('')
    const [searchResults, setSearchResults] = useState([])

    function handleClick() {
        setOpenSearch((prevResult) => {
            return !prevResult
        })
        setSearchResults([])
    }

    function fetchSearchResults(value) {
        fetch('http://localhost:3000/search', {
            method: 'POST',
            body: JSON.stringify({ data: (value && value) || searchInput }),
            headers: { 'content-type': 'application/json' },
            mode: 'cors',
        })
            .then((res) => res.json())
            .then((data) => setSearchResults(data))
    }

    function submitSearch(e) {
        e.preventDefault()
        fetchSearchResults()
    }

    function handleChange(e) {
        const { value } = e.target
        setSearchInput(value)

        setTimeout(() => {
            fetchSearchResults(value)
        }, 500)
    }

    useEffect(() => {
        inputRef.current?.focus()
    }, [openSearch])

    const searchResultTitles = searchResults.titles?.map((result, i) => {
        if (i < 9)
            return (
                <Link
                    to={`/readarticle/${result.id}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    key={Math.random()}
                >
                    <li>{result.title}</li>
                </Link>
            )
    })
    return (
        <div className="search-input-wrapper">
            {openSearch === false ? (
                <>
                    <div className="line"></div>
                </>
            ) : (
                <>
                    <form
                        className="search-bar-wrapper"
                        onSubmit={submitSearch}
                    >
                        <input
                            ref={inputRef}
                            className="search-website-input"
                            type="text"
                            name="search"
                            value={searchInput}
                            onChange={handleChange}
                            placeholder="What are you looking for?"
                        />
                        <button className="submit-search-wrapper">
                            <img
                                src={search}
                                className="submit-search"
                                alt="submit-search"
                            />
                        </button>
                        <div
                            className={`search-dropdown ${
                                !searchResultTitles && 'dropdown-empty'
                            }`}
                        >
                            {searchResultTitles
                                ? searchResultTitles
                                : 'Type something...'}
                        </div>
                    </form>
                </>
            )}
            <img
                className={openSearch ? 'close-search' : 'open-search'}
                src={!openSearch ? search : close}
                alt=""
                onClick={handleClick}
            />
        </div>
    )
}
