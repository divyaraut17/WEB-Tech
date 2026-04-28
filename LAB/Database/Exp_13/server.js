const WebSocket = require('ws');

// Create WebSocket server on port 8080
const wss = new WebSocket.Server({ port: 8080 });

console.log("WebSocket Server running on ws://localhost:8080");

wss.on('connection', function connection(ws) {
    console.log("New client connected!");

    ws.send("Connected to WebSocket Server");

    // Receive messages from client
    ws.on('message', function incoming(message) {
        console.log("Received: " + message);

        // Broadcast message to all clients
        wss.clients.forEach(function(client){
            if(client.readyState === WebSocket.OPEN){
                client.send(message.toString());
            }
        });
    });

    ws.on('close', function(){
        console.log("Client disconnected");
    });
});