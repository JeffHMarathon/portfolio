var acc = document.getElementsByClassName("accordion");
var porojectSection = document.getElementById("projects-grid");
var i;

const projectList = [
    {
      url: "https://www.mscflexone.com",
      image: "./img/marathon-system.png",
      title: "The Marathon System",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec augue at tellus convallis efficitur laoreet sed dolor. Morbi metus quam, rutrum vel imperdiet id, aliquet quis mauris. Donec egestas tortor non elementum congue. Integer purus nisl, ultrices vel rhoncus in, eleifend vel risus. Cras placerat ultrices nulla at fringilla. Sed quam diam, tempus in justo quis, varius laoreet lectus. Maecenas iaculis suscipit ligula vel volutpat. Fusce ipsum magna, blandit ac ligula eget, euismod pellentesque enim. "
    },
    {
      url: "https://www.gomarathon.biz/?_payto_=demo",
      image: "./img/marathon-application-portal.png",
      title: "The Marathon System online portal",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec augue at tellus convallis efficitur laoreet sed dolor. "
    },
    {
      url: "https://khojant.com/",
      image: "./img/khojant-llc-landing-page.png",
      title: " khojant llc landing page",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec augue at tellus convallis efficitur laoreet sed dolor. "
    },
    {
      url: "https://jeffhmarathon.github.io/maxstrong-landing-page/",
      image: "./img/maxstrong-landing-page.png",
      title: "Landing Page",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec augue at tellus convallis efficitur laoreet sed dolor. "
    }, 
    {
      url: "https://jeffhmarathon.github.io/product-landing-page/",
      image: "./img/product-landing-page.png",
      title: "Product Page",
      description: ""
    }, 
    {
      url: "https://jeffhmarathon.github.io/youtube-page/",
      image: "./img/youtube-page.png",
      title: "youtube search page",
      description: ""
    }, 
    {
      url: "https://jeffhmarathon.github.io/slider-section/",
      image: "./img/quote-slider.png",
      title: "quote slider",
      description: ""
    }, 
    {
      url: "https://jeffhmarathon.github.io/pexels-search-page/",
      image: "./img/pexels-search-page.png",
      title: "pexel search page",
      description: ""
    },                                 
    {
      url: "https://jeffhmarathon.github.io/blog-site/",
      image: "./img/blog-page.png",
      title: "blog page",
      description: ""
    }, 
    {
      url: "https://jeffhmarathon.github.io/mario-animation/",
      image: "./img/mario-animation.png",
      title: "mario animation",
      description: ""
    }, 
    {
      url: "https://jeffhmarathon.github.io/tribute-to-boston/",
      image: "./img/tribute-to-boston.png",
      title: "tribute to boston",
      description: ""
    }, 
    {
      url: "https://jeffhmarathon.github.io/technical-documentation-page/",
      image: "./img/technical-documentation-page.png",
      title: "technical documentation page",
      description: ""
    }, 
    {
      url: "https://jeffhmarathon.github.io/survey-form/",
      image: "./img/survey-form.png",
      title: "survey form",
      description: ""
    },                 
    {
      url: "https://jeffhmarathon.github.io/ecommerce-quiz/",
      image: "./img/ecommerce-quiz.png",
      title: "ecommerce-quiz",
      description: ""
    },                 
    {
      url: "https://jeffhmarathon.github.io/order-menu/",
      image: "./img/order-menu.png",
      title: "order-menu",
      description: ""
    },    
    {
      url: "https://jeffhmarathon.github.io/resume-page/",
      image: "./img/resume-page.png",
      title: "resume-page",
      description: ""
    },        


  ]

for (i = 0; i < projectList.length; i++) {
  const projectItem = projectList[i];
  const frontSection = `<a href="${projectItem.url}" target="_blank" class="front-panel project-tile"><img class="project-image" src="${projectItem.image}" alt="project"/><p class="project-title"><span class="code">&lt;</span>${projectItem.title}<span class="code">&#47;&gt;</span></p></a>`
  const backSection = `<p class="back-panel">${projectItem.description}</p>`
  porojectSection.innerHTML += `<div class="main-panel project">${frontSection}${backSection}</div>` ;
  console.log(porojectSection.innerHTML)
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
