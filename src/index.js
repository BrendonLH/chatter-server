const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const { Server } = require('socket.io');
const io = new Server(server)
const dotenv = require('dotenv');

const port = process.env.PORT || 3000;


app.get('/', (request, response) => {
    response.send('Server is up!');
})

io.on('connection', (socket) => {
    console.log(`${socket} connected!`);
})

app.listen(port, () => {
    console.log(`server is up and running on ${port}`);
})