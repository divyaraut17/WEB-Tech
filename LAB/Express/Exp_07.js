const express = require("express");
const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log("Request received", new Date().toLocaleString());
  next();
});

const user = [
  { id: 1, name: "Divya", email: "divya@gmail.com" },
  { id: 2, name: "Sayma", email: "sayma@gmail.com" },
  { id: 3, name: "Poorva", email: "poorva@gmail.com" },
  { id: 4, name: "Shruti", email: "shruti@gmail.com" },
  { id: 5, name: "Saniya", email: "saniya@gmail.com" },
];

app.get("/user", (req, res) => {
  res.json(user);
});

app.get("/user/:id", (req, res) => {
  const userId = Number(req.params.id);   
  console.log("Requested ID:", userId);

  const userById = user.find(u => u.id === userId);

  if (userById) {
    res.json(userById);
  } else {
    res.status(404).json({ message: "User not found" }); 
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});