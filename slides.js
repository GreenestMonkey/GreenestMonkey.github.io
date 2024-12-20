let totSlides = document.getElementsByClassName("mySlides");
let slideIndex = Math.floor(Math.random() * totSlides.length);
autoShowSlides();
let slideTimer = setTimeout(autoShowSlides, 30000);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  clearTimeout(slideTimer);
  slideTimer = setTimeout(autoShowSlides, 30000);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
  clearTimeout(slideTimer);
  slideTimer = setTimeout(autoShowSlides, 30000);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
} 


function autoShowSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  slideTimer = setTimeout(autoShowSlides, 30000); // Change image every 2 seconds
}
