var app = require('express');
var server = require('http').createServer();
var io = require('socket.io')(server);

io.on('connection', (socket)=> {
  socket.emit('news',{hello:'world'});
  socket.on('event',(data)=>{
    console.log('data',data);
  });
});

//listen to sub-url
var chat = io.of('/chat').on('connetcion',(socket)=>{
  socket.emit('news',{hello:'world'});//response to the request
  chat.emit('all',{hello:'everyone'});//send msg to all clients
  socket.on('event',(data)=>{
    console.log('data',data);
  });
})

server.listen(3000);