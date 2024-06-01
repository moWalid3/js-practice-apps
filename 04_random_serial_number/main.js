let serialEl = document.querySelector(".serial");
let generateEl = document.querySelector(".generate");

generateEl.onclick = () => {
  let chars = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let count = 10;
  let res = "";

  for (let i = 0; i < count; i++) {
    res += chars[Math.trunc(Math.random() * chars.length)];
  }
  serialEl.innerHTML = res;
};
