let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let btn = document.querySelector(".random");

body.style.background = localStorage.getItem("background");
css.textContent = localStorage.getItem("h3");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  localStorage.setItem("background", body.style.background);
  css.textContent = body.style.background + ";";
  localStorage.setItem("h3", css.textContent);
}

function generator() {
  return Math.floor(Math.random() * 256);
}

function randomColor() {
  let r = generator();
  let g = generator();
  let b = generator();
  let r2 = generator();
  let g2 = generator();
  let b2 = generator();
  random = body.style.background =
    "linear-gradient(to right, rgb(" +
    r +
    "," +
    g +
    "," +
    b +
    "), rgb(" +
    r2 +
    "," +
    g2 +
    "," +
    b2 +
    "))";
  localStorage.setItem("background", body.style.background);
  css.textContent = body.style.background + ";";
  localStorage.setItem("h3", css.textContent);
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener("click", randomColor);
