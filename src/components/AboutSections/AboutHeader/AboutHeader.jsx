import './aboutHeader.scss'

export default function AboutHeader() {
    return (
        <div className="about-header">
            <h1 className="about-page-title">About Us</h1>
            <img
                src="https://www.shape.com/thmb/QSblIwr93bXMcCkE9i5HHQxZF2Q=/650x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SHA0819WHEAL_05-4ca631d702e448ba8359e82f0e581b9c.jpg"
                alt=""
                className="about-us-img"
            />
            <span className="about-us-photo-credits">PHOTO: JAMES MACARI</span>
        </div>
    )
}
