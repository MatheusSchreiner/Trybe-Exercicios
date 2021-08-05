Para conseguir rodar os testes utilize o npm para instalar o pacote Jest

npm init -y

Este comando irá te retornar um arquivo chamado package.json e dentro dele estará da seguinte forma:

~~~
{
  "name": "meuApp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
~~~

Agora você precisa editar este arquivo, substituindo "test": "echo \"Error: no test specified\" && exit 1" por "test": "jest" , da seguinte forma:

~~~
{
  "name": "meuApp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
 }
~~~

Ao fazer esta alteração quando você terminar de instalar o Jest, ele já irá colocar o comando "test" para rodar o pacote Jest
Agora termine de instalar o Jest com o comando

npm install --save-dev jest

Esse comando irá instalar tudo o que é necessário para o Jest , criando a pasta node_modules e o arquivo package-lock.json .
Explicando o que são esses dois:
node_modules é a pasta que guarda todos os arquivos baixados das dependências instaladas.
package-lock.json é um arquivo que “trava” as versões das dependências. Quando outra pessoa executar npm install ou npm i para baixar as dependências, este arquivo garante que serão instaladas as mesmas versões para todo mundo.

o comando --save-dev significa para salvar o jest como dependecia de desenvolvedor.

Para rodar os testes de cada código, abra o terminal dentro da pasta que contem os seus códigos e rode o comando no terminal "npm test" para rodar todos os testes ou "npm test nome_do_arquivo.test.js" para rodar o teste específico do arquivo que você queira

