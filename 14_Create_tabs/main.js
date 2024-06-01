let allBtns = document.querySelectorAll("button");
let myP = document.querySelector("p");
let myInfoData = {
  one: "1.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptate ea, vel doloremque reiciendis rem esse corrupti itaque quos voluptatibus minus ut ipsam, odio debitis molestiae, voluptas incidunt inventore modi!",
  two: "2.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptate ea, vel doloremque reiciendis rem esse corrupti itaque quos voluptatibus minus ut ipsam, odio debitis molestiae, voluptas incidunt inventore modi!",
  three:
    "3.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptate ea, vel doloremque reiciendis rem esse corrupti itaque quos voluptatibus minus ut ipsam, odio debitis molestiae, voluptas incidunt inventore modi!",
};
allBtns.forEach((ele) => {
  ele.addEventListener("click", (event) => {
    allBtns.forEach((ele) => {
      ele.classList.remove("clicked");
    });
    myP.innerHTML = myInfoData[ele.dataset.num];
    ele.classList.add("clicked");
  });
});
