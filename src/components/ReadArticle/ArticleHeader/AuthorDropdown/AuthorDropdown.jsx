import './authorDropdown.scss'
import instagramImg from '../../../../assets/footer-social-imgs/instagram.png'
import { Link } from 'react-router-dom'

export default function AuthorDropdown({ author }) {
    return (
        <div className="author-dropdown">
            <div className="author-dropdown-content">
                <div className="author-dropdown-top">
                    <img
                        src="https://www.shape.com/thmb/iwu1pzEr9SnM5_QwAGjhJnpSWa4=/75x75/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SHAPE-Editor-Headshots-Kristen-Geil-f6b401b18f8645ef98f5614baa3ea44f.jpg"
                        className="author-dropdown-image"
                    />
                    <div className="author-dropdown-top-right">
                        <div className="author-dropdown-name">{author}</div>
                        <div className="author-dropdown-insta-wrapper">
                            <img src={instagramImg} height="13px" alt="" />
                        </div>
                    </div>
                </div>

                <div className="author-dropdown-summary">
                    As the Senior Fitness Editor at Shape, Kristen oversees the
                    Fitness category and covers workout trends, exercise tips,
                    recovery, and more. Previously, Kristen was the Chief
                    Content Officer at aSweatLife.com, where she led content and
                    editorial strategy. She has experience in copywriting and
                    digital marketing, and she's an award-winning freelancer who
                    works with B2C clients in health and wellness.Kristen
                    attended Transylvania University in Lexington, KY where she
                    earned her bachelor's degree with double majors in
                    Psychology and Writing, Rhetoric, and Communications. She
                    attended DePaul University in Chicago for graduate school
                    and earned her master's degree in Writing, Rhetoric, and
                    Discourse. Kristen also holds her NASM personal training
                    certification and is allegedly retired from marathon
                    training.Today, she dabbles in every type of group fitness
                    class but has a soft spot in her heart for boxing and
                    Peloton. Outside of work and working out, you can usually
                    find her curling up with the latest fiction read or taking
                    her Bernedoodle for a long walk.
                </div>
                <hr />
                <Link
                    to={'http://www.youtube.com'}
                    className="shape-guidelines-link"
                >
                    Shape's editorial guidelines
                </Link>
            </div>
        </div>
    )
}
