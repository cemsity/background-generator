let css = document.querySelector(".cssCode");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.querySelector("body");

setGradient = () => {
  body.style.background =
  "Linear-gradient(to right,"
  + color1.value
  + ", "
  + color2.value
  + ")"

  css.textContent = body.style.background + ";"
};

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
