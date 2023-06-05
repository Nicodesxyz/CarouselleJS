// Select all slides
const slides = document.querySelectorAll(".slide");

// Loop through slides and set each slide's translateX property to index * 100%
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// Current slide counter
let curSlide = 0;
// Maximum number of slides
const maxSlide = slides.length - 1;

// Select next slide button
const nextSlide = document.querySelector(".btn-next");

// Add event listener and next slide functionality
nextSlide.addEventListener("click", function () {
  curSlide = (curSlide + 1) % slides.length;

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// Select prev slide button
const prevSlide = document.querySelector(".btn-prev");

// Add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  curSlide = (curSlide - 1 + slides.length) % slides.length;

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});
