// image slider

const slides = document.querySelectorAll('.slides img');
let slideIndex = 0;
let intervalID = null;

document.addEventListener('DOMContentLoaded', initializeSlider);

function initializeSlider(){
  slides[slideIndex].style.display = 'block';

  if (slides.length > 0){
    slides[slideIndex].classList.add('displaySlide');
    intervalID = setInterval(nextSlide, 3000);
  }
}

function prevSlide(){
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide(){
  slideIndex++;
  showSlide(slideIndex);
}

function showSlide(index){

  slides.forEach(slide => {
    slide.classList.remove('displaySlide');
  });

  slides[index].classList.add('displaySlide');
}