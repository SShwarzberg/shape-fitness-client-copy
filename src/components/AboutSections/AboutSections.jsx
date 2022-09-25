import AboutBody from './AboutBody/AboutBody'
import ArticleSections from '../ReadArticle/ArticleSections/ArticleSections'
import AboutHeader from './AboutHeader/AboutHeader'
import './aboutSections.scss'

export default function AboutSections() {
    return (
        <div className="about-sections">
            <div className="about-main-left">
                <ArticleSections
                    articleSections={[
                        'Who We Are',
                        'The Shape Team',
                        'Editorial Guidelines',
                        'Product Reviews and Recommendations',
                        'Diverse Voices',
                        'In the Press',
                        'About Dotdash Meredith',
                        'Follow Us',
                        'Contact Us',
                        'Advertise with Us',
                        'Write with Us',
                        'Write for Us',
                    ]}
                />
            </div>
            <div className="about-main-right">
                <AboutHeader />
                <AboutBody />
            </div>
        </div>
    )
}
