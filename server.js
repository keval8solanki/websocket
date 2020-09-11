const PORT = process.env.PORT || 4000

const io = require('socket.io')(PORT)

io.on('connection', (socket) => {
	console.log('*** (New Client Connected) ***')
	socket.emit('message', 'Welcome User!')

	socket.on('disconnect', () => console.log('*** (Client Disconnected) ***'))
})

console.log(`Server is Running on ${PORT}`)
