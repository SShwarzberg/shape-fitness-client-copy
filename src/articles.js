import { nanoid } from 'nanoid'

getComputedStyle.id = nanoid()

export const articles = [
    {
        id: nanoid(),
        category: 'Beauty',
        title: 'Why Lip Filler Migration Occurs — and Whether You Can Prevent It',
        author: 'Renee Cherry',
        img: 'https://www.shape.com/thmb/frWzccq1X601bd5ZyP0aP5DM7oA=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Lip-Filler-Migration-GettyImages-164210757-GettyImages-1025204374-83afb765362c49a4a043ecb18a2687e2.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Motivation',
        title: "Meet Wesley Hamilton, the Founder of Disabled But Not Really Who's Empowering Athletes of All Abilities",
        author: 'Megan Falk',
        img: 'https://www.shape.com/thmb/wDc_nBtt3IrNigWYxJZwKcjrqxY=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():focal(959x572:961x574):format(webp)/Sweat-Equity-2x3-Lead_1-01d6cae8f4d943adbfe507102a9e0196.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Motivation',
        title: "Low-Income Communities Are Being Cut Off from the Health Benefits of Green Spaces",
        author: 'Tonya Russell',
        img: 'https://www.shape.com/thmb/MQ619zNzqxjz9bMaOz6aHdq6SEk=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/Wellbeing-And-Green-Space-GettyImages-1332207432-63b265086d474b038ac85da74aedd922.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Motivation',
        title: "Nathalie Huerta Created a Safe, Affirming Fitness Space for the LGBTQ+ Community",
        author: 'Chrissy King',
        img: 'https://www.shape.com/thmb/Kx1VdKOfxUAwxL_DRfsxwU0t4vU=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/Sweat-Equity-2x3-Lead-99a2c6e6299c470aab03767c42f1f817.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Strength Training',
        title: "Your Comprehensive Guide to Reps and Sets",
        author: 'Megan Falk',
        img: 'https://www.shape.com/thmb/nD-jxlKr4AtFFUSXuAeVkLuVma8=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/Reps-And-SetsGettyImages-874837090-a39d26aaa46a4cd18e529e624b43cc2e.jpg'
    }

    ,
    {
        id: nanoid(),
        category: 'Strength Training',
        title: "How To Spot a Squat Safely and Effectively",
        author: 'Megan Falk',
        img: 'https://www.shape.com/thmb/ShHYhXKJBWohiYhrrKLKny__Le8=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/How-To-Spot-A-Sqaut-GettyImages-1032070754-18463adbb1bd4a0296004b9edbae1fb7.jpg'
    }

    ,
    {
        id: nanoid(),
        category: 'Strength Training',
        title: "What Are Compound Exercises? Plus, Why They Should Be a Staple In Your Workouts",
        author: 'Laurel Del Turco',
        img: 'https://www.shape.com/thmb/w-TgrRDF6jmKcPXSFa7IAzhMgnM=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x585:1001x587):format(webp)/Compound-Exercises-GettyImages-1317424769-1b80eb11036d40dc9d49884b06516c35.jpg'
    }

    ,
    {
        id: nanoid(),
        category: 'Strength Training',
        title: "How To Spot a Squat Safely and Effectively",
        author: 'Megan Falk',
        img: 'https://www.shape.com/thmb/ShHYhXKJBWohiYhrrKLKny__Le8=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/How-To-Spot-A-Sqaut-GettyImages-1032070754-18463adbb1bd4a0296004b9edbae1fb7.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Strength Training',
        title: "What Are Compound Exercises? Plus, Why They Should Be a Staple In Your Workouts",
        author: 'Laurel Del Turco',
        img: 'https://www.shape.com/thmb/w-TgrRDF6jmKcPXSFa7IAzhMgnM=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x585:1001x587):format(webp)/Compound-Exercises-GettyImages-1317424769-1b80eb11036d40dc9d49884b06516c35.jpg'
    }

    ,
    {
        id: nanoid(),
        category: 'Strength Training',
        title: "How To Spot a Squat Safely and Effectively",
        author: 'Megan Falk',
        img: 'https://www.shape.com/thmb/ShHYhXKJBWohiYhrrKLKny__Le8=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/How-To-Spot-A-Sqaut-GettyImages-1032070754-18463adbb1bd4a0296004b9edbae1fb7.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Butt Workouts',
        title: "Your Risk of Getting Monkeypox at the Gym Is 'Very Low,' According to Experts",
        author: 'Megan Falk',
        img: 'https://www.shape.com/thmb/FniSH--3Zz5ZcvpZyhjzpeb2-mU=/771x514/filters:no_upscale():max_bytes(150000):strip_icc():focal(399x0:401x2):format(webp)/SHP_MTM_Glute-Bridge_3x2-bfe761cd0ffb45e28875198ebed77038.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Health And Wellness',
        title: "These Glute Bridge Variations Work for Every Fitness Level and Exercise Goal",
        author: 'iris Goldsztajn',
        img: 'https://www.shape.com/thmb/Sz_XpTuUufM64xA5JshtXLVpGaY=/771x514/filters:no_upscale():max_bytes(150000):strip_icc():focal(399x0:401x2):format(webp)/Monkeypox-At-Gym-GettyImages-1292575208-dbae72387eb14d74b5675862433f66e8.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Health And Wellness',
        title: "New Research Shows Some Tattoo Inks May Contain Potentially Dangerous Ingredients",
        author: 'Christie Calucchia',
        img: 'https://www.shape.com/thmb/PkAJ-uUCgwZulZGnYblIigF1Kzw=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/Tattoo-Chemicals-Study-GettyImages-1032882008-GettyImages-1337281529-c63c387853e34342a65469c0f44a1c82.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Health And Wellness',
        title: "Jonathan Van Ness Says He Lost 35 Pounds After Working with a Nutritionist",
        author: 'Christie Calucchia',
        img: 'https://www.shape.com/thmb/f7oLb9Neu5-P2cJfg77bnWxdB3c=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():focal(1019x572:1021x574):format(webp)/Jonathan-Van-Ness-Healthy-Weight-Loss-GettyImages-1194397935-bf166846530347aba61ab4d97f1e2003.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Health And Wellness',
        title: "The Home Edit's Clea Shearer Opened Up About the Importance of Self-Examination for Breast Cancer",
        author: 'Christie Calucchia',
        img: 'https://www.shape.com/thmb/ZU-DAWVKzc8rvI0JBEbHQyCJf-w=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(939x545:941x547):format(webp)/Clea-Shearer-Breast-Cancer-GettyImages-1012311250-e4291f72f23543cda8dbd969a2edd3c0.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Celebrity Workouts',
        title: "The Home Edit's Clea Shearer Opened Up About the Importance of Self-Examination for Breast Cancer",
        author: 'Christie Calucchia',
        img: 'https://www.shape.com/thmb/ZU-DAWVKzc8rvI0JBEbHQyCJf-w=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(939x545:941x547):format(webp)/Clea-Shearer-Breast-Cancer-GettyImages-1012311250-e4291f72f23543cda8dbd969a2edd3c0.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Celebrity Workouts',
        title: "The Home Edit's Clea Shearer Opened Up About the Importance of Self-Examination for Breast Cancer",
        author: 'Christie Calucchia',
        img: 'https://www.shape.com/thmb/ZU-DAWVKzc8rvI0JBEbHQyCJf-w=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(939x545:941x547):format(webp)/Clea-Shearer-Breast-Cancer-GettyImages-1012311250-e4291f72f23543cda8dbd969a2edd3c0.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Celebrity Workouts',
        title: "The Home Edit's Clea Shearer Opened Up About the Importance of Self-Examination for Breast Cancer",
        author: 'Christie Calucchia',
        img: 'https://www.shape.com/thmb/ZU-DAWVKzc8rvI0JBEbHQyCJf-w=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(939x545:941x547):format(webp)/Clea-Shearer-Breast-Cancer-GettyImages-1012311250-e4291f72f23543cda8dbd969a2edd3c0.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Celebrity Workouts',
        title: "The Home Edit's Clea Shearer Opened Up About the Importance of Self-Examination for Breast Cancer",
        author: 'Christie Calucchia',
        img: 'https://www.shape.com/thmb/ZU-DAWVKzc8rvI0JBEbHQyCJf-w=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(939x545:941x547):format(webp)/Clea-Shearer-Breast-Cancer-GettyImages-1012311250-e4291f72f23543cda8dbd969a2edd3c0.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Celebrity Workouts',
        title: "The Home Edit's Clea Shearer Opened Up About the Importance of Self-Examination for Breast Cancer",
        author: 'Christie Calucchia',
        img: 'https://www.shape.com/thmb/ZU-DAWVKzc8rvI0JBEbHQyCJf-w=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(939x545:941x547):format(webp)/Clea-Shearer-Breast-Cancer-GettyImages-1012311250-e4291f72f23543cda8dbd969a2edd3c0.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Celebrity Workouts',
        title: "The Home Edit's Clea Shearer Opened Up About the Importance of Self-Examination for Breast Cancer",
        author: 'Christie Calucchia',
        img: 'https://www.shape.com/thmb/ZU-DAWVKzc8rvI0JBEbHQyCJf-w=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(939x545:941x547):format(webp)/Clea-Shearer-Breast-Cancer-GettyImages-1012311250-e4291f72f23543cda8dbd969a2edd3c0.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Celebrity Workouts',
        title: "The Home Edit's Clea Shearer Opened Up About the Importance of Self-Examination for Breast Cancer",
        author: 'Christie Calucchia',
        img: 'https://www.shape.com/thmb/ZU-DAWVKzc8rvI0JBEbHQyCJf-w=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(939x545:941x547):format(webp)/Clea-Shearer-Breast-Cancer-GettyImages-1012311250-e4291f72f23543cda8dbd969a2edd3c0.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Health And Wellness',
        title: "The Home Edit's Clea Shearer Opened Up About the Importance of Self-Examination for Breast Cancer",
        author: 'Christie Calucchia',
        img: 'https://www.shape.com/thmb/ZU-DAWVKzc8rvI0JBEbHQyCJf-w=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(939x545:941x547):format(webp)/Clea-Shearer-Breast-Cancer-GettyImages-1012311250-e4291f72f23543cda8dbd969a2edd3c0.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Mental Health',
        title: "These Glute Bridge Variations Work for Every Fitness Level and Exercise Goal",
        author: 'iris Goldsztajn',
        img: 'https://www.shape.com/thmb/Sz_XpTuUufM64xA5JshtXLVpGaY=/771x514/filters:no_upscale():max_bytes(150000):strip_icc():focal(399x0:401x2):format(webp)/Monkeypox-At-Gym-GettyImages-1292575208-dbae72387eb14d74b5675862433f66e8.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Astrology',
        title: "These Glute Bridge Variations Work for Every Fitness Level and Exercise Goal",
        author: 'Maressa Brown',
        img: 'https://www.shape.com/thmb/zjVhgNnBh1Svx4lIJ8Zhz3t7pgc=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/Virgo-Wellness-Guide-d8c8c6efc402439ab8fff07e042354ed.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Astrology',
        title: "These Glute Bridge Variations Work for Every Fitness Level and Exercise Goal",
        author: 'Maressa Brown',
        img: 'https://www.shape.com/thmb/zjVhgNnBh1Svx4lIJ8Zhz3t7pgc=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/Virgo-Wellness-Guide-d8c8c6efc402439ab8fff07e042354ed.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Astrology',
        title: "These Glute Bridge Variations Work for Every Fitness Level and Exercise Goal",
        author: 'Maressa Brown',
        img: 'https://www.shape.com/thmb/zjVhgNnBh1Svx4lIJ8Zhz3t7pgc=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/Virgo-Wellness-Guide-d8c8c6efc402439ab8fff07e042354ed.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Skin Care',
        title: "These Glute Bridge Variations Work for Every Fitness Level and Exercise Goal",
        author: 'Maressa Brown',
        img: 'https://www.shape.com/thmb/6JicTCcR8RpLZ9g2D43xEaxdBPI=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/Shape_TikTokTrueFalse-2000-38cdb1ae5d774ca792ad5419869cd93f.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Skin Care',
        title: "These Glute Bridge Variations Work for Every Fitness Level and Exercise Goal",
        author: 'Maressa Brown',
        img: 'https://www.shape.com/thmb/6fcQ-7etZwdV-kFQCnOemEq5EWw=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/Charli-DAmelio-Glow-Recipe-Watermelon-Glow-Niacinamide-Dew-Drops-2000-07e99eb07d774d8c9099b308ed0f5bdf.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Apparel and Gear',
        title: "These Glute Bridge Variations Work for Every Fitness Level and Exercise Goal",
        author: 'Maressa Brown',
        img: 'https://www.shape.com/thmb/6fcQ-7etZwdV-kFQCnOemEq5EWw=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/Charli-DAmelio-Glow-Recipe-Watermelon-Glow-Niacinamide-Dew-Drops-2000-07e99eb07d774d8c9099b308ed0f5bdf.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Skin Care',
        title: "These Glute Bridge Variations Work for Every Fitness Level and Exercise Goal",
        author: 'Maressa Brown',
        img: 'https://www.shape.com/thmb/SC435AAdLdDEzJJMzO3IFidB9Y8=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():focal(979x545:981x547):format(webp)/How-To-Use-Gua-Sha-GettyImages-1409941297-583df2d51d4a49e1bdaa87bfcdad71ac.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Astrology',
        title: "These Glute Bridge Variations Work for Every Fitness Level and Exercise Goal",
        author: 'Maressa Brown',
        img: 'https://www.shape.com/thmb/zjVhgNnBh1Svx4lIJ8Zhz3t7pgc=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/Virgo-Wellness-Guide-d8c8c6efc402439ab8fff07e042354ed.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Astrology',
        title: "These Glute Bridge Variations Work for Every Fitness Level and Exercise Goal",
        author: 'Maressa Brown',
        img: 'https://www.shape.com/thmb/zjVhgNnBh1Svx4lIJ8Zhz3t7pgc=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/Virgo-Wellness-Guide-d8c8c6efc402439ab8fff07e042354ed.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Astrology',
        title: "These Glute Bridge Variations Work for Every Fitness Level and Exercise Goal",
        author: 'Maressa Brown',
        img: 'https://www.shape.com/thmb/zjVhgNnBh1Svx4lIJ8Zhz3t7pgc=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/Virgo-Wellness-Guide-d8c8c6efc402439ab8fff07e042354ed.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Apparel and Gear',
        title: "These Glute Bridge Variations Work for Every Fitness Level and Exercise Goal",
        author: 'Maressa Brown',
        img: 'https://www.shape.com/thmb/3dU74XFbzJPeSkYgKKaafUXR28g=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():focal(959x558:961x560):format(webp)/Barbiecore-Activewear-0e97549a658e4e0883f63b3017d0f372.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Apparel and Gear',
        title: "These Glute Bridge Variations Work for Every Fitness Level and Exercise Goal",
        author: 'Maressa Brown',
        img: 'https://www.shape.com/thmb/Rm0bOr9t5NiOCHmVO1UA7XTHT90=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/YBELL-Neo-Weights-2000-85db4a4cca1d44b2978da4d4eaa2f92f.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Mental Health',
        title: "These Glute Bridge Variations Work for Every Fitness Level and Exercise Goal",
        author: 'iris Goldsztajn',
        img: 'https://www.shape.com/thmb/Sz_XpTuUufM64xA5JshtXLVpGaY=/771x514/filters:no_upscale():max_bytes(150000):strip_icc():focal(399x0:401x2):format(webp)/Monkeypox-At-Gym-GettyImages-1292575208-dbae72387eb14d74b5675862433f66e8.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Mental Health',
        title: "These Glute Bridge Variations Work for Every Fitness Level and Exercise Goal",
        author: 'iris Goldsztajn',
        img: 'https://www.shape.com/thmb/Sz_XpTuUufM64xA5JshtXLVpGaY=/771x514/filters:no_upscale():max_bytes(150000):strip_icc():focal(399x0:401x2):format(webp)/Monkeypox-At-Gym-GettyImages-1292575208-dbae72387eb14d74b5675862433f66e8.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Mental Health',
        title: "These Glute Bridge Variations Work for Every Fitness Level and Exercise Goal",
        author: 'iris Goldsztajn',
        img: 'https://www.shape.com/thmb/Sz_XpTuUufM64xA5JshtXLVpGaY=/771x514/filters:no_upscale():max_bytes(150000):strip_icc():focal(399x0:401x2):format(webp)/Monkeypox-At-Gym-GettyImages-1292575208-dbae72387eb14d74b5675862433f66e8.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Mental Health',
        title: "These Glute Bridge Variations Work for Every Fitness Level and Exercise Goal",
        author: 'iris Goldsztajn',
        img: 'https://www.shape.com/thmb/Sz_XpTuUufM64xA5JshtXLVpGaY=/771x514/filters:no_upscale():max_bytes(150000):strip_icc():focal(399x0:401x2):format(webp)/Monkeypox-At-Gym-GettyImages-1292575208-dbae72387eb14d74b5675862433f66e8.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Mental Health',
        title: "These Glute Bridge Variations Work for Every Fitness Level and Exercise Goal",
        author: 'iris Goldsztajn',
        img: 'https://www.shape.com/thmb/Sz_XpTuUufM64xA5JshtXLVpGaY=/771x514/filters:no_upscale():max_bytes(150000):strip_icc():focal(399x0:401x2):format(webp)/Monkeypox-At-Gym-GettyImages-1292575208-dbae72387eb14d74b5675862433f66e8.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Mental Health',
        title: "These Glute Bridge Variations Work for Every Fitness Level and Exercise Goal",
        author: 'iris Goldsztajn',
        img: 'https://www.shape.com/thmb/Sz_XpTuUufM64xA5JshtXLVpGaY=/771x514/filters:no_upscale():max_bytes(150000):strip_icc():focal(399x0:401x2):format(webp)/Monkeypox-At-Gym-GettyImages-1292575208-dbae72387eb14d74b5675862433f66e8.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Health And Wellness',
        title: "These Glute Bridge Variations Work for Every Fitness Level and Exercise Goal",
        author: 'iris Goldsztajn',
        img: 'https://www.shape.com/thmb/Sz_XpTuUufM64xA5JshtXLVpGaY=/771x514/filters:no_upscale():max_bytes(150000):strip_icc():focal(399x0:401x2):format(webp)/Monkeypox-At-Gym-GettyImages-1292575208-dbae72387eb14d74b5675862433f66e8.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Health And Wellness',
        title: "These Glute Bridge Variations Work for Every Fitness Level and Exercise Goal",
        author: 'iris Goldsztajn',
        img: 'https://www.shape.com/thmb/Sz_XpTuUufM64xA5JshtXLVpGaY=/771x514/filters:no_upscale():max_bytes(150000):strip_icc():focal(399x0:401x2):format(webp)/Monkeypox-At-Gym-GettyImages-1292575208-dbae72387eb14d74b5675862433f66e8.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Strength Training',
        title: "What Are Compound Exercises? Plus, Why They Should Be a Staple In Your Workouts",
        author: 'Laurel Del Turco',
        img: 'https://www.shape.com/thmb/w-TgrRDF6jmKcPXSFa7IAzhMgnM=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x585:1001x587):format(webp)/Compound-Exercises-GettyImages-1317424769-1b80eb11036d40dc9d49884b06516c35.jpg'
    }

    ,
    {
        id: nanoid(),
        category: 'Strength Training',
        title: "How To Spot a Squat Safely and Effectively",
        author: 'Megan Falk',
        img: 'https://www.shape.com/thmb/ShHYhXKJBWohiYhrrKLKny__Le8=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/How-To-Spot-A-Sqaut-GettyImages-1032070754-18463adbb1bd4a0296004b9edbae1fb7.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Strength Training',
        title: "What Are Compound Exercises? Plus, Why They Should Be a Staple In Your Workouts",
        author: 'Laurel Del Turco',
        img: 'https://www.shape.com/thmb/w-TgrRDF6jmKcPXSFa7IAzhMgnM=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x585:1001x587):format(webp)/Compound-Exercises-GettyImages-1317424769-1b80eb11036d40dc9d49884b06516c35.jpg'
    }

    ,
    {
        id: nanoid(),
        category: 'Strength Training',
        title: "How To Spot a Squat Safely and Effectively",
        author: 'Megan Falk',
        img: 'https://www.shape.com/thmb/ShHYhXKJBWohiYhrrKLKny__Le8=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/How-To-Spot-A-Sqaut-GettyImages-1032070754-18463adbb1bd4a0296004b9edbae1fb7.jpg'
    }

    ,
    {
        id: nanoid(),
        category: 'Strength Training',
        title: "How to Calculate and Use Your One-Rep Max In a Strength-Training Program",
        author: 'Megan Falk',
        img: 'https://www.shape.com/thmb/WpgppZDkYrlCuVRHkLXCWFjz7x4=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():focal(979x598:981x600):format(webp)/One-Rep-Max-GettyImages-1317251071-c6af3701d0034d15951df86841205f37.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Motivation',
        title: "Meet Wesley Hamilton, the Founder of Disabled But Not Really Who's Empowering Athletes of All Abilities",
        author: 'Megan Falk',
        img: 'https://www.shape.com/thmb/wDc_nBtt3IrNigWYxJZwKcjrqxY=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():focal(959x572:961x574):format(webp)/Sweat-Equity-2x3-Lead_1-01d6cae8f4d943adbfe507102a9e0196.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Motivation',
        title: "Meet Wesley Hamilton, the Founder of Disabled But Not Really Who's Empowering Athletes of All Abilities",
        author: 'Megan Falk',
        img: 'https://www.shape.com/thmb/wDc_nBtt3IrNigWYxJZwKcjrqxY=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():focal(959x572:961x574):format(webp)/Sweat-Equity-2x3-Lead_1-01d6cae8f4d943adbfe507102a9e0196.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Beauty',
        title: 'How Long You Need to Use New Hair- and Skin-Care Products to *Actually* See Results',
        author: 'Melanie Rud',
        img: 'https://www.shape.com/thmb/TMZhV-5_fKUTAnKMDRGzlp-7Qcs=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/skin-care-feature-a6b8a0dfef1f42c8ad6003d082062330.jpg'
    },
    {
        id: nanoid(),
        category: 'Beauty',
        title: "Selma Blair Said Ability-Inclusive Makeup Tools Helped Her Feel 'Alive' Again After MS Diagnosis",
        author: 'Zara Hanawalt',
        img: 'https://www.shape.com/thmb/t-aRFTBc73yiQlKISamCkIBBHuE=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Selma-Blair-Beauty-Tools-GettyImages-1357907609-a7cd788a5807455cb4740058508384f8.jpg'
    },
    {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },
    {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },
    {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },
    {
        id: nanoid(),
        category: 'News And Trends',
        title: 'Weekend Warriors May Reap the Same Health Benefits As People Who Work Out Every Day',
        author: 'Arielle Tschinkel',
        img: 'https://www.shape.com/thmb/QqbuZAwNsPzEJxKg2mTdlLSZ9Pg=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Weekend-Workout-Study-GettyImages-1031476854-eb2842330f854745a2a39fa028ad2b42.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Fitness',
        title: "You Need to See Pink and Her Kids Crushing It at the Skate Park",
        author: 'Genesis Rivas',
        img: 'https://www.shape.com/thmb/R6gF1iscNF9wqZV3OEe_tlKiDPw=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Pink-Skateboarding-GettyImages-1126252945-e6d76e580d1d49c2a516784b67074a55.jpg'
    }, {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },

    {
        id: nanoid(),
        category: 'Fitness',
        title: "You Need to See Pink and Her Kids Crushing It at the Skate Park",
        author: 'Genesis Rivas',
        img: 'https://www.shape.com/thmb/R6gF1iscNF9wqZV3OEe_tlKiDPw=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Pink-Skateboarding-GettyImages-1126252945-e6d76e580d1d49c2a516784b67074a55.jpg'
    }, {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },

    {
        id: nanoid(),
        category: 'Fitness',
        title: "You Need to See Pink and Her Kids Crushing It at the Skate Park",
        author: 'Genesis Rivas',
        img: 'https://www.shape.com/thmb/R6gF1iscNF9wqZV3OEe_tlKiDPw=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Pink-Skateboarding-GettyImages-1126252945-e6d76e580d1d49c2a516784b67074a55.jpg'
    }, {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },

    {
        id: nanoid(),
        category: 'Fitness',
        title: "You Need to See Pink and Her Kids Crushing It at the Skate Park",
        author: 'Genesis Rivas',
        img: 'https://www.shape.com/thmb/R6gF1iscNF9wqZV3OEe_tlKiDPw=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Pink-Skateboarding-GettyImages-1126252945-e6d76e580d1d49c2a516784b67074a55.jpg'
    }, {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },

    {
        id: nanoid(),
        category: 'Fitness',
        title: "You Need to See Pink and Her Kids Crushing It at the Skate Park",
        author: 'Genesis Rivas',
        img: 'https://www.shape.com/thmb/R6gF1iscNF9wqZV3OEe_tlKiDPw=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Pink-Skateboarding-GettyImages-1126252945-e6d76e580d1d49c2a516784b67074a55.jpg'
    }, {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },

    {
        id: nanoid(),
        category: 'Fitness',
        title: "You Need to See Pink and Her Kids Crushing It at the Skate Park",
        author: 'Genesis Rivas',
        img: 'https://www.shape.com/thmb/R6gF1iscNF9wqZV3OEe_tlKiDPw=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Pink-Skateboarding-GettyImages-1126252945-e6d76e580d1d49c2a516784b67074a55.jpg'
    }, {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },

    {
        id: nanoid(),
        category: 'Fitness',
        title: "You Need to See Pink and Her Kids Crushing It at the Skate Park",
        author: 'Genesis Rivas',
        img: 'https://www.shape.com/thmb/R6gF1iscNF9wqZV3OEe_tlKiDPw=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Pink-Skateboarding-GettyImages-1126252945-e6d76e580d1d49c2a516784b67074a55.jpg'
    }, {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },

    {
        id: nanoid(),
        category: 'Fitness',
        title: "You Need to See Pink and Her Kids Crushing It at the Skate Park",
        author: 'Genesis Rivas',
        img: 'https://www.shape.com/thmb/R6gF1iscNF9wqZV3OEe_tlKiDPw=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Pink-Skateboarding-GettyImages-1126252945-e6d76e580d1d49c2a516784b67074a55.jpg'
    }, {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },

    {
        id: nanoid(),
        category: 'Fitness',
        title: "You Need to See Pink and Her Kids Crushing It at the Skate Park",
        author: 'Genesis Rivas',
        img: 'https://www.shape.com/thmb/R6gF1iscNF9wqZV3OEe_tlKiDPw=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Pink-Skateboarding-GettyImages-1126252945-e6d76e580d1d49c2a516784b67074a55.jpg'
    }, {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },

    {
        id: nanoid(),
        category: 'Fitness',
        title: "You Need to See Pink and Her Kids Crushing It at the Skate Park",
        author: 'Genesis Rivas',
        img: 'https://www.shape.com/thmb/R6gF1iscNF9wqZV3OEe_tlKiDPw=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Pink-Skateboarding-GettyImages-1126252945-e6d76e580d1d49c2a516784b67074a55.jpg'
    }, {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },

    {
        id: nanoid(),
        category: 'Fitness',
        title: "You Need to See Pink and Her Kids Crushing It at the Skate Park",
        author: 'Genesis Rivas',
        img: 'https://www.shape.com/thmb/R6gF1iscNF9wqZV3OEe_tlKiDPw=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Pink-Skateboarding-GettyImages-1126252945-e6d76e580d1d49c2a516784b67074a55.jpg'
    }, {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },

    {
        id: nanoid(),
        category: 'Fitness',
        title: "You Need to See Pink and Her Kids Crushing It at the Skate Park",
        author: 'Genesis Rivas',
        img: 'https://www.shape.com/thmb/R6gF1iscNF9wqZV3OEe_tlKiDPw=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Pink-Skateboarding-GettyImages-1126252945-e6d76e580d1d49c2a516784b67074a55.jpg'
    }, {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },

    {
        id: nanoid(),
        category: 'Fitness',
        title: "You Need to See Pink and Her Kids Crushing It at the Skate Park",
        author: 'Genesis Rivas',
        img: 'https://www.shape.com/thmb/R6gF1iscNF9wqZV3OEe_tlKiDPw=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Pink-Skateboarding-GettyImages-1126252945-e6d76e580d1d49c2a516784b67074a55.jpg'
    }, {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },

    {
        id: nanoid(),
        category: 'Fitness',
        title: "You Need to See Pink and Her Kids Crushing It at the Skate Park",
        author: 'Genesis Rivas',
        img: 'https://www.shape.com/thmb/R6gF1iscNF9wqZV3OEe_tlKiDPw=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Pink-Skateboarding-GettyImages-1126252945-e6d76e580d1d49c2a516784b67074a55.jpg'
    }, {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },

    {
        id: nanoid(),
        category: 'Fitness',
        title: "You Need to See Pink and Her Kids Crushing It at the Skate Park",
        author: 'Genesis Rivas',
        img: 'https://www.shape.com/thmb/R6gF1iscNF9wqZV3OEe_tlKiDPw=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Pink-Skateboarding-GettyImages-1126252945-e6d76e580d1d49c2a516784b67074a55.jpg'
    }, {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },

    {
        id: nanoid(),
        category: 'Fitness',
        title: "You Need to See Pink and Her Kids Crushing It at the Skate Park",
        author: 'Genesis Rivas',
        img: 'https://www.shape.com/thmb/R6gF1iscNF9wqZV3OEe_tlKiDPw=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Pink-Skateboarding-GettyImages-1126252945-e6d76e580d1d49c2a516784b67074a55.jpg'
    }, {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },

    {
        id: nanoid(),
        category: 'Fitness',
        title: "You Need to See Pink and Her Kids Crushing It at the Skate Park",
        author: 'Genesis Rivas',
        img: 'https://www.shape.com/thmb/R6gF1iscNF9wqZV3OEe_tlKiDPw=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Pink-Skateboarding-GettyImages-1126252945-e6d76e580d1d49c2a516784b67074a55.jpg'
    }, {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },

    {
        id: nanoid(),
        category: 'Fitness',
        title: "You Need to See Pink and Her Kids Crushing It at the Skate Park",
        author: 'Genesis Rivas',
        img: 'https://www.shape.com/thmb/R6gF1iscNF9wqZV3OEe_tlKiDPw=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Pink-Skateboarding-GettyImages-1126252945-e6d76e580d1d49c2a516784b67074a55.jpg'
    }, {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },

    {
        id: nanoid(),
        category: 'Fitness',
        title: "You Need to See Pink and Her Kids Crushing It at the Skate Park",
        author: 'Genesis Rivas',
        img: 'https://www.shape.com/thmb/R6gF1iscNF9wqZV3OEe_tlKiDPw=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Pink-Skateboarding-GettyImages-1126252945-e6d76e580d1d49c2a516784b67074a55.jpg'
    }, {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },

    {
        id: nanoid(),
        category: 'Fitness',
        title: "You Need to See Pink and Her Kids Crushing It at the Skate Park",
        author: 'Genesis Rivas',
        img: 'https://www.shape.com/thmb/R6gF1iscNF9wqZV3OEe_tlKiDPw=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Pink-Skateboarding-GettyImages-1126252945-e6d76e580d1d49c2a516784b67074a55.jpg'
    }, {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },

    {
        id: nanoid(),
        category: 'Fitness',
        title: "You Need to See Pink and Her Kids Crushing It at the Skate Park",
        author: 'Genesis Rivas',
        img: 'https://www.shape.com/thmb/R6gF1iscNF9wqZV3OEe_tlKiDPw=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Pink-Skateboarding-GettyImages-1126252945-e6d76e580d1d49c2a516784b67074a55.jpg'
    }, {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Fitness',
        title: "You Need to See Pink and Her Kids Crushing It at the Skate Park",
        author: 'Genesis Rivas',
        img: 'https://www.shape.com/thmb/R6gF1iscNF9wqZV3OEe_tlKiDPw=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Pink-Skateboarding-GettyImages-1126252945-e6d76e580d1d49c2a516784b67074a55.jpg'
    }, {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Fitness',
        title: "You Need to See Pink and Her Kids Crushing It at the Skate Park",
        author: 'Genesis Rivas',
        img: 'https://www.shape.com/thmb/R6gF1iscNF9wqZV3OEe_tlKiDPw=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Pink-Skateboarding-GettyImages-1126252945-e6d76e580d1d49c2a516784b67074a55.jpg'
    }, {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },
    {
        id: nanoid(),
        category: 'Beauty',
        title: "Dry Shampoos Guaranteed to Extend the Life of Your Blowout",
        author: 'Lindsay Hostert',
        img: 'https://www.shape.com/thmb/vIrBL8hsRtNQVjXa3El7LU_e5lw=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/shutterstock_193000775-29a1d16668574972b1af360924e8a915.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Beauty',
        title: 'How Long You Need to Use New Hair- and Skin-Care Products to *Actually* See Results',
        author: 'Melanie Rud',
        img: 'https://www.shape.com/thmb/TMZhV-5_fKUTAnKMDRGzlp-7Qcs=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/skin-care-feature-a6b8a0dfef1f42c8ad6003d082062330.jpg'
    },
    {
        id: nanoid(),
        category: 'Beauty',
        title: "Selma Blair Said Ability-Inclusive Makeup Tools Helped Her Feel 'Alive' Again After MS Diagnosis",
        author: 'Zara Hanawalt',
        img: 'https://www.shape.com/thmb/t-aRFTBc73yiQlKISamCkIBBHuE=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Selma-Blair-Beauty-Tools-GettyImages-1357907609-a7cd788a5807455cb4740058508384f8.jpg'
    },

    {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },
    {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },
    {
        id: nanoid(),
        category: 'News And Trends',
        title: 'Weekend Warriors May Reap the Same Health Benefits As People Who Work Out Every Day',
        author: 'Arielle Tschinkel',
        img: 'https://www.shape.com/thmb/QqbuZAwNsPzEJxKg2mTdlLSZ9Pg=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Weekend-Workout-Study-GettyImages-1031476854-eb2842330f854745a2a39fa028ad2b42.jpg'
    },
    {
        id: nanoid(),
        category: 'Fitness',
        title: "You Need to See Pink and Her Kids Crushing It at the Skate Park",
        author: 'Genesis Rivas',
        img: 'https://www.shape.com/thmb/R6gF1iscNF9wqZV3OEe_tlKiDPw=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Pink-Skateboarding-GettyImages-1126252945-e6d76e580d1d49c2a516784b67074a55.jpg'
    }
    , {
        id: nanoid(),
        category: 'Beauty',
        title: "Dry Shampoos Guaranteed to Extend the Life of Your Blowout",
        author: 'Lindsay Hostert',
        img: 'https://www.shape.com/thmb/vIrBL8hsRtNQVjXa3El7LU_e5lw=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/shutterstock_193000775-29a1d16668574972b1af360924e8a915.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Beauty',
        title: 'How Long You Need to Use New Hair- and Skin-Care Products to *Actually* See Results',
        author: 'Melanie Rud',
        img: 'https://www.shape.com/thmb/TMZhV-5_fKUTAnKMDRGzlp-7Qcs=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/skin-care-feature-a6b8a0dfef1f42c8ad6003d082062330.jpg'
    },
    {
        id: nanoid(),
        category: 'Beauty',
        title: "Selma Blair Said Ability-Inclusive Makeup Tools Helped Her Feel 'Alive' Again After MS Diagnosis",
        author: 'Zara Hanawalt',
        img: 'https://www.shape.com/thmb/t-aRFTBc73yiQlKISamCkIBBHuE=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Selma-Blair-Beauty-Tools-GettyImages-1357907609-a7cd788a5807455cb4740058508384f8.jpg'
    },
    {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },
    {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },
    {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },
    {
        id: nanoid(),
        category: 'News And Trends',
        title: 'Weekend Warriors May Reap the Same Health Benefits As People Who Work Out Every Day',
        author: 'Arielle Tschinkel',
        img: 'https://www.shape.com/thmb/QqbuZAwNsPzEJxKg2mTdlLSZ9Pg=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Weekend-Workout-Study-GettyImages-1031476854-eb2842330f854745a2a39fa028ad2b42.jpg'
    },
    {
        id: nanoid(),
        category: 'Fitness',
        title: "You Need to See Pink and Her Kids Crushing It at the Skate Park",
        author: 'Genesis Rivas',
        img: 'https://www.shape.com/thmb/R6gF1iscNF9wqZV3OEe_tlKiDPw=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Pink-Skateboarding-GettyImages-1126252945-e6d76e580d1d49c2a516784b67074a55.jpg'
    }
    , {
        id: nanoid(),
        category: 'Beauty',
        title: "Dry Shampoos Guaranteed to Extend the Life of Your Blowout",
        author: 'Lindsay Hostert',
        img: 'https://www.shape.com/thmb/vIrBL8hsRtNQVjXa3El7LU_e5lw=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/shutterstock_193000775-29a1d16668574972b1af360924e8a915.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Beauty',
        title: 'How Long You Need to Use New Hair- and Skin-Care Products to *Actually* See Results',
        author: 'Melanie Rud',
        img: 'https://www.shape.com/thmb/TMZhV-5_fKUTAnKMDRGzlp-7Qcs=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/skin-care-feature-a6b8a0dfef1f42c8ad6003d082062330.jpg'
    },
    {
        id: nanoid(),
        category: 'Beauty',
        title: "Selma Blair Said Ability-Inclusive Makeup Tools Helped Her Feel 'Alive' Again After MS Diagnosis",
        author: 'Zara Hanawalt',
        img: 'https://www.shape.com/thmb/t-aRFTBc73yiQlKISamCkIBBHuE=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Selma-Blair-Beauty-Tools-GettyImages-1357907609-a7cd788a5807455cb4740058508384f8.jpg'
    },
    {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },
    {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },
    {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },
    {
        id: nanoid(),
        category: 'News And Trends',
        title: 'Weekend Warriors May Reap the Same Health Benefits As People Who Work Out Every Day',
        author: 'Arielle Tschinkel',
        img: 'https://www.shape.com/thmb/QqbuZAwNsPzEJxKg2mTdlLSZ9Pg=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Weekend-Workout-Study-GettyImages-1031476854-eb2842330f854745a2a39fa028ad2b42.jpg'
    },
    {
        id: nanoid(),
        category: 'Fitness',
        title: "You Need to See Pink and Her Kids Crushing It at the Skate Park",
        author: 'Genesis Rivas',
        img: 'https://www.shape.com/thmb/R6gF1iscNF9wqZV3OEe_tlKiDPw=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Pink-Skateboarding-GettyImages-1126252945-e6d76e580d1d49c2a516784b67074a55.jpg'
    }
    , {
        id: nanoid(),
        category: 'Beauty',
        title: "Dry Shampoos Guaranteed to Extend the Life of Your Blowout",
        author: 'Lindsay Hostert',
        img: 'https://www.shape.com/thmb/vIrBL8hsRtNQVjXa3El7LU_e5lw=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/shutterstock_193000775-29a1d16668574972b1af360924e8a915.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Beauty',
        title: 'How Long You Need to Use New Hair- and Skin-Care Products to *Actually* See Results',
        author: 'Melanie Rud',
        img: 'https://www.shape.com/thmb/TMZhV-5_fKUTAnKMDRGzlp-7Qcs=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/skin-care-feature-a6b8a0dfef1f42c8ad6003d082062330.jpg'
    },
    {
        id: nanoid(),
        category: 'Beauty',
        title: "Selma Blair Said Ability-Inclusive Makeup Tools Helped Her Feel 'Alive' Again After MS Diagnosis",
        author: 'Zara Hanawalt',
        img: 'https://www.shape.com/thmb/t-aRFTBc73yiQlKISamCkIBBHuE=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Selma-Blair-Beauty-Tools-GettyImages-1357907609-a7cd788a5807455cb4740058508384f8.jpg'
    },
    {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },
    {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },
    {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },
    {
        id: nanoid(),
        category: 'News And Trends',
        title: 'Weekend Warriors May Reap the Same Health Benefits As People Who Work Out Every Day',
        author: 'Arielle Tschinkel',
        img: 'https://www.shape.com/thmb/QqbuZAwNsPzEJxKg2mTdlLSZ9Pg=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Weekend-Workout-Study-GettyImages-1031476854-eb2842330f854745a2a39fa028ad2b42.jpg'
    },
    {
        id: nanoid(),
        category: 'Fitness',
        title: "You Need to See Pink and Her Kids Crushing It at the Skate Park",
        author: 'Genesis Rivas',
        img: 'https://www.shape.com/thmb/R6gF1iscNF9wqZV3OEe_tlKiDPw=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Pink-Skateboarding-GettyImages-1126252945-e6d76e580d1d49c2a516784b67074a55.jpg'
    }
    , {
        id: nanoid(),
        category: 'Beauty',
        title: "Dry Shampoos Guaranteed to Extend the Life of Your Blowout",
        author: 'Lindsay Hostert',
        img: 'https://www.shape.com/thmb/vIrBL8hsRtNQVjXa3El7LU_e5lw=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/shutterstock_193000775-29a1d16668574972b1af360924e8a915.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Beauty',
        title: 'How Long You Need to Use New Hair- and Skin-Care Products to *Actually* See Results',
        author: 'Melanie Rud',
        img: 'https://www.shape.com/thmb/TMZhV-5_fKUTAnKMDRGzlp-7Qcs=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/skin-care-feature-a6b8a0dfef1f42c8ad6003d082062330.jpg'
    },
    {
        id: nanoid(),
        category: 'Beauty',
        title: "Selma Blair Said Ability-Inclusive Makeup Tools Helped Her Feel 'Alive' Again After MS Diagnosis",
        author: 'Zara Hanawalt',
        img: 'https://www.shape.com/thmb/t-aRFTBc73yiQlKISamCkIBBHuE=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Selma-Blair-Beauty-Tools-GettyImages-1357907609-a7cd788a5807455cb4740058508384f8.jpg'
    },
    {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },
    {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },
    {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },
    {
        id: nanoid(),
        category: 'News And Trends',
        title: 'Weekend Warriors May Reap the Same Health Benefits As People Who Work Out Every Day',
        author: 'Arielle Tschinkel',
        img: 'https://www.shape.com/thmb/QqbuZAwNsPzEJxKg2mTdlLSZ9Pg=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Weekend-Workout-Study-GettyImages-1031476854-eb2842330f854745a2a39fa028ad2b42.jpg'
    },
    {
        id: nanoid(),
        category: 'Fitness',
        title: "You Need to See Pink and Her Kids Crushing It at the Skate Park",
        author: 'Genesis Rivas',
        img: 'https://www.shape.com/thmb/R6gF1iscNF9wqZV3OEe_tlKiDPw=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Pink-Skateboarding-GettyImages-1126252945-e6d76e580d1d49c2a516784b67074a55.jpg'
    }
    , {
        id: nanoid(),
        category: 'Beauty',
        title: "Dry Shampoos Guaranteed to Extend the Life of Your Blowout",
        author: 'Lindsay Hostert',
        img: 'https://www.shape.com/thmb/vIrBL8hsRtNQVjXa3El7LU_e5lw=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/shutterstock_193000775-29a1d16668574972b1af360924e8a915.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Beauty',
        title: 'How Long You Need to Use New Hair- and Skin-Care Products to *Actually* See Results',
        author: 'Melanie Rud',
        img: 'https://www.shape.com/thmb/TMZhV-5_fKUTAnKMDRGzlp-7Qcs=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/skin-care-feature-a6b8a0dfef1f42c8ad6003d082062330.jpg'
    },
    {
        id: nanoid(),
        category: 'Beauty',
        title: "Selma Blair Said Ability-Inclusive Makeup Tools Helped Her Feel 'Alive' Again After MS Diagnosis",
        author: 'Zara Hanawalt',
        img: 'https://www.shape.com/thmb/t-aRFTBc73yiQlKISamCkIBBHuE=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Selma-Blair-Beauty-Tools-GettyImages-1357907609-a7cd788a5807455cb4740058508384f8.jpg'
    },
    {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },
    {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },
    {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },
    {
        id: nanoid(),
        category: 'News And Trends',
        title: 'Weekend Warriors May Reap the Same Health Benefits As People Who Work Out Every Day',
        author: 'Arielle Tschinkel',
        img: 'https://www.shape.com/thmb/QqbuZAwNsPzEJxKg2mTdlLSZ9Pg=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Weekend-Workout-Study-GettyImages-1031476854-eb2842330f854745a2a39fa028ad2b42.jpg'
    },
    {
        id: nanoid(),
        category: 'Fitness',
        title: "You Need to See Pink and Her Kids Crushing It at the Skate Park",
        author: 'Genesis Rivas',
        img: 'https://www.shape.com/thmb/R6gF1iscNF9wqZV3OEe_tlKiDPw=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Pink-Skateboarding-GettyImages-1126252945-e6d76e580d1d49c2a516784b67074a55.jpg'
    }
    , {
        id: nanoid(),
        category: 'Beauty',
        title: "Dry Shampoos Guaranteed to Extend the Life of Your Blowout",
        author: 'Lindsay Hostert',
        img: 'https://www.shape.com/thmb/vIrBL8hsRtNQVjXa3El7LU_e5lw=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/shutterstock_193000775-29a1d16668574972b1af360924e8a915.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Beauty',
        title: 'How Long You Need to Use New Hair- and Skin-Care Products to *Actually* See Results',
        author: 'Melanie Rud',
        img: 'https://www.shape.com/thmb/TMZhV-5_fKUTAnKMDRGzlp-7Qcs=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/skin-care-feature-a6b8a0dfef1f42c8ad6003d082062330.jpg'
    },
    {
        id: nanoid(),
        category: 'Beauty',
        title: "Selma Blair Said Ability-Inclusive Makeup Tools Helped Her Feel 'Alive' Again After MS Diagnosis",
        author: 'Zara Hanawalt',
        img: 'https://www.shape.com/thmb/t-aRFTBc73yiQlKISamCkIBBHuE=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Selma-Blair-Beauty-Tools-GettyImages-1357907609-a7cd788a5807455cb4740058508384f8.jpg'
    },
    {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },
    {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },
    {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },
    {
        id: nanoid(),
        category: 'News And Trends',
        title: 'Weekend Warriors May Reap the Same Health Benefits As People Who Work Out Every Day',
        author: 'Arielle Tschinkel',
        img: 'https://www.shape.com/thmb/QqbuZAwNsPzEJxKg2mTdlLSZ9Pg=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Weekend-Workout-Study-GettyImages-1031476854-eb2842330f854745a2a39fa028ad2b42.jpg'
    },
    {
        id: nanoid(),
        category: 'Fitness',
        title: "You Need to See Pink and Her Kids Crushing It at the Skate Park",
        author: 'Genesis Rivas',
        img: 'https://www.shape.com/thmb/R6gF1iscNF9wqZV3OEe_tlKiDPw=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Pink-Skateboarding-GettyImages-1126252945-e6d76e580d1d49c2a516784b67074a55.jpg'
    }
    , {
        id: nanoid(),
        category: 'Beauty',
        title: "Dry Shampoos Guaranteed to Extend the Life of Your Blowout",
        author: 'Lindsay Hostert',
        img: 'https://www.shape.com/thmb/vIrBL8hsRtNQVjXa3El7LU_e5lw=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/shutterstock_193000775-29a1d16668574972b1af360924e8a915.jpg'
    }
    ,
    {
        id: nanoid(),
        category: 'Beauty',
        title: 'How Long You Need to Use New Hair- and Skin-Care Products to *Actually* See Results',
        author: 'Melanie Rud',
        img: 'https://www.shape.com/thmb/TMZhV-5_fKUTAnKMDRGzlp-7Qcs=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/skin-care-feature-a6b8a0dfef1f42c8ad6003d082062330.jpg'
    },
    {
        id: nanoid(),
        category: 'Beauty',
        title: "Selma Blair Said Ability-Inclusive Makeup Tools Helped Her Feel 'Alive' Again After MS Diagnosis",
        author: 'Zara Hanawalt',
        img: 'https://www.shape.com/thmb/t-aRFTBc73yiQlKISamCkIBBHuE=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Selma-Blair-Beauty-Tools-GettyImages-1357907609-a7cd788a5807455cb4740058508384f8.jpg'
    },
    {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },
    {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },
    {
        id: nanoid(),
        category: 'Fitness',
        title: 'How to Get Back to Working Out After You Took a Break from the Gym',
        author: 'Jay Cardello',
        img: 'https://www.shape.com/thmb/PXMT8Bm2SN0rMQ8UlzhoeMpi9AM=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-get-back-to-working-out-at-the-gym-3de8b9203d3a49b097c9a4ac7a5df05a.jpg'
    },
    {
        id: nanoid(),
        category: 'News And Trends',
        title: 'Weekend Warriors May Reap the Same Health Benefits As People Who Work Out Every Day',
        author: 'Arielle Tschinkel',
        img: 'https://www.shape.com/thmb/QqbuZAwNsPzEJxKg2mTdlLSZ9Pg=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Weekend-Workout-Study-GettyImages-1031476854-eb2842330f854745a2a39fa028ad2b42.jpg'
    },
    {
        id: nanoid(),
        category: 'Fitness',
        title: "You Need to See Pink and Her Kids Crushing It at the Skate Park",
        author: 'Genesis Rivas',
        img: 'https://www.shape.com/thmb/R6gF1iscNF9wqZV3OEe_tlKiDPw=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Pink-Skateboarding-GettyImages-1126252945-e6d76e580d1d49c2a516784b67074a55.jpg'
    }
    , {
        id: nanoid(),
        category: 'Beauty',
        title: "Dry Shampoos Guaranteed to Extend the Life of Your Blowout",
        author: 'Lindsay Hostert',
        img: 'https://www.shape.com/thmb/vIrBL8hsRtNQVjXa3El7LU_e5lw=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/shutterstock_193000775-29a1d16668574972b1af360924e8a915.jpg'
    }
]
