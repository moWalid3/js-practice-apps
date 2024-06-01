//

let inp = document.querySelector("input");
let count = document.querySelector(".count");
let progress = document.querySelector(".progress");
let maxLength = inp.getAttribute("maxlength");

inp.oninput = () => {
  count.innerHTML = maxLength - inp.value.length;
  if (count.innerHTML == 0) {
    count.classList.add("zero");
  } else {
    count.classList.remove("zero");
  }
  progress.style.width = `${(inp.value.length / maxLength) * 100}%`;
  progress.style.width === "100%"
    ? (progress.style.backgroundColor = "#cc0000")
    : (progress.style.backgroundColor = "#449d44");
};
