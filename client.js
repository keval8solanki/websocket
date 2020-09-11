const socket = io('http://localhost:4000')
socket.on('message', data => console.log(data))
