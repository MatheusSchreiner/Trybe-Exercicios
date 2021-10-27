const express = require('express');
const app = express();
const http = require('http').createServer(app);

const PORT = 3000;

const io = require('socket.io')(http, {
  cors: {
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST'],
  },
});

app.use(express.static(__dirname + '/public'));

require('./sockets/feed')(io);

app.get('/', (_req, res) => {
  return res.sendFile(__dirname + '/public/feed.html');
})


http.listen(PORT, () => console.log(`Online na porta ${PORT}`));
