// JavaScript for photo slideshow
var slides = [
  "../img/pexels-karen-irala-242489519-13978142.jpg",
  "../img/pexels-ella-olsson-572949-1640771.jpg",
  "../img/back 1.jpg",
]; //  image paths
var currentSlide = 0;

function changeSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  document.querySelector(".hero-slide").style.backgroundImage =
    "url(" + slides[currentSlide] + ")";
}

setInterval(changeSlide, 6000); // Change slide every 6 seconds
