window.addEventListener('DOMContentLoaded', (event) => {
  updateForm(form);
  
});

counter = 0;
const form = document.querySelector("#create-task-form");
const todoList = document.getElementById("tasks");

// (e.g. user, duration, date due)
function updateForm(form) {
  form.remove();
  const main = document.querySelector("#main-content");
  const formData = document.createElement('form');
  formData.id = "create-task-form";
  formData.method = "post";
  
  const newForm = 
  `<br>
  <form id="create-task-form" action="#" method="post">
    <label for="new-user-name">User name:</label>
    <input type="text" id="new-user-name" name="new-user-name" placeholder="User name"><br>
    <label for="new-task-name">Task name:</label>
    <input type="text" id="new-task-name" name="new-task-name" placeholder="Task name"><br>
    <label for="new-task-description">Task description:</label>
    <input type="text" id="new-task-description" name="new-task-description" placeholder="description"><br>
    <label for="new-task-duration">Task duration:</label>
    <input type="text" id="new-task-duration" name="new-task-duration" placeholder="duration"><br>
    <label for="new-task-date-due">Task date due:</label>
    <input type="date" id="new-task-date-due" name="new-task-date-due" placeholder="date due"><br>
    <center><input type="submit" id="form-submit" value="Create New Task"></center>
  </form>`

  formData.innerHTML = newForm;
  main.firstElementChild.appendChild(formData);
};

document.addEventListener("submit", function(event) {
  event.preventDefault();
  let count = counter += 1;
  let taskUser = document.getElementById("new-user-name").value;
  let taskName = document.getElementById("new-task-name").value;
  let taskDescription = document.getElementById("new-task-description").value;
  let taskDuration = document.getElementById("new-task-duration").value;
  let taskDateDue = document.getElementById("new-task-date-due").value;
  const br = document.createElement("break");
  const lineItem = document.createElement("li");
  const newLi = todoList.appendChild(lineItem);
  newLi.innerText = taskUser;
  newLi.id = `task-user-${count}`;
  const p1 = document.createElement("p");
  newLi.appendChild(p1);
  p1.innerHTML = taskName + "<br>";
  p1.id = `task-name-${count}`;
  const p2 = document.createElement("p");
  p1.appendChild(p2);
  p2.innerHTML = taskDescription + "<br>";
  p2.id = `description-${count}`;
  const p3 = document.createElement("p");
  p2.appendChild(p3);
  p3.innerHTML = taskDuration + "<br>";
  p3.id = `duration-${count}`;
  const p4 = document.createElement("p");
  p3.appendChild(p4);
  p4.innerHTML = taskDateDue + "<br><br>";
  p4.id = `date-due-${count}`;
  // another way to accomplish this is:
  // todoList.innerHTML += `<li> ${listItem} </li>`
  // on one line
  const span = document.createElement("span");
  span.id = `task-span-${count}`
  p4.append(span);
  span.innerHTML += ' <button data-action="edit-task"> ✂ Edit </button>';
  span.innerHTML += ' <button data-action="delete-task"> x Delete </button>';
  span.innerHTML += ' <button data-action="done-task"> &#9744; Incomplete</button>';

  span.appendChild(br);
  // but this isn't best practice b/c of security issues
  const form = document.querySelector("#create-task-form");
  form.reset();
});

todoList.addEventListener("click", function(event) {
  if (event.target.dataset.action === "delete-task") {
    event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
  }
  if (event.target.dataset.action === "done-task") {
    if (event.target.outerHTML === "<button data-action=\"done-task\"> ☐ Incomplete</button>") {
      event.target.outerHTML = ' <button data-action="done-task"> &#9745; Complete</button>';  
    }
    else {
      event.target.outerHTML = ' <button data-action="done-task"> &#9744; Incomplete</button>'
    }
  }
  if (event.target.dataset.action === "edit-task") {
    editForm(event);
  }
});

function editForm(event) {
  const main = document.querySelector("#main-content");
  const formData = document.createElement('form');
  formData.id = "create-task-form";
  formData.method = "post";
  const task = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id;
  debugger;

  let taskUserValue = document.getElementById("new-user-name").value;
  let taskNameValue = document.getElementById("new-task-name").value;
  let taskDescriptionValue = document.getElementById("new-task-description").value;
  let taskDurationValue = document.getElementById("new-task-duration").value;
  let taskDateDueValue = document.getElementById("new-task-date-due").value;
  
  const editForm = 
  `<br>
  <form id="create-task-form" action="#" method="post">
    <label for="new-user-name">User name:</label>
    <input type="text" id="new-user-name" name="new-user-name" placeholder="User name"><br>
    <label for="new-task-name">Task name:</label>
    <input type="text" id="new-task-name" name="new-task-name" placeholder="Task name"><br>
    <label for="new-task-description">Task description:</label>
    <input type="text" id="new-task-description" name="new-task-description" placeholder="description"><br>
    <label for="new-task-duration">Task duration:</label>
    <input type="text" id="new-task-duration" name="new-task-duration" placeholder="duration"><br>
    <label for="new-task-date-due">Task date due:</label>
    <input type="date" id="new-task-date-due" name="new-task-date-due" placeholder="date due"><br>
    <center><input type="submit" id="form-submit" value="Create New Task"></center>
  </form>`

  formData.innerHTML = newForm;
  main.firstElementChild.appendChild(formData);
};
// A priority value selected from a dropdown that is used to determine 
// the color of the text in the list (e.g. red for high priority, yellow 
//   for medium, green for low)
// As a challenge, implement a sorting functionality that displays the 
// tasks ascending or descending order based on priority