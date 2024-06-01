//
let generateEl = document.querySelector(".generate");

generateEl.onclick = () => {
  let chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  let res = "";

  for (let i = 0; i < 6; i++) {
    res += chars[Math.trunc(Math.random() * chars.length)];
  }

  document.body.style.backgroundColor = "#" + res;
};
