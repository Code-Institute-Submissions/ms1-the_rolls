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
-	Present the brand and the service offered as a high-end, luxury product.
-	Primarily target the website at the lucrative wedding market, while making it clear the service can be booked for other occasions.

### **Target Clients:**
-	Couples organising their weddings. Typically 25-45 years old.
-	Parents looking to buy a wedding gift for their Son or Daughter. Typically 50-70 years old.
-	People looking to book a chauffeured car for a special occasion.

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

#### Colour Scheme:
The colour scheme was chosen to evoke certain emotions appropriate to this business. According to a [verywellmind.com article](https://www.verywellmind.com/color-psychology-2795824) on colour psychology:

Green evokes: Calm, optimism, security

Blue evokes: Stability, calm, trustworthiness, professionalism

White evokes: Cleanliness, peacefulness, simplicity

<!-- Black evokes: Sophistication

Grey evokes: Neutral, formal -->

#### Typography:

#### Images:

#### Animations:

# Features

The site has the same basic layout for each page.

The site is responsive to all screen sizes. This is done using Bootstrap’s flexbox grid system with its different responsive tiers. 

Each page is split into different sections and they appear either stacked or side by side, depending on the screen size, as per the wireframes.

- Header

    - The header sits to the top of each page.
    - The company logo will sit to the left of the header on all devices.
    - The site navigation links sit horizontally to the right on all devices except smartphones.
    - On smartphones the navigation links collapse down into a burger menu. The burger menu sits to the right of the header.

- Main Body

    - The main body of each page will contain the relevant content, in the form of images and text, for each page.

- Footer

    -	The footer has site navigation links across the top of the footer. This allows the user to easily navigate to the next page without having to scroll back to the top. Each footer has a different set of links so that only the other pages which can be navigated to are displayed, this is done to reduce clutter. Having these links at the bottom of each page makes for a nicer UX, especially on larger smartphones.

- Features specific to each page

    - Home Page
        - Leads with a hero image overlaid with a call to action in the form of a booking enquiry button. The button links to the Contact page.
        - A ‘What we do’ section to communicate to the user straight away the kind of service that is provided by the company.
        - A 'Testimonials' section with 2 reviews from previous happy customers.
    - About
        - An ‘About Us’ section to tell the user a little bit more about the company and the company ethos.
        - An ‘About the car’ section to give more detail on the cars specification, number of available seats etc.
    - Gallery
        - Promotional Images of the service provided in a carousel. By using this feature the user will not see the images loading one by one as they would if they were presented in a masonry design for example.
        - Below the image carousel there is a booking enquiry button that stands out to the user. This button links to the contact page.
    - Contact
        - The page leads with an image overlaid with text which encourages the user to make contact with the company.
        - An enquiry form with various input types to get the necessary information from the interested user. As the business is primarily targeted at weddings, the inputs are aligned to that need. All inputs are required except for the three address sections to allow the form to cater for different events.
        - A section that gives the email address and phone number.
        
# Technologies Used

- **[Balsamiq](https://balsamiq.com/)** - Used to create wireframes

- **[Gitpod IDE](https://gitpod.io/)** - Used to code HTML & CSS

- **[resizing.app](https://resizing.app/features/resize-png/)** - Used to resize images 

- **[cssgradient.io](https://cssgradient.io/)** Used to create color gradient background

# Testing

# Deployment

# Credits

pexels.com used for the stock photos in testimonials section.

https://www.howtoonlinetips.com/hide-google-map-top-bar-embedded-header/ used inspiration from the code on this site to hide the header on the embedded google map.