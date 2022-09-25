import ArticleHeading1 from '../../ReadArticle/ArticleBody/ArticleHeading1/ArticleHeading1'
import ArticleHeading2 from '../../ReadArticle/ArticleBody/ArticleHeading2/ArticleHeading2'
import Paragraph from '../../ReadArticle/ArticleBody/Paragraph/Paragraph'
import ShapeTeamMemberCards from './ShapeTeamMemberCards/ShapeTeamMemberCards'
import { teamMembers } from '../../../shapeMembersList'

export default function AboutBody() {
    const allMembers = teamMembers.map((member, i) => {
        return <ShapeTeamMemberCards key={i} member={member} />
    })
    return (
        <div className="about-body">
            <ArticleHeading1 heading="Who We Are" />
            <Paragraph paragraph=" At Shape, wellness is for all. Whether you are working toward a specific fitness goal or just hope to feel better and have more energy, our team of writers, editors, personal trainers, and wellness enthusiasts aims to provide science-backed tools and tips to meet you wherever you are in your health journey. Our library of more than 11,000 stories reaches more than 7 million monthly readers, providing expert advice, editor reviews, trend reports, and personal essays all with the goal of inspiring you to take on your next wellness challenge with confidence and enthusiasm.   At Shape, wellness is for all. Whether you are working toward a specific fitness goal or just hope to feel better and have more energy, our team of writers, editors, personal trainers, and wellness enthusiasts aims to provide science-backed tools and tips to meet you wherever you are in your health journey. Our library of more than 11,000 stories reaches more than 7 million monthly readers, providing expert advice, editor reviews, trend reports, and personal essays all with the goal of inspiring you to take on your next wellness challenge with confidence and enthusiasm.  " />
            <Paragraph paragraph=" What you'll find on Shape.com is just as important as what you won't find. Across the site and on our social platforms, you can expect workouts for all fitness levels, showcasing various body types and abilities, beauty and skin-care advice for a range of skin tones and concerns, approachable, nonjudgemental mental health information, inclusive sexual wellness and sexual health insight, tasty meal hacks and ideas that are about enjoying food without overthinking it, and a Healthy at Every Size (HAES) editorial perspective.  " />
            <Paragraph paragraph="This is not a place for impossible workouts made only for professional athletes, stigmatized mental health care info, heteronormative sex content, food guilt, nor dangerous or irresponsible weight-loss advice. And we want to hear from you: If you come across any content that conflicts with these editorial ethics and values then please tell us. Email editorial director, Alyssa Sparacino at alyssa.sparacino@dotdashmdp.com with your concerns. " />
            <ArticleHeading1 heading="The Shape Team" />
            <Paragraph paragraph=" The Shape Squad roster is filled with people who are passionate about the work they do and the stories they tell. Together we are dedicated to making sure that when you come to us with questions you leave with answers. And we always welcome you back because if there's anything to know about health, it's that there's always something more to learn, something new to know. No wellness journey ends just because you crossed one finish line — and we're right beside you, every step of the way. " />
            {allMembers}
            <ArticleHeading1 heading="Editorial Guidelines " />
            <ArticleHeading2 heading="Editorial Policy and Standards " />
            <Paragraph paragraph="Shape is committed to the quality and trustworthiness of our content and editorial processes. Our team of writers, editors, illustrators, photographers, and experts rigorously researches and reviews all content on an ongoing basis to ensure it is up to date, accurate, and puts the needs of our readers first. " />
            <Paragraph paragraph="Each article features a byline that includes the name, a brief description, and a link to more information about those who contributed to that piece. The date indicates when the piece was most recently updated with new information. Some articles also have a tagline at the end to provide additional information on research or authorship. " />
            <Paragraph paragraph="Original illustrations, graphics, images, and videos are created by internal teams, who collaborate with experts in their fields to produce assets that represent diverse voices, perspectives, and context. Periodic review by editors ensures the quality, accuracy, and integrity of these assets. Photos and videos are not edited in any way that may cause them to be false or misleading. " />
            <Paragraph paragraph="We correct any factual errors in a transparent manner and strive to make it easy for our readers to bring errors to our attention. Please let us know if you think we have published inaccurate information. Email us at contact@shape.com. " />
            <Paragraph paragraph="All of our writers, editors, and contributors are responsible for disclosing any potential conflicts of interest. " />
            <Paragraph paragraph="Our editorial content is not influenced by our advertisers. We maintain a strict separation between advertising and editorial content and clearly differentiate editorial content from advertising content. " />
            <Paragraph paragraph="Click here for our complete policies on Corrections, Independence and Impartiality, and Originality. " />
            <Paragraph paragraph="Click here for our policies and processes surrounding product recommendations. " />
            <Paragraph paragraph="Click here for legal information, including our terms of use, privacy policy, and advertising guidelines. " />
            <ArticleHeading1 heading=" Product Reviews and Recommendations " />
            <Paragraph paragraph=" Our mission at Shape is to provide you with thorough and unbiased information to help you get — and stay — active, healthy, and feeling like your best self. Whether we're researching the best protein powders, testing wireless headphones in our state-of-the-art lab, or putting running shoes through their paces out in the real world, our product reviews are rooted in the expertise of our testers, editors, and contributing board of advisors. While we receive affiliate commissions on some of the items purchased through our content, our recommendations are purely editorial and based on thorough research, expert guidance, and hands-on experience. Even when brands and PR agencies send us products for editorial consideration, our thoughts and opinions are always our own. We're here to offer inspiration from a trusted voice so that you can make informed buying decisions and take action. Learn more about our policies and processes surrounding product recommendations here. " />
            <ArticleHeading1 heading=" Diverse Voices " />
            <Paragraph paragraph=" The wellness industry has a longstanding history of catering to a mostly white, thin, cis-gender population. It's a dangerous precedent with ripple effects that can be felt across generations. From health care bias and lack of representation to access and affordability inequities, Black, brown, queer, transgender, and differently-abled folx, as well as those living in larger bodies have often been ignored. While strides are being made, we understand there's more work to be done. Learn more about our commitment by reading our Diversity Pledge in full here. " />
            <ArticleHeading1 heading=" In the Press " />
            <Paragraph paragraph=" Find our editors on… " />
            <Paragraph paragraph="People: Is It Safe to Go to the Gym During the Coronavirus Pandemic? Here's Everything You Need to Know, featuring editorial director Alyssa Sparacino  " />
            <Paragraph paragraph=" Yahoo: Mindfulness, virtual reality and at-home fitness emerge as top wellness trends for 2022, featuring social media director Marietta Alessi " />
            <Paragraph paragraph=" Us Weekly: Halle Berry's 'Resourceful' Towel Workout for Anyone to Try at Home " />
            <Paragraph paragraph=" Fox5 Las Vegas: Transformative resilience: How to train your brain to think more positively, featuring social media director Marietta Alessi " />
            <ArticleHeading1 heading=" About Dotdash Meredith " />
            <Paragraph paragraph=" Shape was founded in 1981 and is part of the Dotdash Meredith publishing family. " />
            <Paragraph paragraph=" Dotdash Meredith, an operating business of IAC,  is the largest digital and print publisher in America. From mobile to magazines, nearly 200 million people trust us to help them make decisions, take action, and find inspiration. Dotdash Meredith's over 50 iconic brands include PEOPLE, Better Homes & Gardens, Verywell, FOOD & WINE, The Spruce, Allrecipes, Byrdie, REAL SIMPLE, Investopedia, Southern Living, and more. " />
            <ArticleHeading1 heading=" Dotdash Meredith Press " />
            <Paragraph paragraph=" Read about Dotdash Meredith and our family of brands in the news. " />
            <ArticleHeading1 heading=" Meet Our Senior Management Team " />
            <Paragraph paragraph=" Learn more about the team behind Dotdash Meredith here. " />
            <ArticleHeading1 heading=" Follow Us " />
            <Paragraph paragraph=" Join our collective community of more than 6.4 million social media followers. " />
            <Paragraph paragraph="Follow us via @shape on Instagram" />
            <Paragraph paragraph="Follow us at @Shape_Magazine on Twitter" />
            <Paragraph paragraph="Find us on Facebook at facebook.com/SHAPEmagazine " />
            <Paragraph paragraph="Follow us on Pinterest at pinterest.com/shapemagazine" />
            <Paragraph paragraph="Join our private SHAPE Goal Crushers Facebook Group" />
            <ArticleHeading1 heading=" Contact Us " />
            <Paragraph paragraph=" Do you have something you'd like to let us know? Whether you have a comment or an idea to share, you can reach us at contact@shape.com.  " />
            <Paragraph paragraph=" For press inquiries, email us at press@dotdash.com " />
            <Paragraph paragraph=" If you would rather call us or send us a letter, you can reach us at 225 Liberty St., New York, NY 10281. " />
            <ArticleHeading1 heading=" Advertise with Us " />
            <Paragraph paragraph=" Shape offers the highest value to advertisers through a combination of scale, credibility, and intent. Interested in advertising with us? Email us at shapeadvertising@meredith.com or check out our media kit to learn more. " />
            <ArticleHeading1 heading=" Write for Us " />
            <Paragraph paragraph=" We're always looking for talented journalists and expert contributors to help bolster our mission to create a more equitable, accessible, and approachable culture of wellness. If you'd like to learn more about Shape's pitching guidelines, rates, and content areas of focus, send us a note along with a few recent examples of your work to write@shape.com. " />
        </div>
    )
}
