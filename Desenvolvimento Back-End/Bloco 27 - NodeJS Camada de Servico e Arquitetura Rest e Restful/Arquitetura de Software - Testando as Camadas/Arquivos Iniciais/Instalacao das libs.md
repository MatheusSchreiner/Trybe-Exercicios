<p>
Primeiro, crie um novo diretório para o projeto.
Inicie o projeto com o npm :
</p>

~~~
npm init -y
~~~

<p>
Instale os pacotes utilizados:
</p>

~~~
npm install body-parser express mongodb
~~~

<p>
Instale também os pacotes de desenvolvimento:
</p>

~~~
npm install -D mocha chai sinon mongodb-memory-server@6
~~~

<p>
Adicione o script para rodar os testes no package.json , dentro de "scripts" :

Para esse dia, vamos utilizar um pequeno artifício com o intúito de facilitar a execução de testes específicos. Nesse caso, utilizaremos o comando mocha ./tests/**/*$NAME*.test.js :

O --exit força o encerramento do processo do mocha ao final dos testes

Dessa forma, podemos executar o comando npm test para validar todos os nossos testes, ou, utilizar uma variável de ambiente NAME para definir um arquivo específico: NAME=nomeDoArquivo npm test .
</p>

~~~
"test": "mocha ./tests/**/*$NAME*.test.js --exit"
~~~

<p>
Iremos criar a seguinte estrutura de arquivos e diretórios:
</p>

~~~
└── controllers
│   └── movieController.js
└── models
│   └── connection.js
│   └── movieModel.js
└── services
│   └── movieService.js
└── tests
│   ├── controllers
│   │   └── movieControllerCreate.test.js
│   │   └── movieControllerGetAll.test.js
│   │   └── movieControllerGetById.test.js
│   └── models
│   │   └── movieModelCreate.test.js
│   │   └── movieModelGetAll.test.js
│   │   └── movieModelGetById.test.js
│   ├── services
│   │   └── movieServiceCreate.test.js
│   │   └── movieServiceGetAll.test.js
│   │   └── movieServiceGetById.test.js
└── index.js
~~~

