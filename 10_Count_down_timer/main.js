//
let day = document.querySelector(".day .number");
let hour = document.querySelector(".hour .number");
let minute = document.querySelector(".minute .number");
let second = document.querySelector(".second .number");

let finalDate = document.querySelector(".final-date").getAttribute("data-date");

// setInterval(() => {
//   let dateNext = new Date(finalDate);
//   let dateNow = new Date();

//   let diffDate = new Date(dateNext - dateNow);

//   second.innerHTML =
//     diffDate.getSeconds() < 10
//       ? `0${diffDate.getSeconds()}`
//       : diffDate.getSeconds();

//   minute.innerHTML =
//     diffDate.getMinutes() < 10
//       ? `0${diffDate.getMinutes()}`
//       : diffDate.getMinutes();

//   hour.innerHTML =
//     diffDate.getHours() < 10 ? `0${diffDate.getHours()}` : diffDate.getHours();

//   day.innerHTML =
//     diffDate.getDate() < 10 ? `0${diffDate.getDate()}` : diffDate.getDate();
// }, 1000);

// ******

let counter = setInterval(() => {
  // Get Date .Now
  let dateNow = new Date().getTime();
  let dateNext = new Date(finalDate).getTime();

  // Find .The .Date .Difference Between . Now . And. Countdown .Date
  let dateDiff = dateNext - dateNow;

  //.Get Time .Units
  //let days .= Math.floor(dateDiff /1000 /60 /.60/24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  day.innerHTML = days < 10 ? `0${days}` : days;
  hour.innerHTML = hours < 10 ? `0${hours}` : hours;
  minute.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  second.innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);
