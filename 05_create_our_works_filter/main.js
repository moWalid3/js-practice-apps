//
//

let categories = document.querySelectorAll("li");
let imgs = document.querySelectorAll("img");

categories.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    categories.forEach((ele) => {
      ele.classList.remove("active");
    });
    ele.classList.add("active");

    imgs.forEach((img) => {
      img.style.display = "block";
    });
    imgs.forEach((img) => {
      if (ele.dataset.cat === undefined) {
        img.style.display = "block";
      } else if (!img.classList.contains(ele.dataset.cat)) {
        img.style.display = "none";
      }
    });
  });
});
