//

let allSpans = document.querySelectorAll("span");
let section3 = document.querySelector(".section3");

let started = false; // because the function work only one time

window.onscroll = () => {
  if (window.scrollY >= section3.offsetTop - 300) {
    if (!started) {
      allSpans.forEach((ele) => startCount(ele));
      started = true;
    }
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 1000 / goal); // so the all spans spend 1s
}
