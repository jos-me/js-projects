let counterValue = document.querySelector("#counter-value");
let btns = document.querySelectorAll(".btn");

let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.currentTarget.id === "increment") {
      count++;
    } else if (e.currentTarget.id === "decrement") {
      count--;
    } else {
      count = 0;
    }

    counterValue.textContent = count;
    colorFactor(counterValue);
  });
});

function colorFactor(element) {
  if (element.textContent > 0) {
    element.classList.add("text-danger");
    element.classList.replace("text-danger", "text-success");
  } else if (element.textContent < 0) {
    element.classList.add("text-success");
    element.classList.replace("text-success", "text-danger");
  } else {
    element.classList.remove("text-danger");
    element.classList.replace("text-success", "text-secondary");
  }
}
