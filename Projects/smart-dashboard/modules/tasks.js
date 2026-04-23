// 🔐 Get current user
function getUser() {
  return localStorage.getItem("user");
}

// 📦 Get tasks
function getTasks() {
  const user = getUser();
  return JSON.parse(localStorage.getItem("tasks_" + user)) || [];
}

// 💾 Save tasks
function saveTasks(tasks) {
  const user = getUser();
  localStorage.setItem("tasks_" + user, JSON.stringify(tasks));
}

export function addTask() {
  const text = document.getElementById("taskInput").value.trim();
  const date = document.getElementById("dueDate").value;
  const priority = document.getElementById("priority").value;

  if (!text) return;

  const tasks = getTasks();

  tasks.push({
    text,
    date,
    priority,
    completed: false
  });

  saveTasks(tasks);

  document.getElementById("taskInput").value = "";
  loadTasks();
}

export function loadTasks() {
  const tasks = getTasks();
  const list = document.getElementById("taskList");

  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    // Drag
    li.draggable = true;
    li.ondragstart = () => dragIndex = index;
    li.ondrop = () => dropTask(index);
    li.ondragover = (e) => e.preventDefault();

    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.onchange = () => toggleTask(index);

    // Text
    const span = document.createElement("span");
    span.innerHTML = `
      ${task.text} <br>
      📅 ${task.date || "No date"} 
      🔴 ${task.priority}
    `;

    if (task.completed) {
      span.style.textDecoration = "line-through";
    }

    // Delete
    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.onclick = () => deleteTask(index);

    // ✏️ Edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "✏️";
    editBtn.onclick = () => editTask(index);

     li.appendChild(checkbox);
     li.appendChild(span);
     li.appendChild(editBtn);  
     li.appendChild(delBtn);
    list.appendChild(li);
  });
}
let dragIndex;

function dropTask(index) {
  const tasks = getTasks();

  const temp = tasks[dragIndex];
  tasks[dragIndex] = tasks[index];
  tasks[index] = temp;

  saveTasks(tasks);
  loadTasks();
}

// ✔ Toggle complete
function toggleTask(index) {
  const tasks = getTasks();
  tasks[index].completed = !tasks[index].completed;

  saveTasks(tasks);
  loadTasks();
}

//edit task
function editTask(index) {
  const tasks = getTasks();

  const newText = prompt("Edit task:", tasks[index].text);
  const newDate = prompt("Edit date (YYYY-MM-DD):", tasks[index].date);
  const newPriority = prompt("Edit priority (High/Low):", tasks[index].priority);

  if (newText !== null && newText.trim() !== "") {
    tasks[index].text = newText.trim();
    tasks[index].date = newDate;
    tasks[index].priority = newPriority;
  }

  saveTasks(tasks);
  loadTasks();
}

// ❌ Delete task
function deleteTask(index) {
  const tasks = getTasks();
  tasks.splice(index, 1);

  saveTasks(tasks);
  loadTasks();
}