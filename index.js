var acc = document.getElementsByClassName("accordion");

var i;

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
