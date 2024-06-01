//

let openBtn = document.querySelector(".open-btn");
let closeBtn = document.querySelector(".close-btn");

openBtn.onclick = () => {
  openBtn.nextElementSibling.style.transform = "translateY(0)";
};
closeBtn.onclick = () => {
  closeBtn.parentElement.style.transform = "translateY(-110%)";
};

document.onkeyup = (e) => {
  if (e.key === "Escape") {
    closeBtn.parentElement.style.transform = "translateY(-110%)";
  }
};
