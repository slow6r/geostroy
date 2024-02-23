let currentSlide = 0;
const totalSlides = document.querySelectorAll(".bar").length;
const slideContainer = document.querySelector(".slides");

function changeSlide(index) {
  currentSlide = index;
  updateSlider();
  updateNavigationStyle();
}

function updateSlider() {
  const slideWidth = 100 / totalSlides;
  const translateValue = -currentSlide * slideWidth;
  slideContainer.style.transform = `translateX(${translateValue}%)`;
}

function autoChangeSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
  updateNavigationStyle();
}

function updateNavigationStyle() {
  document.querySelectorAll(".bar").forEach((bar, index) => {
    if (index === currentSlide) {
      bar.classList.add("active");
    } else {
      bar.classList.remove("active");
    }
  });
}

function handleLabelHover(index) {
  const label = document.querySelector(`#r${index + 1}`);
  label.classList.add("active");
}

function handleLabelOut(index) {
  const label = document.querySelector(`#r${index + 1}`);
  label.classList.remove("active");
}

setInterval(autoChangeSlide, 4000);

document.addEventListener("DOMContentLoaded", () => {
  updateNavigationStyle();
});

//копирование

function copyToClipboard(text) {
  var input = document.createElement("input");
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
  alert("Скопировано в буфер обмена: " + text);
}

//якорь

document.addEventListener("DOMContentLoaded", function () {
  // Обработка клика по якорю
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      // Находим целевой элемент
      const targetElement = document.querySelector(this.getAttribute("href"));

      // Плавно прокручиваем к целевому элементу
      window.scrollTo({
        top: targetElement.offsetTop - 100, // Вы можете настроить смещение по вертикали
        behavior: "smooth",
      });
    });
  });
});
