const path = require('path');

const express = require('express');

const app = express();

// middleware
app.use(express.json());

app.use(express.static(path.join(__dirname, 'Public')));

// test route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'register.html'));
});

// temporary user storage
let users = [];

// REGISTER
app.post('/register', (req, res) => {
    const { email, password } = req.body;
    users.push({ email, password });
    res.json({ msg: "User registered successfully" });
});

// LOGIN
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        res.json({ msg: "Login successful" });
    } else {
        res.status(401).json({ msg: "Invalid credentials" });
    }
});
// temporary event storage
let events = [];

// ADD EVENT
app.post('/add-event', (req, res) => {
    const { title, date, location, organizer, description, seats } = req.body;

    const newEvent = {
        id: Date.now(), // unique id
        title,
        date,
        location,
        organizer,
        description,
        seats
    };

    events.push(newEvent);

    res.json({ msg: "Event added successfully" });
});

// GET EVENTS
app.get('/events', (req, res) => {
    res.json(events);
});

// DELETE EVENT
app.delete('/delete-event/:id', (req, res) => {
    const id = parseInt(req.params.id);

    events = events.filter(e => e.id !== id);

    res.json({ msg: "Event deleted" });
});

// start server (keep this at end)
app.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});