const net = require("net");

const hostname = "localhost";
const port = 3000;

const server = net.createServer((socket) => {
    console.log("Client connected.");

    // Event handler for receiving data from the client
    socket.on("data", (data) => {
        const name = data.toString().trim(); // Convert the received data to a string and remove whitespace
        socket.write(`Hello ${name}!\n`); // Send a response back to the client
    });

    // Event handler for the client disconnecting
    socket.on("end", () => {
        console.log("Client disconnected.");
    });
});

// Start the server and listen on the specified port and hostname
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
