![The Rolls Logo]()

This project is a static front-end website for a fictitious chauffeur driven, luxury car-hire service named “The Rolls”.

* Insert mockup screenshot *

# Table of Contents


- [Project Overview](#project-overview)

- [UX Design](#ux-design)

    - [Strategy](#strategy-plane)
    - [Scope](#scope-plane)
    - [Structure](#structure-plane)
    - [Skeleton](#skeleton-plane)
    - [Surface](#surface-plane)

- [Features](#features)

- [Technologies Used](#technologies-used)

- [Testing](#testing)

- [Deployment](#deployment)

- [Credits](#credits)

# Project Overview

This project is for Milestone 1 of the Code Institute Full Stack Developer Course. The purpose of the project is to develop a static front-end site to present useful information to users, using mainly HTML & CSS.

“The Rolls” is a fictitious Irish company that provides a chauffeur driven luxury classic car for weddings and other special events. Customers will be able to view the car, find out more about the service provided, and make booking enquiries on the site to check availability. 

# UX Design

## Strategy Plane

### **The Business Goals:**
-	Create an online presence for the company where users can easily access information on the service.
-	Develop more booking leads for the business.
-	Present the brand and the service offered as a high-end, luxury product andevoke a sense of timeless elegance.
-	Primarily target the website at the lucrative wedding market, while making it clear the service can be booked for other occasions.

### **Target Clients:**
-	Couples organising their weddings. Typically 25-45 years old.
-	Parents looking to buy a wedding gift for their Son or Daughter. Typically 50-70 years old.
-	People looking to book a chauffeured car for a special occasion. Variable ages.

### **Tech considerations:**
-	The service is targeted at users of varying ages and varying technical ability, so it is important that the site is easy to use and navigate. 
-	As the target users are of varying ages and degrees of tech savviness, the user should have the option to make a booking enquiry by phone, email or enquiry form.

### **User Stories:**
-	As a visitor to the site I want to see what services you provide.
-	As a potential customer I want to see what the car looks like inside and out, so I know exactly what I would be paying for.
-	As a potential customer who is interested in booking your service I want to know how much it costs, so I know if it is within my budget before spending time making an enquiry.
-	As an interested customer I would like a link to your social media accounts, so I can see more photos and follow you.
-	As a customer who has decided to go ahead and book the service, I want to make a booking enquiry.
-	As a potential customer I would like to see your customer testimonials, so that I will feel more confident about booking the service.
-	As a potential customer I want to find out more about your company, so that I can get to know more about your company ethos.

### **Competitor Review:**
[VintageWeddingCars.ie](http://www.vintageweddingcars.ie/)

- Pros: 
    -	A well-presented, responsive site with good images and all of the information needed.
    -	Simple contact options.
- Cons: 
    -	The “We Recommend” section adds unnecessary complexity to the site and could potentially lead to users being distracted and led away from the site.
    -	No pricing information.

[KPCD.ie](https://www.kpcd.ie/)

- Pros:
    - Good contact options
- Cons:
    - Information overload. Far too much information on each page. This gives a very poor UX and likely leads to a loss in booking enquiries.
    - No pricing information.

[VolksWeddings.ie](https://www.volksweddings.ie/)

-	Cons:
    -	Poor responsiveness.
    -	Inconsistent sizing, spacing and borders of images.
    -	Very poor navigation.
    -	Poor placement of contact options.
    -	No pricing information.

### **Scope Plane**

The following must be incorporated:
-	The ability to easily make contact for a booking enquiry via phone, email, and online form.
-	A responsive design that will present the information in a logical format on all devices.
-	Easy and intuitive to navigate.
-	The content describing the service must be clear and concise while avoiding information overload.
-	Appropriate images to primarily target the wedding market and to show the service provided.
-	Appropriate branding and colour palette for the business.

What could be incorporated?
-	An online booking system could be incorporated in the future but will not be added at this time.
-	A testimonials section that takes in the latest reviews from Facebook and displays in a carousel.
-	An Enquiry form that gives different input options depending on the occasion the user is booking for.

### **Structure Plane**

The structure of the site follows standard conventions. Each page has the same basic structure:

-	Navigation bar across the top with simple horizontal layout. Displayed as a burger menu on smaller devices.
-	Main body of the page containing the relevant content.
-	Footer at the bottom of the page containing site links and social media.

The website is broken into four different pages:

•	**Home**
This page will clearly outline what the company offers and why you would choose The Rolls.

•	**About**
This page will tell the user a bit more about the company ethos, the car and information on the pricing.

•	**Gallery**
This page will have a gallery of the promotional photographs.

•	**Contact**
This page will have details on how to contact the company for a booking enquiry.


### **Skeleton Plane**

[Home Page Wireframes](./assets/images/homepage-wireframe.png)

[About Us Wireframes](./assets/images/about-wireframe.png)

[Gallery Wireframes](./assets/images/gallery-wireframe.png)

[Contact Wireframes](./assets/images/contact-wireframe.png)

### **Surface Plane**

The projects overall aesthethic is designed to align with the companies ethos and branding and evoke a sense of calm, trusthworthiness and simplicity.

#### Logo:

Instead of creating a logo I chose to keep it simple and implement the site logo using HTML. 

#### Colour Scheme:
The colour scheme was chosen to evoke certain emotions appropriate to this business. According to a [verywellmind.com article](https://www.verywellmind.com/color-psychology-2795824) on colour psychology:

Blue evokes: Stability, calm, trustworthiness, professionalism

Green evokes: Calm, optimism, security

White evokes: Cleanliness, peacefulness, simplicity

Black evokes: Sophistication

I chose to use green and white as the two main colours of the site and then allow the blue to come from the images of the car on the site.

The colour of the car is a washed out blue so I chose to complement that with a similarily washed out green. The white chosen is an off white to add some warmth to the site as I felt pure white made the site appear a little cold. The text is a dark grey rather than black to bring a some warmth and to complement the washed out colours of blue and green.

Where the breen is used a backgound it has been implemented with a very subtle linear gradient, with a darker green to the sides and a slightly brighter green to the center.

Specifically, the three main colours used are:
<figure style="display:inline-block">
<div style="background-color:#90a8be; width:100px; height:100px; border-radius:10px; border:1px solid #000; display:inline-block"></div>
<figcaption>Car colour</figcaption>
</figure>
<figure style="display:inline-block">
<div style="background-color:#b8cdb7; width:100px; height:100px; border-radius:10px; border:1px solid #000; display:inline-block"></div>
<figcaption>#b8cdb7</figcaption>
</figure>
<figure style="display:inline-block">
<div style="background-color:#fffcf7; width:100px; height:100px; border-radius:10px; border:1px solid #000; display:inline-block"></div>
<figcaption>#fffcf7</figcaption>
</figure>
<figure style="display:inline-block">
<div style="background-color:#3b3b3b; width:100px; height:100px; border-radius:10px; border:1px solid #000; display:inline-block"></div>
<figcaption>#3b3b3b</figcaption>
</figure>



#### Typography:
Google fonts were used for all of the fonts on the site.

- Playfair Display at regular font weight was chosen for the brand logo and main headings. Playfair is an elegant serif typeface well suited for titles and headlines. Its classical style lends itself to the company ethos of timeless elegance.

- Raleway at font weight 300 was chosen as the text for the main body and sub headings. Raleway is an elegant sans-serif typeface. To add an extra touch of elegance I chose to use a light weight.

- Italianno was chosen for the Henry Rolls quote section. Italianno is a cursive typeface, chosen for its elegance. 

#### Images:

The images used on the majority of the site are my own images, taken by David McClelland. The images were chosen to highlight the service provided.

The images of couples in the testimonial section are royalty free images from pexels.com.

#### Animations:

The animations used are for the quote section of the about page and for the navigation links in the header and the footer. 
- A slide in from left transition and a fade in transition are used for the quote section. The animations are implemented using [animate.css](https://animate.style/)

- An underline from the left on hover animation is used for the navigation links. The animation is implemented using [hover.css](https://ianlunn.github.io/Hover/)

# Features

The site has the same basic layout for each page.

The site is responsive to all screen sizes. This is done using [Bootstrap’s](https://getbootstrap.com/docs/5.0/getting-started/introduction/) flexbox grid system with its different responsive tiers. 

Each page is split into different sections and they appear either stacked or side by side, depending on the screen size, as per the wireframes.

- Header

    - The header sits to the top of each page.
    - The company logo will sit to the left of the header on all devices.
    - The site navigation links sit horizontally to the right on all devices except smartphones.
    - The navigation links are underlined from the left on hover. Implemented using [hover.css](https://ianlunn.github.io/Hover/).
    - On smartphones the navigation links collapse down into a burger menu. The burger menu sits to the right of the header. This is done using [Bootstrap's collapsable navbar](https://getbootstrap.com/docs/5.0/components/navbar/).

- Main Body

    - The main body of each page contains the relevant content, in the form of images and text, for each page. The elements on the page are made responsive to different screen sizes using [Bootstrap's grid system](https://getbootstrap.com/docs/5.0/layout/grid/).

- Footer

    - The footer has site navigation links across the top of the footer. As with the header this is implemented using Bootstrap's navbar class. This allows the user to easily navigate to the next page without having to scroll back to the top. Having these links at the bottom of each page makes for a nicer UX, especially on larger smartphones.
    - Each footer has a different set of links so that only the other pages which can be navigated to are displayed, this is done to reduce clutter. 
    - Social media links in the form of icons inside a circular div. The icons are [FontAwesome Icons(https://fontawesome.com/icons?d=gallery). The background colour changes to green when hovered over with a 0.2 second ease in and out transition.
    - Company address- Copyright fine print.

- Features specific to each page

    - Home
        - Leads with a hero image overlaid with a call to action in the form of a booking enquiry button. The button links to the Contact page. The callout is placed in such a way as to allow the user to see the main focus of the image underneath regardless of the screen size.
        - A ‘What we do’ section to communicate to the user straight away the kind of service that is provided by the company.
        - A 'Testimonials' section with 3 reviews from previous happy customers. The testimonials are in a [Bootstrap carousel](https://getbootstrap.com/docs/5.0/components/carousel/). It is a slide type carousel with a 10 second interval timer.
    - Gallery
        - Promotional Images of the service provided in a [Bootstrap carousel](https://getbootstrap.com/docs/5.0/components/carousel/). The carousel used is a crossfade carousel with an interval timer set at 5 seconds. By using this feature the user will not see the images loading one by one as they would if they were presented in a masonry design for example. This is done to promote a better UX and encourage user interaction.
        - Below the image carousel there is a booking enquiry button that stands out to the user. This button links to the contact page.
    - About
        - A quote from Henry Royce to convey to the user the company ethos. The quote slides in from the left and the author fades in after the quote has stopped. This is done using [animate.css](https://animate.style/).
        - An ‘About Us’ section to tell the user a little bit more about the company and the company ethos.
        - An ‘About the car’ section to give more detail on the cars specification etc.
        - A 'Pricing' section to show the approximate price of the service. Below the text detailing the price there is a google map in an iframe to show the user the approximate cost in the defined areas. The iframe is manipulated to hide the cumbersome bar across the top of personal google maps.
    - Contact
        - The page leads with an image.
        - An wedding enquiry form with various input types to get the necessary information from the interested user. As the business is primarily targeted at weddings, the inputs are aligned to that need. All inputs are required except for the message input. When information is posted to Code Institutes form dump in order to demonstrate the use of the form.
        - A section that gives the email address and phone number to allow the users to make contact this way if they prefer or to just ask a question.
        
# Technologies Used

- **[Balsamiq](https://balsamiq.com/)** - Used to create wireframes

- **[Gitpod IDE](https://gitpod.io/)** - Used to code HTML & CSS

- **[resizing.app](https://resizing.app/features/resize-png/)** - Used to resize images 

- **[cssgradient.io](https://cssgradient.io/)** Used to create color gradient background

# Testing


# Deployment

# Credits

pexels.com used for the stock photos in testimonials section.

Google fonts.

animate.css

hover.css

https://www.howtoonlinetips.com/hide-google-map-top-bar-embedded-header/ used inspiration from the code on this site to hide the header on the embedded google map.

fontawesome