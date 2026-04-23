import { login, logout, checkUser } from "./modules/auth.js";

document.getElementById("loginBtn").addEventListener("click", login);
document.getElementById("logoutBtn").addEventListener("click", logout);

// Check user on load
checkUser();

import { addTask, loadTasks } from "./modules/tasks.js";

document.getElementById("addTask").addEventListener("click", addTask);

loadTasks();

import { loadNotes, saveNotes } from "./modules/notes.js";
loadNotes();
document.getElementById("noteInput").addEventListener("input", saveNotes);

const noteInput = document.getElementById("noteInput");

noteInput.addEventListener("input", () => {
  noteInput.style.height = "auto";
  noteInput.style.height = noteInput.scrollHeight + "px";
});

import { getWeather } from "./modules/weather.js";
document.getElementById("getWeather").addEventListener("click", getWeather);

import { addExpense, updateTotal } from "./modules/expense.js";

document.getElementById("addExpense").addEventListener("click", addExpense);

updateTotal();