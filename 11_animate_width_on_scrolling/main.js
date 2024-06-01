//

let allSpans = document.querySelectorAll("span");

let section3 = document.querySelector(".section3");

window.onscroll = () => {
  if (window.scrollY >= section3.offsetTop - 300) {
    allSpans[0].style.width = "50%";
    allSpans[1].style.width = "70%";
    allSpans[2].style.width = "90%";
  }
};
