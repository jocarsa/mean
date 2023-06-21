const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);



app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('movimiento', (msg) => {
    console.log('Received message:', msg);
      jugadores.push( {"nombre":msg.nombre,"posx":msg.posx,"posy":msg.posy})
    io.emit('movimiento', jugadores); // Broadcast the message to all connected clients
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
    jugadores = []
});
