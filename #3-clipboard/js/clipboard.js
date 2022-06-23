const copyBtn = document.querySelector("#copy-btn");
const copyText = document.querySelector("#copy-text");

copyBtn.addEventListener("click", (e) => {
  copyText.select(); // select text field

  navigator.clipboard.writeText(copyText.value); // copy

  let tooltip = e.target.nextElementSibling.firstElementChild;
  tooltip.textContent = "Copied to clipboard";
});

copyBtn.addEventListener("mouseenter", (e) => {
  let tooltip = e.target.nextElementSibling.firstElementChild;
  tooltip.textContent = "Click to copy";
  tooltip.classList.remove("visually-hidden");
});

copyBtn.addEventListener("mouseleave", (e) => {
  let tooltip = e.target.nextElementSibling.firstElementChild;
  tooltip.classList.add("visually-hidden");
});
