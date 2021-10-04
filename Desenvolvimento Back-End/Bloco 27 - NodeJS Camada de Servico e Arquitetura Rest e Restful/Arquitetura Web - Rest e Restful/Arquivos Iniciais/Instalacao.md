~~~
npm init -y

npm install mysql2 nodemon body-parser express
~~~

Adicione a linha abaixo no seu package.json, no objeto "scripts" para rodar o nodemon com o comando npm run debug :
~~~
"debug": "nodemon index.js"
~~~
