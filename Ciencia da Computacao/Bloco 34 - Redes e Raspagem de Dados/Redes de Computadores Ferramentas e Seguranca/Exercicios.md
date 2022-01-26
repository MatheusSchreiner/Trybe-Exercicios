### 1. 
~~~
 iptables -A INPUT -p icmp -j REJECT
~~~
<br>

### 2. 
~~~
 iptables -D INPUT -p icmp -j REJECT
~~~
<br>

### 3. 
~~~
 iptables -A OUTPUT -p tcp --sport 443 -j REJECT
~~~
<br>

### 4. 
~~~
 iptables -A OUTPUT -p tcp --sport 80 -j REJECT
~~~
<br>

### 5. 
~~~
 iptables --flush
~~~
<br>

### 6. 
~~~
 mkdir diretorio && cd diretorio
 python3 -m http.server 80

unzip /path/to/ngrok.zip

 ./ngrok http 80

 ./ngrok http 80
~~~
<br>

### 7. 
~~~
 apt-get update && apt-get install python3 openssl


 openssl -v


 openssl genrsa -out key.pem
 openssl req -new -key key.pem -out csr.pem
 openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
 rm csr.pem


 mkdir /some-dir/https-server
 mv key.pem /some-dir/https-server
 mv cert.pem /some-dir/https-server
 cd /some-dir/https-server


// https.py
import ssl
from http.server import HTTPServer, SimpleHTTPRequestHandler

ssl_context = ssl.SSLContext()
ssl_context.load_cert_chain("cert.pem", keyfile="key.pem")

server_address = ("0.0.0.0", 8000)
httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
httpd.socket = ssl_context.wrap_socket(httpd.socket, server_side=True)

httpd.serve_forever()


 curl https://localhost:8000


 curl --insecure https://localhost:8000
~~~
