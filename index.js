var acc = document.getElementsByClassName("accordion");
var porojectSection = document.getElementById("projects-grid");
var MorePorojectSection = document.getElementById("more-projects-grid");
var i;

const projectList = [
    {
      url: "https://www.mscflexone.com",
      image: "./img/marathon-system_50.png",
      title: "The Marathon System",
      description: "The marathon system has been helping Insurance Agents run their Agency Management and Premium financing for over 30 years. The software is written using Clarion by Softvelocity. The software runs seamlessly in a browser using TSPlus. Key technologies: Windows Hyper-V/Windows Server 2019/Group Policy/Active Directory/ACL’s., AWS S3 Storage/IAM/Bucket and User Policies, Nettalk by Capesoft WebServices/WebPortal/Email/SMS/ftp, IPDriver/IMDD/DFD by Softvelocity, Premier/SendTo by Capesoft, sftp Chilkat Wrapper by Noyantis. "
    },
    {
      url: "http://www.mscflexone.com/Tutorials/WWW%20-%20Give%20your%20customers%20web%20access%20to%20their%20account.mp4",
      image: "./img/marathon-application-portal_50.png",
      title: "The Marathon System online portal",
      description: "The Marathon System Online Portal gives customers access to many useful features. The portal not only displays customer data but also allows customers to enter credit card payments, print forms and download documents. The web portal uses Two-factor authentication using either SMS or Email. Key Technologies: Clarion, Nettalk WebServer/Rest/SOAP, AWS S3, Html/CSS/Javascript.  "
    },
    {
      url: "https://khojant.com/",
      image: "./img/khojant-llc-landing-page_50.png",
      title: " khojant llc landing page",
      description: "The khojant LLC landing page. Key technologies: HTML/CSS/Javascript"
    }
  ]

const moreprojectList = [ 
  {
    url: "https://jeffhmarathon.github.io/maxstrong-landing-page/",
    image: "./img/maxstrong-landing-page_50.png",
    title: "Landing Page",
    description: "Landing page for MaxString using responsive design. Key technologies: HTML/CSS/Javascript"
  }, 
  {
    url: "https://jeffhmarathon.github.io/product-landing-page/",
    image: "./img/product-landing-page_50.png",
    title: "Product Page",
    description: "Simple website for Original Trombones. . Key technologies: HTML/CSS/Youtube Video"
  }, 
  {
    url: "https://jeffhmarathon.github.io/youtube-page/",
    image: "./img/youtube-page_50.png",
    title: "youtube search page",
    description: "This project page demonstrates accessing the youtube API's using HTML CSS and Javascript"
  }, 
  {
    url: "https://jeffhmarathon.github.io/pexels-search-page/",
    image: "./img/pexels-search-page_50.png",
    title: "pexel search page",
    description: "This project page demonstrates accessing the pexels API's using HTML CSS and Javascript"
  },                             
  {
    url: "https://jeffhmarathon.github.io/blog-site/",
    image: "./img/blog-page_50.png",
    title: "blog page",
    description: "Plog page project using HTML and CSS"
  }, 
  {
    url: "https://jeffhmarathon.github.io/technical-documentation-page/",
    image: "./img/technical-documentation-page_50.png",
    title: "technical documentation page",
    description: "Website used for technichal documentation with menu navigation"
  }, 
  {
    url: "https://jeffhmarathon.github.io/survey-form/",
    image: "./img/survey-form_50.png",
    title: "survey form",
    description: "Website Suvey Form using several form elements"
  },                 
  {
    url: "https://jeffhmarathon.github.io/ecommerce-quiz/",
    image: "./img/ecommerce-quiz_50.png",
    title: "ecommerce-quiz",
    description: "Quiz webpage and results page using javascript, CSS and HTML."
  },                 
  {
    url: "https://jeffhmarathon.github.io/order-menu/",
    image: "./img/order-menu_50.png",
    title: "order-menu",
    description: "Quick order menu using responsive design for Mobile and Desktop. Uses HTML and CSS"
  },
  {
    url: "https://jeffhmarathon.github.io/mario-animation/",
    image: "./img/mario-animation_50.png",
    title: "mario animation",
    description: "This was a fun animation project that uses CSS and HTML"
  }, 
  {
    url: "https://jeffhmarathon.github.io/tribute-to-boston/",
    image: "./img/tribute-to-boston_50.png",
    title: "tribute to boston",
    description: "This is a webpage for one of the best bands of the 70's, Responsive design using HTML and CSS"
  }, 
  {
    url: "https://jeffhmarathon.github.io/resume-page/",
    image: "./img/resume-page_50.png",
    title: "resume-page",
    description: "A simple resume page using HTML and CSS"
  },        
  {
    url: "https://jeffhmarathon.github.io/slider-section/",
    image: "./img/quote-slider_50.png",
    title: "quote slider",
    description: "This quote slider was a small project to be incorporated into a website. Uses HTML, CSS and Javascript"
  } 
]


for (i = 0; i < projectList.length; i++) {
  const projectItem = projectList[i];
  const frontSection = `<a href="${projectItem.url}" target="_blank" class="front-panel project-tile"><img class="project-image" src="${projectItem.image}" alt="project"/><p class="project-title"><span class="code">&lt;</span>${projectItem.title}<span class="code">&#47;&gt;</span></p></a>`
  const backSection = `<p class="back-panel">${projectItem.description}</p>`
  porojectSection.innerHTML += `<div class="main-panel project">${frontSection}${backSection}</div>` ;
  console.log(porojectSection.innerHTML)
}

for (i = 0; i < moreprojectList.length; i++) {
  const projectItem = moreprojectList[i];
  const frontSection = `<a href="${projectItem.url}" target="_blank" class="front-panel project-tile"><img class="project-image" src="${projectItem.image}" alt="project"/><p class="project-title"><span class="code">&lt;</span>${projectItem.title}<span class="code">&#47;&gt;</span></p></a>`
  const backSection = `<p class="back-panel">${projectItem.description}</p>`
  MorePorojectSection.innerHTML += `<div class="main-panel project">${frontSection}${backSection}</div>` ;
  console.log(MorePorojectSection.innerHTML)
}

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");
    /* Toggle between hiding and showing the active panel */
    
    var panel = this.nextElementSibling;
    var icon = this.firstElementChild;
    console.log(icon);
    if (panel.style.display === "block") {
      icon.classList.remove("fa-chevron-up");
      icon.classList.add("fa-chevron-down");
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
      icon.classList.remove("fa-chevron-down");
      icon.classList.add("fa-chevron-up");      
    }


  });
}
