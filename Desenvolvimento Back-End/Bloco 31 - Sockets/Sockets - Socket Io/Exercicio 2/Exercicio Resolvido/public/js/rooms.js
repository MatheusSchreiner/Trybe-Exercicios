const socket = window.io();

// Esta lib esta pegando a minha URL e estou desestruturando para pegar os valores de username e room
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true});

// Apenas pra confirmar se pegou certo
console.log(username, room);

// Agora estou enviando para o meu servidor o nome e a sala para ele criar uma conexão e uma sala
socket.emit('joinRoom', { username, room });


// Esta função irá servir para todas as outras funções de emitir e ouvir do meu servidor e cliente, pq esta função apenas cria as mensagens, tanto para quem entrou, quanto mensagem enviada e recebida, ou seja, estamos utilizando o conceito SOLID aqui.
const createMessage = (message) => {
  const messagesUl = document.querySelector('#messages');
  const li = document.createElement('li');
  li.innerText = message;
  messagesUl.appendChild(li);
}


// Aqui estou ouvindo do servidor e criando uma mensagem com a função createMessage com a mensagem recebida do servidor
socket.on('serverMessage', (message) => createMessage(message));

// Apenas pegando o form e o botão input la do meu front-end
const form = document.querySelector('form');
const inputMessage = document.querySelector('#messageInput');


// Note que temos um e.preventDefault, pq como estamos utilzando um form e ao clicar no botão ele entende que é um submit e assim ele iria fazer uma requisição e reiniciar a pagina, logo com o prevetDefault ele não irá fazer nada disso e dessa forma iremos conseguir utilizar o botão apenas para enviar a mensagem para o nosso servidor e ele repassar para os outros clients.
form.addEventListener('submit', (e) =>{
  e.preventDefault();
  const message = inputMessage.value;
  socket.emit('roomClientMessage', { room, message });
  inputMessage.value = '';
  return false;
});
