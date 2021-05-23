window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
});

document.addEventListener("submit", (event) => {
  event.preventDefault();
  let listItem = document.getElementById("new-task-description").value;
  const todoList = document.getElementById("tasks");
  const lineItem = document.createElement("li");
  let newLi = todoList.appendChild(lineItem);
  newLi.innerText = listItem;
  listItem.reset;
});

// document.addEventListener("DOMContentLoaded", () => {
//   //grab all the necessary DOM elements

//   //form and relevant input fields
//   const newTaskForm = document.getElementById("create-task-form");
//   const newTaskDescription = document.getElementById("new-task-description");
//   const newTaskPriority = document.getElementById("new-task-priority");

//   //ul where new tasks will live on the DOM
//   const newTaskUl = document.getElementById("tasks");

//   //attach event listeners
//   newTaskForm.addEventListener("submit", createNewTask);
// });

// const createNewTask = event => {
//   event.preventDefault();
//   //stop form from trying to submit
//   const newTaskDescription = document.getElementById("new-task-description");
//   const newTask = document.createElement("li");
//   newTask.innerText = newTaskDescription.value;

//   appendNewTask(newTask);
//   event.target.reset();
// };

// const appendNewTask = task => {
//   document.getElementById("tasks").appendChild(task);
// };