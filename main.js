let socket = io.connect('http://localhost:3000', {reconnection:false});
socket.on('news', (data) => {
  console.log('news',data);
  socket.emit('event',{my:'data'})
});