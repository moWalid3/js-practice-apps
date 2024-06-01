//

//

//document.documentElement.scrollTop === scrollY

let div = document.querySelector("div");
let hight =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.onscroll = () => {
  let scrollTop = document.documentElement.scrollTop;
  div.style.width = `${(scrollTop / hight) * 100}%`;
};
