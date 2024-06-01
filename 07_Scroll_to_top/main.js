let btn = document.querySelector("button");

window.onscroll = () => {
  scrollY > 500 ? btn.classList.add("show") : btn.classList.remove("show");
};

btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
