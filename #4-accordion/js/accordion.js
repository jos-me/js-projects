const headers = document.querySelectorAll(".accord-header");
const bodies = document.querySelectorAll(".accord-body");

headers.forEach((header) => {
  header.addEventListener("click", (e) => {
    bodies.forEach((body) => {
      if (
        e.target.nextElementSibling !== body &&
        body.classList.contains("active")
      ) {
        body.classList.remove("active");
        headers.forEach((header) => header.classList.remove("active"));
      }
    });

    const panel = header.nextElementSibling;
    panel.classList.toggle("active");
    header.lastElementChild.classList.toggle("active");
  });
});

window.onclick = (e) => {
  if (!e.target.matches(".accord-header")) {
    headers.forEach((header) => header.classList.remove("active"));
    bodies.forEach((body) => body.classList.remove("active"));
  }
};