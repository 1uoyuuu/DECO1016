# DECO1016_Web Prototype

This is my development documentation during working on the prototype, I will talk about the design principels used in my prototype, as well as my considerations and limitations during the process.

## Authors
- [@Yu Luo]()

## Design Patterns
The purpose of this website is to attract more people to visit Yunnan one day. For them to learn about Yunnan and stay on my website for longer, my idea was to make it informative and have some interesting interactive features. Based on my concept, I selected the following major design patterns for my website development.

### Breadcrumb
Firstly, to make it easy and not overwhelming for users to navigate through the massive information, I have added breadcrumb navigation to every page (except the home page) so that users know where they are at all times and understand the structure and hierarchy of the website, which will improve the learnability and utility of the site (Suresh, 2015).

### Sticky header + Home Link
It is always easy for desktop users to get to the top of a site, but it is sometimes painful for mobile users, as they need to scroll up all the way to see the top navigation bar. To create a better user experience for mobile users, I set the top navigation bar sticky when it is displayed on a smaller screen, allowing users to have the ability to switch between different pages whenever they want. Moreover, it is a rule of thumb now to make the website logo an anchor to the home page, leading users back to a safe starting point of the website.

### Card
Cards showcase aggregated text and image information to create a more efficient browsing experience for users. As a considerable part of the modular design approach, card-based design works perfectly with responsive websites (Cards Design Pattern, n.d.). It is highly adaptive and easy to understand, and once you create one particular card layout, it can be transformed to display any other similar information(Maria, n.d.). Because it usually serves as the entry point of another site, it is not very text-heavy, and users can quickly and effectively go through a lot of information and decide where they want to visit next.

### Carousel
The other main design pattern used on my website is the carousel. It is very convenient to display a set of pictures in a limited space. I have always believed that a remarkable photograph speaks louder than a long text regarding travel. Due to the limited horizontal space on the screen, a carousel makes it possible and enjoyable for us to display the photo sets. However, the carousel requires clicking or dragging to interact, which is not accessible for specific users. To fix this, I have created an autoplay and made it possible for users to interact with the carousel using the arrow keys on the keyboard.

### Interactive Map
Lastly, as I mentioned before, making it easy to navigate and digest the information on a website is just the prerequisite for a good website. To increase the stay time of users on your website, it is necessary to make the browsing experience more enjoyable. My solution was inspired by this website(https://us-keepexploring.canada.travel/), an interactive map not only allows users to navigate in an exciting way but also teaches users some essential knowledge about the place they are about to visit.


## Implementation Justifications
When developing this website, as I chose my hometown for my project, I thought I must try my best to make it the best it can be at the moment within my capabilities. After developing the static pages, I tried to look into javascript and add some exciting designs through javascript as I have a programming foundation. 

### Useful Feedback
In my original idea, I wanted to create a separate page for each city to show the various information available. The tutor told me this would exceed the page limit and add a lot of work. Instead, she suggested, “displaying each city's photo and giving an appropriate amount of description about it”. Therefore, I have placed the information for each city on the same page in a similar format. To avoid users getting lost on the long page, I have placed breadcrumb navigation at the beginning of each city section to help users quickly get back to the previous level.

### Notable Obstacles
The interactive map took me a whole week to figure out how to make it work. One difficulty I had was that there was always a flicker when switching between backgrounds, which greatly affected the user experience. To solve this problem, I used HTML to preload the images in the <head> section.
```
    <link rel="preload" href="images/destination-page/regions/central.png" as="image">
    <link rel="preload" href="images/destination-page/regions/eastern.png" as="image">
    <link rel="preload" href="images/destination-page/regions/western.png" as="image">
    <link rel="preload" href="images/destination-page/regions/southwestern.png" as="image">
    <link rel="preload" href="images/destination-page/regions/northwestern.png" as="image">

```
Another challenge was to create the transition when users switch between different regions. My inspiration was from this website (https://dev.to/codecustard/creating-an-interactive-map-of-the-us-b5o), where I learnt about the power of SVG paths, as you can directly change the fill and stroke using CSS to create a smooth transition.

Other than that, since we can only include one shared script.js, I encountered a scenario that I only want to run certain script lines in particular webpage, or it will raise a TypeError if I run the script.js on other pages.
![error message](/images/readme/error-screenshot.png) To fix this, I got inspired by this post(https://stackoverflow.com/questions/50692992/how-to-run-a-javascript-function-only-on-a-certain-page-or-pages) and used a simple if statement to determine the current page.
### Design Changes
For most of the pages, my prototypes are identical to the mockups, and where changes have been made, it's either because I cannot implement them or because user feedback has revealed their flaws. 
![navbar_before](/images/readme/change_1_before.png) 
First, I deleted the search icon in the top navigation bar since I cannot implement the search function. 
![navbar_after](/images/readme/change_1_after.png) 
Other than that, one notable change was the homepage carousel. According to user feedback, they thought my original design was not accessible when they view it on a smaller screen, it is hard to click the next/previous button, and it is not friendly to certain users as well. 
![carousel_before](/images/readme/change_2_before.png) Therefore, I changed it to autoplay, and users can also interact with it using mouse(dragging) or keyboard(arrow keys)
![carousel_after](/images/readme/change_2_after.png) 

## References
Cards design pattern. (n.d.). Retrieved 18 November 2022, from https://ui-patterns.com/patterns/cards
Creating an Interactive Map of the US. (n.d.). DEV Community 👩‍💻👨‍💻. Retrieved 18 November 2022, from https://dev.to/codecustard/creating-an-interactive-map-of-the-us-b5o
Maria, K. (n.d.). Card UI Design Examples and Best Practices. Retrieved 18 November 2022, from https://www.eleken.co/blog-posts/card-ui-examples-and-best-practices-for-product-owners
Paul, A. (n.d.). Why cards are the future of the web—Inside Intercom. Retrieved 18 November 2022, from https://www.intercom.com/blog/why-cards-are-the-future-of-the-web/
Suresh, S. (2015, August 25). What is Breadcrumb & How It Eases Navigation? (With Examples) - VWO. Blog. https://vwo.com/blog/why-use-breadcrumbs/
Tiraya, A. (2018). Above the rice terraces[Photograph]. Unsplash. https://unsplash.com/photos/O-mujjYSBRY
Unsplash. (2020) Golden hour shortly after sunrise, viewed from SUNYATA, Wu Nong Ding[Photograph]. Unsplash. https://unsplash.com/photos/8tBIAFmoNEA
Visual China Group. (2021) Blue Moon Valley[Photograph]. VSC. https://www.vcg.com/creative/1366504543
Visual China Group. (2020) Young Woman in Tranditional Bai Minority Costume[Photograph]. VSC. https://www.vcg.com/creative/1322850312
Visual China Group. (2019) Water Splashing Festival[Photograph]. VSC. https://www.vcg.com/creative/1271223408
Visual China Group. (2016) Lugu Lake[Photograph]. VSC. https://www.vcg.com/creative/1363119073
Visual China Group. (2019) Young Woman in Traditional Bai Minority Costume[Photograph]. VSC. https://www.vcg.com/creative/1322850312
Visual China Group. (2020) Red Panda[Photograph]. VSC. https://www.vcg.com/creative/1298657025
Visual China Group. (2021) Rainforest[Photograph]. VSC. https://www.vcg.com/creative/1155588941
Visual China Group. (2021) Ethnic Group Dai[Illustration]. VSC. https://www.vcg.com/creative/1360706014
Visual China Group. (2021) Ethnic Group Naxi[Illustration]. VSC. https://www.vcg.com/creative/1344388038
Visual China Group. (2021) Ethnic Group Yi[Illustration]. VSC. https://www.vcg.com/creative/1319213698
Visual China Group. (2021) Ethnic Group Baii[Illustration]. VSC. https://www.vcg.com/creative/1360697016
Visual China Group. (2021) Ethnic Group Miao[Illustration]. VSC. https://www.vcg.com/creative/1360706291
Visual China Group. (2021) Ethnic Group Tibetan[Illustration]. VSC. https://www.vcg.com/creative/1314397747
Walter, B. (2019). Dali Old Town- Young Woman in Traditional Minority Costume[Photograph]. Gettyimages. https://www.gettyimages.com.au/detail/photo/yunnan-province-dali-dali-old-town-royalty-free-image/84427922?adppopup=true
Yunnan Eighteen Oddities. (n.d.). Retrieved 23 September 2022, from https://www.visitourchina.com/kunming/guide/yunnan-eighteen-oddities.html
Yuzki, W. (2019). Lake in Lijiang[Photograph]. Unsplash. https://unsplash.com/photos/lRggzdwAM0w
Yunnan; Tie Dye’s Blue & White Spiritual Home. (2020, April 10). The Nanjinger. https://www.thenanjinger.com/magazine/the-trip/yunnan-tie-dyes-blue-white-spiritual-home/

