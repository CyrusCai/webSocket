* Training on Oct.24

** Why we use WebSocket
If we use common http request, we can only send msg to server and wait for response. But with the help of websocket, the server can send to clients directly.

** Grammar

*** of
io.of('/sub path').connection
listen to sub path request

*** join
socket.join()
socket.in('room1').emit('');

set a series of client to a group, for broadcast

*** broadcast
io.broadcast.emit(''); //broadcast to all clients
socket.broadcast.emit('') //broadcast to all clients expect for the requester

broadcast to clients

