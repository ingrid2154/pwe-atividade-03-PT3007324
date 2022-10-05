let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(t) {
  showSlides(slideIndex += t);
}

function currentSlide(t) {
  showSlides(slideIndex = t);
}

function showSlides(t) {
  var i;
  var slides = 
document.getElementsByClassName("mySlides");
  var indicadores = document.getElementsByClassName("indicador");
  if (t > slides.length) {slideIndex = 1}    
  if (t < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < indicadores.length; i++) {
    indicadores[i].className = indicadores[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  indicadores[slideIndex-1].className += " active";
}