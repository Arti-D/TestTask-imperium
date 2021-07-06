const slides = document.getElementsByClassName("about__img");
let index = 0;

// вызов функции при маленьком разрешении

const mediaQuery = window.matchMedia("screen and (max-width: 767px)");
mediaQuery.addListener(doShowSlides);
doShowSlides(mediaQuery);

function doShowSlides(mq) {
    if(mq.matches) {
        showSlide(index);
    }
}

const mediaQueryOne = window.matchMedia("screen and (min-width: 768px)");
mediaQueryOne.addListener(doGrid)
doGrid(mediaQueryOne)
function doGrid(mq){
    if(mq.matches) {
        for (let slide of slides) {
            slide.style.display = "block";
          }
    }
}

// фун
function showSlide(n) {
  if (n > slides.length) {
    index = 1;
  }
  if (n < 1) {
    index = slides.length;
  }
  for (let slide of slides) {
    slide.style.display = "none";
  }
  slides[index - 1].style.display = "block";
}

function nextSlide() {
  index += 1;
  showSlide(index);
}

function prevSlide() {
  index -= 1;
  showSlide(index);
}

const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");
btnNext.addEventListener("click", nextSlide);
btnPrev.addEventListener("click", prevSlide);
