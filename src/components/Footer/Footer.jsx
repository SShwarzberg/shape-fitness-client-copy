import SiteLogo from '../SiteLogo/SiteLogo'
import './footer.scss'
import facebookImage from '../../assets/footer-social-imgs/facebook.png'
import twitterImage from '../../assets/footer-social-imgs/twitter.png'
import pinterestImage from '../../assets/footer-social-imgs/pinterest.png'
import instagramImage from '../../assets/footer-social-imgs/instagram.png'
import flipboardImage from '../../assets/footer-social-imgs/flipboard.png'
import youtubeImage from '../../assets/footer-social-imgs/youtube.png'
import NavLinks from '../NavLinks/NavLinks'

export default function Footer() {
    const footerLinksText = [
        'About us',
        'Privacy Policy',
        'Terms of Use',
        'Advertise',
        'Do Not Sell My Personal Information',
        'Diversity &amp; Inclusion Pledge',
        'Careers',
        'Accolades Licensing',
        'Content Licensing',
        'Affiliate Program',
    ]

    const footerLinks = footerLinksText.map((link) => {
        return <li className="general-footer-link">{link}</li>
    })

    const footerSocialLinkImages = [
        facebookImage,
        twitterImage,
        pinterestImage,
        instagramImage,
        flipboardImage,
        youtubeImage,
    ]

    const footerSocialLinks = footerSocialLinkImages.map((image) => {
        return (
            <div className="footer-social-link">
                <img src={image} alt="" />
            </div>
        )
    })

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section-1">
                    <div className="footer-logo">
                        <SiteLogo />
                    </div>
                    <div className="footer-newsletter">NEWSLETTER</div>
                    <div className="footer-socials">
                        <p className="footer-socials-header">Follow Us</p>
                        <div className="footer-socials-links">
                            {footerSocialLinks}
                        </div>
                    </div>
                </div>
                <div className="footer-section-2">
                    <NavLinks specifyNav="footer" />
                    <ul className="general-footer-links">{footerLinks}</ul>
                </div>
            </div>
        </footer>
    )
}
