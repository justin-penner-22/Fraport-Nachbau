/*Dropdown International*/
function dropdownInternational() {
  document.getElementById("mydropdown-international").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropdown")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let opendropdown = dropdowns[i];
      if (opendropdown.classList.contains("show")) {
        opendropdown.classList.remove("show");
      }
    }
  }
};

/*Dropdown Footer*/
function dropdownContact() {
  let x = document.getElementById("mydropdown-contact");
  x.classList.toggle("active");
}

/*Dropdown Nav*/
function myFunktionNav() {
  document.getElementById("mydropdown-nav").classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches(".dropa")) {
    let dropdowns = document.getElementsByClassName("dropdown-content-nav");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

/* Slider */
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("info-slider-box");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
