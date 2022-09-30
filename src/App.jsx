import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import ReadArticle from './components/ReadArticle/ReadArticle'
import AboutUs from './pages/AboutUs/AboutUs'
import Page from './pages/Page/Page'
import { useState } from 'react'
import { createContext } from 'react'

export const pathContext = createContext()

export default function App() {
    const [pathName, setPathName] = useState(window.location.pathname)
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
        'workouts',
        'targeted-exercises',
        'workouts-by-type',
        'exercise-tips',
        'motivation',
        'exercise-recovery',
        'race-training',
        'celebrity-workouts',
        'outdoor-activities',
        'skin-care',
        'body-care',
        'hair',
        'makeup',
        'nails',
        'mental-health',
        'sleep',
        'weight-management',
        'sexual-health',
        'celebrity-news',
        'interviews',
        'workout-trends',
        'astrology',
        'travel-n-retreats',
        'fashion',
        'workout-clothes',
        'workout-gear',
        'shoes',
        'sweat-equity',
        'workout-and-gear',
        'modify-this-move',
        'health-and-nutrition',
        'The-Latest',
        'Sweat-Equity',
        'modify-this-move',
        'workout-and-gear',
    ]

    const repeatedPageRoutes = categories.map((category) => {
        return (
            <Route
                path={`/${category}`}
                element={
                    <pathContext.Provider value={{ pathName, setPathName }}>
                        <Page categoryLink={category} />
                    </pathContext.Provider>
                }
            />
        )
    })

    return (
        <BrowserRouter>
            <Routes>
                {repeatedPageRoutes}
                <Route
                    path="/"
                    element={
                        <pathContext.Provider value={{ pathName, setPathName }}>
                            <Home />
                        </pathContext.Provider>
                    }
                />
                <Route
                    path="/readarticle/:id"
                    element={
                        <pathContext.Provider value={{ pathName, setPathName }}>
                            <ReadArticle key={window.location.pathname} />
                        </pathContext.Provider>
                    }
                />
                <Route path="/about" element={<AboutUs />} />
            </Routes>
        </BrowserRouter>
    )
}
