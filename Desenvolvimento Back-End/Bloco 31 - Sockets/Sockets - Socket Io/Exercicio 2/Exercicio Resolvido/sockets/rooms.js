module.exports = (io) => io.on('connection', (socket) => {
  // Aqui o servidor ira receber o usuário e a sala vindo do front-end
  socket.on('joinRoom', ({ username, room }) => {
    // Esta função é do proprio socket e ela cria uma sala reservada para criar uma conexão apenas com as pessoas da propria sala.
    socket.join(room);

    // Após criar uma conexão apenas para as pessoas da propria sala, ele emit para o front-ent uma mensagem dizendo bem-vindo ao client que acabou de se conectar
    socket.emit('serverMessage', `Bem vindo ${username} a sala sobre ${room}`);

    // E aqui ele emite uma mensagem ao front-end a todos os outros integrantes que já estavam conectados a sala dizendo que outro cliente acabou de entrar na sala
    socket.broadcast.to(room).emit('serverMessage', `${username} acabou de entrar na sala`);


    // Aqui é onde o servidor recebe as mensagens de um client e repassa para todos os outros client da sala.
    socket.on('roomClientMessage', ({ message, room}) => {
      io
        .to(room)
        .emit('serverMessage', `${username}: ${message}`)
    });
  });
});
