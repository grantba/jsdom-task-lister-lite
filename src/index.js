window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
});

const form = document.getElementById("create-task-form");
const todoList = document.getElementById("tasks");

document.addEventListener("submit", function(event) {
  event.preventDefault();
  let listItem = document.getElementById("new-task-description").value;
  const lineItem = document.createElement("li");
  const newLi = todoList.appendChild(lineItem);
  newLi.innerText = listItem;
  // another way to accomplish this is:
  // todoList.innerHTML += `<li> ${listItem} </li>`
  // on one line
  newLi.innerHTML += ' <button data-action="delete-task"> x </button>';
  // but this isn't best practice b/c of security issues
  form.reset();
});

todoList.addEventListener("click", function(event) {
  if (event.target.dataset.action === "delete-task") {
    event.target.parentNode.remove();
  }
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