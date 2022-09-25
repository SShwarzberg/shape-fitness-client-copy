import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import ReadArticle from './components/ReadArticle/ReadArticle'
import AboutUs from './pages/AboutUs/AboutUs'
import Page from './pages/Page/Page'

export default function App() {
    const categories = [
        'apparel-and-gear',
        'beauty',
        'fitness',
        'food-and-nutrition',
        'health-and-wellness',
        'lifestyle',
        'news-and-trends',
        'vitamins-and-supplements',
        'dietary-choices',
        'meal-ideas',
    ]

    const repeatedPageRoutes = categories.map((category) => {
        return (
            <Route
                path={`/${category}`}
                element={<Page categoryLink={category} />}
            />
        )
    })

    return (
        <BrowserRouter>
            <Routes>
                {repeatedPageRoutes}
                <Route path="/" element={<Home />} />
                <Route path="/readarticle" element={<ReadArticle />} />
                <Route path="/readarticle/:id" element={<ReadArticle />} />
                <Route path="/about" element={<AboutUs />} />
            </Routes>
        </BrowserRouter>
    )
}
