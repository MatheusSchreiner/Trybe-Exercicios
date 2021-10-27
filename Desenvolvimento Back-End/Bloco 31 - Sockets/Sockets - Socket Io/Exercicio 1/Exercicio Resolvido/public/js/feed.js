const socket = window.io();

const likes = document.querySelector('#likeIcon');
const likesPost = document.querySelector('#currentLikes');
const stars = document.querySelector('#starIcon');
const starsPost = document.querySelector('#currentStars');

likes.addEventListener('click', () => {
  socket.emit('likes');
});

socket.on('updateLikes', (currentLikes) => {
  likesPost.innerHTML = currentLikes;
})

stars.addEventListener('click', () => {
  let currentStars = parseInt(starsPost.innerHTML);
  starsPost.innerHTML = currentStars + 1;

  socket.emit('stars');
});

socket.on('updateStars', (countStars) => {
  starsPost.innerHTML = countStars;
});