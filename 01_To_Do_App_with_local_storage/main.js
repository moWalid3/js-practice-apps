//
let textInp = document.querySelector(".text");
let myTasksLocalStorage = new Map();

if (localStorage.getItem("tasks") != undefined) {
  myTasksLocalStorage = new Map(JSON.parse(localStorage.getItem("tasks")));
  for (content of myTasksLocalStorage) {
    if (content[1] == false) {
      addTask(content[0]);
    } else {
      addDoneTask(content[0]);
    }
  }
  checkToDelete();
  checkToDone();
}

document.forms[0].onsubmit = (e) => {
  e.preventDefault();
  if (textInp.value !== "") {
    addTask(textInp.value);
    myTasksLocalStorage.set(textInp.value, false);
    localStorage.setItem(
      "tasks",
      JSON.stringify(Array.from(myTasksLocalStorage))
    );
  }

  textInp.value = "";

  checkToDelete();
  checkToDone();
};

function checkToDelete() {
  let deleteBtns = document.querySelectorAll(".delete");
  deleteBtns.forEach((ele) => {
    ele.addEventListener("click", () => {
      myTasksLocalStorage.delete(
        ele.parentElement.previousElementSibling.innerHTML
      );
      localStorage.setItem(
        "tasks",
        JSON.stringify(Array.from(myTasksLocalStorage))
      );
      ele.parentElement.parentElement.remove();
    });
  });
}

function checkToDone() {
  let doneBtns = document.querySelectorAll("#done");
  doneBtns.forEach((ele) => {
    ele.addEventListener("click", (event) => {
      event.preventDefault();
      myTasksLocalStorage.set(
        ele.parentElement.previousElementSibling.innerHTML,
        true
      );

      localStorage.setItem(
        "tasks",
        JSON.stringify(Array.from(myTasksLocalStorage))
      );

      addDoneTask(ele.parentElement.previousElementSibling.innerHTML);
      ele.parentElement.parentElement.remove();

      checkToDelete();
    });
  });
}

function addTask(content) {
  let tasksNotDone = document.querySelector(".tasks .not-done-container");
  tasksNotDone.innerHTML += `
  <div class="task">
    <span>${content}</span>
    <div class="btns">
      <button id="done">Done</button>
      <button class="delete">Delete</button>
    </div>
  </div>
  `;
}
function addDoneTask(content) {
  let tasksDone = document.querySelector(".tasks .done-container");
  tasksDone.innerHTML += `
  <div class="task done">
    <span>${content}</span>
    <div class="btns">
      <button id="done">Done</button>
      <button class="delete">Delete</button>
    </div>
  </div>
  `;
}
