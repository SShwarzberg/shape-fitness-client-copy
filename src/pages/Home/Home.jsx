import HomeHeading from '../../components/HomeSections/HomeHeading/HomeHeading'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './home.scss'
import HomeCategoryList from '../../components/HomeSections/HomeCategoryList/HomeCategoryList'

export default function Home() {
    return (
        <div className="home">
            <Navbar />
            <div className="home-content">
                <HomeHeading />
                <HomeCategoryList header="Sweat Equity" category="sleep" />
                <HomeCategoryList
                    header="Modify This Move"
                    category="management"
                />
                <HomeCategoryList header="The Latest" category="latest" />
                <HomeCategoryList
                    header="Health And Nutrition"
                    category="health-and-wellness"
                />
                <HomeCategoryList
                    header="Celebrity Workouts"
                    category="motivation"
                />
                <HomeCategoryList header="Skin Care" category="interviews" />
                <HomeCategoryList header="Mental Health" category="trends" />
                <HomeCategoryList
                    header="Workout And Gear"
                    category="apparel-and-gear"
                />
                <HomeCategoryList header="Astrology" category="diets" />
            </div>
            <Footer />
        </div>
    )
}
