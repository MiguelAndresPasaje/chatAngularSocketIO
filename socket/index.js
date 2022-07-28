const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
    cors: {
        origin: true,
        credentials: true,
        methods: ["GET", "POST"]
    }
});

io.on('connection',(socket)=>{
    console.log('new user connected');
    
    socket.on("sendMessage", (messageInfo)=>{
        //console.log("test evento TEST :->" + text);
        //console.log("Enviando mensaje" + messageInfo.text)
        socket.broadcast.emit("receiveMessage",messageInfo);
    });
});




app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});