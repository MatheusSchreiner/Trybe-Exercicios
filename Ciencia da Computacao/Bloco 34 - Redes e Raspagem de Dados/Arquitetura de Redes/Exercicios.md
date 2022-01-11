### 1. 
~~~
// 1
curl localhost:3000
OU
curl -X GET localhost:3000


// 2
curl -X POST \
    -H 'Content-Type: application/json' \
    -d '{ "foo": "bar" }' \
    localhost:3000


// 3
curl --request POST \
    --header 'Content-Type: application/json' \
    --header 'Authorization: ApiKey EXAMPLE-TOKEN' \
    --data '{ "foo": "bar" }' \
    localhost:3000
~~~
<br>

### 2. 
~~~
// 1
curl google.com


// 2
url -L google.com
~~~
<br>

### 3. 
~~~
wget betrybe.com
~~~
<br>

### 4. 
~~~
from socketserver import TCPServer, StreamRequestHandler

ADDRESS = "", 8085


class EchoHandler(StreamRequestHandler):
    """Responde requisições repetindo o que foi recebido."""

    def handle(self):
        # Usar b'' é um jeito literal de escrever bytes em ascii
        self.wfile.write(b"Hello, World!\n")
        # self.wfile e self.rfile são canais de entrada e saída
        # programados para ter a mesma interface de arquivos!
        for line in self.rfile:
            # esta linha responde o cliente
            self.wfile.write(line)
            # esta linha imprime no console
            print(line.decode('ascii').strip())

if __name__ == "__main__":
    # usando with nosso TCPServer vai arrumar a casa direitinho quando encerrado
    with TCPServer(ADDRESS, EchoHandler) as server:
        server.serve_forever()
~~~
<br>

### 5. 
~~~
nc -t 127.0.0.1 8085
Ou
telnet 127.0.0.1 8085
~~~
<br>

### 6. 
~~~
curl localhost:8085

curl --request POST \
    --data "{ \"foo\": \"bar\" }" \
    --header 'Content-Type: application/json' \
    --header 'Foo-Bar-Header: foo-bar' \
    localhost:8085/foo-bar
~~~
<br>

### 7. 
~~~
from socketserver import UDPServer, DatagramRequestHandler

ADDRESS = "", 8084


class EchoHandler(DatagramRequestHandler):
    """Responde requisições repetindo o que foi recebido."""

    def handle(self):
        for line in self.rfile:
            self.wfile.write(line)
            print(line.decode("utf-8").strip())


if __name__ == "__main__":
    with UDPServer(ADDRESS, EchoHandler) as server:
        server.serve_forever()
~~~
<br>

### 8. 
~~~
nc -u 127.0.0.1 8084
~~~
<br>

### 9. 
~~~
curl localhost:8084
~~~
<br>

### 10. 
~~~
curl ifconfig.me

Para o interno, acesses as propriedades de rede através do seu sistema operacional ou busque o dado com o comando ip a (linux) ou ifconfig (mac)
~~~
<br>
