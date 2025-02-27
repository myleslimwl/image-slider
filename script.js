// image slider

const slides = document.querySelectorAll('.slides img');
let slideIndex = 0;
let intervalID = null;

document.addEventListener('DOMContentLoaded', initializeSlider);

function initializeSlider(){
  slides[slideIndex].style.display = 'block';

  if (slides.length > 0){
    intervalID = setInterval(nextSlide, 3000);
  }
}

function prevSlide(){

}

function nextSlide(){

}