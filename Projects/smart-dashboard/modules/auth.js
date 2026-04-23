export function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Please enter username & password");
    return;
  }

  // Fake validation
  if (password !== "1234") {
    alert("Wrong password (try 1234)");
    return;
  }

  localStorage.setItem("user", username);
  showDashboard();
}

export function logout() {
  localStorage.removeItem("user");
  location.reload();
}

export function checkUser() {
  const user = localStorage.getItem("user");

  if (user) {
    showDashboard();
  }
}

function showDashboard() {
  document.getElementById("login-section").style.display = "none";
  document.getElementById("dashboard").style.display = "block";
}