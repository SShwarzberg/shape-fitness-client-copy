import './homeHeading.scss'
import featuredImage from '../../../assets/featured.png'
import TrendingArticles from './TrendingArticles/TrendingArticles'

export default function HomeHeading() {
    return (
        <div className="home-heading">
            <div className="featured-article">
                <img
                    className="featured-image"
                    src="https://www.shape.com/thmb/x0OoGCx5C3r9RgcijiLjgEBpJWk=/900x0/filters:no_upscale():max_bytes(150000):strip_icc():gifv():format(webp)/Electrolytes-GettyImages-1001649376-c3e26a1a04e64f718f56dfa5dfb15656.jpg"
                    alt=""
                />
                <div className="home-heading-info">
                    <div className="featured-category">
                        Food &amp; Nutrition
                    </div>
                    <h1 className="featured-title">
                        Everything You Need to Know About Electrolytes —
                        Including the Best Electrolyte Sources
                    </h1>
                    <h2 className="featured-subtitle">
                        You've probably heard you need to refuel with
                        electrolytes post-workout — but why? Here, learn more
                        about the benefits of electrolytes.
                    </h2>
                    <p className="featured-author">By Kirsten Nunez</p>
                </div>
            </div>
            <TrendingArticles />
        </div>
    )
}
