## Descrição das Atividades
<br>

### 1. Como vocês viram nos exemplos acima, a conexão nunca fica ligada por muito tempo, pois assim que recebemos e respondemos, a conexão é desligada. Por esse motivo, experimentem remover a resposta do servidor e veja quanto tempo a conexão fica ligada!
### 2. Através do método server.getConnections((err, count) => {}) , imprima quantas conexões estão de pé.
* Observação : Abra um terminal para o server e dois ou três para os clientes. Para cada cliente conectado, deverá ser impresso no server a quantidade de clientes conectados. Conecte todos os clientes e depois vá desconectando e conectando-os para você ver, na prática, como são feitas as conexões abertas que citamos no material.
### 3. Envie uma mensagem do cliente para o servidor.
