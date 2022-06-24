// https://pravatar.cc/

const reviews = [
  {
    id: 1,
    author: "Jane Smitch",
    title: "UI Designer",
    img: "image-1.jpg",
    comment:
      "Adipisicing veritatis est commodi, deleniti aut harum doloribus cupiditate quia liberocupiditate earum consequuntur solutaest commodi aut liberocupiditate",
  },
  {
    id: 2,
    author: "John Doe",
    title: "Tech Writer",
    img: "image-2.jpg",
    comment:
      "Harum doloribus cupiditate quia liberocupiditate.Adipisicing veritatis est commodi, deleniti aut earum consequuntur solutaest commodi aut liberocupiditate",
  },
  {
    id: 3,
    author: "Sara Kipenyo",
    title: "Java Developer",
    img: "image-3.jpg",
    comment:
      "Liberocupiditate earum consequuntur solutaest commodi aut liberocupiditate. Adipisicing veritatis est commodi, deleniti aut harum doloribus cupiditate quia",
  },
];

const image = document.querySelector("#image");
const author = document.querySelector("#author");
const title = document.querySelector("#title");
const comment = document.querySelector("#comment");

const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");

blinks = document.querySelectorAll("#blink");

let currentItem = 1;

window.addEventListener("DOMContentLoaded", () => {
  showReview();
  showNotifier();
});

btnNext.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showReview();
  showNotifier();
});

btnPrev.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showReview();
  showNotifier();
});

function showReview() {
  let item = reviews[currentItem];
  image.src = item.img;
  author.textContent = item.author;
  title.textContent = item.title;
  comment.textContent = item.comment;
}

function showNotifier() {
  blinks.forEach((blink, index) => {
    blink.classList.remove("current");

    if (index == currentItem) {
      blink.classList.add("current");
    }
  });
}
