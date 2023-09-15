var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// inicio

let indexSlide = 1;
fotosInicio(indexSlide);

function slidePlus(n) {
  fotosInicio(indexSlide += n);
}

function slideCurrent(n) {
  fotosInicio(indexSlide = n);
}

function fotosInicio(n) {
  let i;
  let fotoInicio = document.getElementsByClassName("fotosInicio");
  let on = document.getElementsByClassName("on");
  if (n > fotoInicio.length) {indexSlide = 1}    
  if (n < 1) {indexSlide = fotoInicio.length}
  for (i = 0; i < fotoInicio.length; i++) {
    fotoInicio[i].style.display = "none";  
  }
  for (i = 0; i < on.length; i++) {
    on[i].className = on[i].className.replace(" active", "");
  }
  fotoInicio[indexSlide-1].style.display = "block";  
  on[indexSlide-1].className += " active";
}