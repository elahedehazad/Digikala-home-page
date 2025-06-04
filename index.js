// slider
let slideIndex = 0;
showSlides();
function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].style.display = "block";

    dots[slideIndex - 1].classList.add("active");

    setTimeout(showSlides, 4000);
}

function plusSlides(n) {
    showSlidesManually(slideIndex += n);
}

function currentSlide(n) {
    showSlidesManually(slideIndex = n);
}

function showSlidesManually(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }


    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[slideIndex - 1].style.display = "block";

    dots[slideIndex - 1].classList.add("active");
}

let Btn = document.querySelector('.slideshow-container');
let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');

Btn.addEventListener('mouseout', () => {
    prevBtn.classList.remove('button-on');
    nextBtn.classList.remove('button-on');
});

Btn.addEventListener('mouseover', () => {
    prevBtn.classList.add('button-on');
    nextBtn.classList.add('button-on');
});const swiperEl = document.querySelector('swiper-container');

swiperEl.addEventListener('swiperinit', function () {
  swiperEl.swiper.params.slidesPerView = 'auto'; // مهم
  swiperEl.swiper.params.spaceBetween = 10;
  swiperEl.swiper.params.freeMode = true; // برای اسکرول آزاد به چپ و راست
  swiperEl.swiper.update();

  let appendNumber = 4;
  let prependNumber = 1;

  document.querySelector(".prepend-2-slides").addEventListener("click", function (e) {
    e.preventDefault();
    swiperEl.swiper.prependSlide([
      '<swiper-slide>Slide ' + --prependNumber + "</swiper-slide>",
      '<swiper-slide>Slide ' + --prependNumber + "</swiper-slide>",
    ]);
  });

  document.querySelector(".prepend-slide").addEventListener("click", function (e) {
    e.preventDefault();
    swiperEl.swiper.prependSlide(
      '<swiper-slide>Slide ' + --prependNumber + "</swiper-slide>"
    );
  });

  document.querySelector(".append-slide").addEventListener("click", function (e) {
    e.preventDefault();
    swiperEl.swiper.appendSlide(
      '<swiper-slide>Slide ' + ++appendNumber + "</swiper-slide>"
    );
  });

  document.querySelector(".append-2-slides").addEventListener("click", function (e) {
    e.preventDefault();
    swiperEl.swiper.appendSlide([
      '<swiper-slide>Slide ' + ++appendNumber + "</swiper-slide>",
      '<swiper-slide>Slide ' + ++appendNumber + "</swiper-slide>",
    ]);
  });
});

