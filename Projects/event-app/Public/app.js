async function register() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    alert(data.msg);

    // ✅ Redirect to login page
    window.location.href = "login.html";
}

async function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.status === 200) {
        alert(data.msg);

        window.location.href = "dashboard.html";
    } else {
        alert(data.msg);
    }
}
async function addEvent() {
    const event = {
        title: document.getElementById("title").value,
        date: document.getElementById("date").value,
        location: document.getElementById("location").value,
        organizer: document.getElementById("organizer").value,
        description: document.getElementById("description").value,
        seats: document.getElementById("seats").value
    };

    const res = await fetch('/add-event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event)
    });

    const data = await res.json();
    alert(data.msg);
}

// LOAD EVENTS
async function loadEvents() {
    const res = await fetch('/events');
    const data = await res.json();

    displayEvents(data);
}

function displayEvents(events) {
    const list = document.getElementById("eventList");
    list.innerHTML = "";

    events.forEach(e => {
        const div = document.createElement("div");
        div.className = "event";

        div.innerHTML = `
            <b>${e.title}</b> (${e.date}) <br>
             ${e.location} <br>
             ${e.organizer} <br>
             ${e.description} <br>
             Seats: ${e.seats} <br>
            <button onclick="deleteEvent(${e.id})">Delete</button>
        `;

        list.appendChild(div);
    });
}
// DELETE EVENT
async function deleteEvent(id) {
    await fetch(`/delete-event/${id}`, {
        method: 'DELETE'
    });

    loadEvents();
}

// SEARCH EVENT
async function searchEvent() {
    const text = document.getElementById("search").value.toLowerCase();

    const res = await fetch('/events');
    const data = await res.json();

    const filtered = data.filter(e =>
        e.title.toLowerCase().includes(text)
    );

    displayEvents(filtered);
}