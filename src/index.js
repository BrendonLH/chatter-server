const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const port = process.env.PORT||3000;
const io = new Server(server, {
    cors:{
        origin: ['http://localhost:8080'],
    },
});

app.get('/', (request, response) => {
    response.send('<h1>Chatter Server Page</h1>')
})

io.on("connection", (socket) => {
  console.log(`socket ${socket.id} Connected!`);
  socket.emit('connected', "you are connected!")
});



server.listen(port, () => {
    console.log(`server is up on ${port}`)
});