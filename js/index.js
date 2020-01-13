const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",

    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",


    "about-h4":"About",


    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",


    "middle-img-src": "img/mid-page-accent.jpg",


    "services-h4":"Services",

    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",


    "product-h4":"Product",


    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",


    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",


  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


let ctaimg = document.getElementById("cta-img");
ctaimg.setAttribute('src',siteContent["cta"]["img-src"]);

let middleimg = document.getElementById('middle-img',siteContent['main-content']['middle-img-src']);

let navBar = document.getElementsByTagName('a');

// Services

let services = navBar[0].setAttribute(siteContent['href'],['#Services']);

navBar[0].textContent = 'Services';


// Product

let product = navBar[1].setAttribute(siteContent['href'],['#Product']);

navBar[1].textContent = 'Product';

// Vision

let vision = navBar[2].setAttribute(siteContent['href'],['#Vision']);

navBar[2].textContent = 'Vision';


// Features

let features = navBar[3].setAttribute(siteContent['href'],['#Features']);

navBar[3].textContent = 'Features';



// About


let about = navBar[4].setAttribute(siteContent['href'],['#About']);

navBar[4].textContent = 'About';


// Contact

let contact = navBar[5].setAttribute(siteContent['href'], ['#Contact']);

navBar[5].textContent = 'Contact';


// h1 "Dom is Awesome"

let h1 = document.querySelector('h1');

h1.textContent = 'Dom is Awesome!';


// Button 

let button = document.querySelector('button');

button.textContent = 'Get Started';


// features h4

let featuresH4 = document.querySelector('h4');

featuresH4.textContent = 'Features';


// features content

let featuresContent = document.querySelector('p');

featuresContent.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

// About

let aboutH4 = document.getElementsByTagName('h4');

aboutH4[1].textContent = 'About';

// About Content

let aboutContent = document.getElementsByTagName('p');

aboutContent[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';



// Services


let servicesH4 = document.getElementsByTagName('h4');

servicesH4[2].textContent = 'Services';

// Services content

let servicesContent = document.getElementsByTagName('p');

servicesContent[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

// Product

let productTitle = document.getElementsByTagName('h4');

productTitle[3].textContent = 'Product';


// Product Content

let productContent = document.getElementsByTagName('p');

productContent[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis';


//Vision

let visionTitle= document.getElementsByTagName('h4');

visionTitle[4].textContent = 'Vision';

//Vision Content


let visionContent = document.getElementsByTagName('p');

visionContent[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';



// // Contact

let contactTitle = document.getElementsByTagName('h4');

contactTitle[5].textContent = 'Contact';

// // Contact Content


let contactContent = document.getElementsByTagName('p');

contactContent[5].textContent = '123 Way 456 Street Somewhere, USA';

contactContent[6].textContent = '1 (888) 888-8888';

contactContent[7].textContent = 'sales@greatidea.io';


// // footer

let footer = document.getElementsByTagName('p');

footer[8].textContent = 'Copyright Great Idea! 2018'
