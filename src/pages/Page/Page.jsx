import Footer from '../../components/Footer/Footer'
import Main from '../../components/Main/Main'
import Navbar from '../../components/Navbar/Navbar'

export default function Page({ categoryLink }) {
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
        'The-Latest',
        'sweat-equity',
        'modify-this-move',
        'workout-and-gear',
    ]
    const page = categories.map((category) => {
        if (categoryLink === category)
            return (
                <div className={`page ${category}`}>
                    <Navbar />
                    <Main category={category} />
                    {category !== 'home' && <Footer />}
                </div>
            )
    })
    return page
}
