const net = require("net");

const hostname = "localhost";
const port = 3000;

const socket = net.connect(port, hostname, () => {
    console.log("Connected to server.");
    // Once connected, write data to the server
    socket.write("world");
});

// Event handler for receiving data from the server
socket.on("data", (data) => {
    console.log(data.toString());
});

// Event handler for the connection ending
socket.on("end", () => {
    console.log("Connection closed by the server.");
});
