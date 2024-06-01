//
let sliderImages = Array.from(document.querySelectorAll("img"));
let slidesCount = sliderImages.length;
let currentSlide = 1;
let slideNumberElement = document.querySelector(".slide-number");
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

let ulList = document.createElement("ul");
function createIndicatorsList() {
  for (let i = 0; i < slidesCount; i++) {
    let li = document.createElement("li");
    li.append(document.createTextNode(i + 1));
    li.setAttribute("data-index", i + 1);
    ulList.append(li);
  }
  document.querySelector(".indicators").append(ulList);
}
createIndicatorsList();

ulList.childNodes.forEach((li) => {
  li.onclick = () => {
    currentSlide = +li.dataset.index;
    checker();
  };
});

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

function nextSlide() {
  currentSlide++;
  checker();
}

function prevSlide() {
  currentSlide--;
  checker();
}

checker();
function checker() {
  sliderImages.forEach((ele) => ele.classList.remove("active"));
  ulList.childNodes.forEach((ele) => ele.classList.remove("active"));

  slideNumberElement.textContent = `Slide #${currentSlide} of ${slidesCount}`;
  sliderImages[currentSlide - 1].classList.add("active");
  ulList.childNodes[currentSlide - 1].classList.add("active");

  checkDisabled();
}

function checkDisabled() {
  if (currentSlide === 1) {
    prevBtn.classList.add("disabled");
    prevBtn.setAttribute("disabled", "");
  } else {
    prevBtn.classList.remove("disabled");
    prevBtn.removeAttribute("disabled", "");
  }
  if (currentSlide === slidesCount) {
    nextBtn.classList.add("disabled");
    nextBtn.setAttribute("disabled", "");
  } else {
    nextBtn.classList.remove("disabled");
    nextBtn.removeAttribute("disabled", "");
  }
}
