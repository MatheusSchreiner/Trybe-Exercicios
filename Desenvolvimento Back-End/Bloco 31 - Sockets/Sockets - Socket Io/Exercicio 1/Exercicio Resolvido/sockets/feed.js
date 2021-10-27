module.exports = (io) => io.on('connection', (socket) => {
  let currentLikes = 0;
  let currentStars = 0;

  socket.on('likes', () => {
    currentLikes++;

    io.emit('updateLikes', currentLikes);
  });

  socket.on('stars', () => {
    currentStars++;

    socket.broadcast.emit('updateStars', currentStars);
  });
});
