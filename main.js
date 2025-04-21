// show/hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", function () {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
  document.body.classList.add("nav-open"); // To make the header section move down when the navbar is opened
});

// close nav menu
closeBtn.addEventListener("click", function () {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
  document.body.classList.remove("nav-open"); //To make the header section move up when the navbar is closed
});

// Alternating Text in the Header Section

const words = ["Emmanuel", "a frontend developer"];
let currentWordIndex = 0;
let charIndex = 0;
const typedText = document.getElementById("typed-text");
let isDeleting = false;

function type() {
  const currentWord = words[currentWordIndex];

  if (!isDeleting) {
    typedText.textContent = currentWord.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    typedText.textContent = currentWord.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      currentWordIndex = (currentWordIndex + 1) % words.length;
    }
  }

  setTimeout(type, isDeleting ? 80 : 120);
}

document.addEventListener("DOMContentLoaded", type);
