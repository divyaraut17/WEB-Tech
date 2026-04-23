export function loadNotes() {
  const note = localStorage.getItem("notes");
  if (note) {
    document.getElementById("noteInput").value = note;
  }
}

export function saveNotes() {
  const value = document.getElementById("noteInput").value;
  localStorage.setItem("notes", value);
}