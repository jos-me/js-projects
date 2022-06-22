const colorSpan = document.querySelector(".color");

// Simple Color Flipper
const btnSimple = document.querySelector("#btnSimple");
btnSimple.addEventListener("click", simpleColorFlipper);

function simpleColorFlipper() {
  const colors = ["salmon", "plum", "mistyrose", "burlywood"];
  const randomNumber = getRandomNumber(colors);

  colorManager(colors[randomNumber]);
}

// Hexadecimal Color Flipper
const btnHex = document.getElementById("btnHex");
btnHex.addEventListener("click", hexColorFlipper);

function hexColorFlipper() {
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber(hex)];
  }

  colorManager(hexColor);
}

// Random Number Generator
const getRandomNumber = (max) => Math.floor(Math.random() * max.length);

//
function colorManager(color) {
  document.body.style.backgroundColor = color;
  colorSpan.textContent = color;
  colorSpan.style.color = color;
}
