import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

const broadcastMessage = (message, callback) => {
  socket.on('sendMessage', message => {
    // this.setState({ messages: message })
    console.log(this);
  });
  socket.emit('sendMessage', message);
};

export { broadcastMessage };