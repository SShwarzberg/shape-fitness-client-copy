import Socials from '../../Socials/Socials'
import './headerCard.scss'

export default function HeaderCard({ category }) {
    const pageHeadings = [
        {
            category: 'Fitness',
            heading:
                'Find everything you need to crush your fitness goals such as workout routines, training plans, free workout videos, fitness tips, exercise trends, workout playlists, gear, clothes and more.',
            relatedCategories: [
                'Workouts',
                'Targeted Exercises',
                'Workouts By Type',
                'Exercise Tips',
                'Motivation',
                'Exercise Recovery',
                'Race Training',
                'Celebrity Workouts',
                'Outdoor Activities',
            ],
        },
        {
            category: 'Beauty',
            heading:
                "Want the scoop on all the latest skin-care science and hair, makeup, and beauty trends? Here's all the expert advice, top products, and celebrity beauty tips you need to get glowing. ",
            relatedCategories: [
                'Skin Care',
                'Body Care',
                'Hair',
                'Makeup',
                'Nails',
            ],
        },
        {
            category: 'Health and Wellness',
            heading:
                " From women's health tips to advice on mental health issues such as anxiety and depression, we have the best ways to take care of your body and mind. ",
            relatedCategories: [
                'Mental Health',
                'Sleep',
                'Weight Management',
                'Sexual Health',
            ],
        },
        {
            category: 'News and Trends',
            heading:
                'The latest from your favorite celebrities. Keep up with the local trends by following along with all the trends that make us smile.',
            relatedCategories: [
                'Celebrity News',
                'Interviews',
                'Workout Trends',
            ],
        },
        {
            category: 'Food & Nutrition',
            heading:
                ' What is a low carb diet? What are the benefits of a keto diet? Find answers to these and other questions about nutrition, healthy diets, supplements, and ingredients, plus the truth about the latest food trends. ',
            relatedCategories: [
                'Dietary Choice',
                'Meal Ideas',
                'Vitamins and Supplements',
            ],
        },
        {
            category: 'Lifestyle',
            heading:
                ' Tips and info on beauty, fashion, travel, health, sex, love and everything else you need to live a fuller and happier life. ',
            relatedCategories: ['Astrology', "Travel 'n retreats"],
        },
        {
            category: 'Apparel and Gear',
            heading:
                'Get your favorite apparel and gear on our online shop. Begin with our amazing online shpping experience that makes shopping a breeze, while you take it easy!',
            relatedCategories: [
                'Fashion',
                'Workout Clothes',
                'Workout Gear',
                'Shoes',
            ],
        },
    ]

    const heading = pageHeadings.map((item) => {
        if (
            item.category[0].toLowerCase() +
                item.category.slice(1).toLowerCase().replace('&', 'and') ===
            category.toLowerCase().replaceAll('-', ' ')
        ) {
            return item.heading
        }
    })

    const titleUpperCased =
        category[0].toUpperCase() + category.slice(1).replaceAll('-', ' ')

    const relatedCategories = pageHeadings.map((item) => {
        if (
            item.category[0].toLowerCase() +
                item.category.slice(1).toLowerCase().replace('&', 'and') ===
            category.toLowerCase().replaceAll('-', ' ')
        )
            return item.relatedCategories.map((category, i) => {
                if (i < 5)
                    return (
                        <a href="">
                            <li>{category}</li>
                        </a>
                    )
            })
    })

    return (
        <div className="header-card">
            <h1 className="title">{titleUpperCased}</h1>
            <h2 className="subtitle">{heading}</h2>
            <ul className="related-categories">{relatedCategories}</ul>
            <Socials />
        </div>
    )
}
