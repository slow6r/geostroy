function initializeSlider(containerId) {
  const sliderContainer = document.getElementById(containerId);
  const slider = sliderContainer.querySelector(".slider-works");
  const prevButton = sliderContainer.querySelector(".prev-button");
  const nextButton = sliderContainer.querySelector(".next-button");
  const slides = Array.from(slider.querySelectorAll("img"));
  const slideCount = slides.length;
  let slideIndex = 0;

  // Set event listeners for the buttons
  prevButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);

  // Function to show the previous slide
  function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
  }

  // Function to show the next slide
  function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
  }

  // Function to update the slider display
  function updateSlider() {
    slides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });
  }

  // Initialize the slider
  updateSlider();
}

// Initialize each slider separately

initializeSlider("slider-works1");
initializeSlider("slider-works2");
initializeSlider("slider-works3");
initializeSlider("slider-works4");
initializeSlider("slider-works5");
initializeSlider("slider-works6");
initializeSlider("slider-works7");
