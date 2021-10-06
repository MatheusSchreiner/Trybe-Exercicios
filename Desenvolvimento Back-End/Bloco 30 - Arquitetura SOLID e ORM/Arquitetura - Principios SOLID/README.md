## Descrição das Atividades
<br>

### Esse módulo, basicamente, controla um catálogo de plantas para um instituto de ciências. Esse código precisa ser adaptado para o padrão SOLID para transformá-lo em uma API, e é isso que você irá fazer.
* Foque em dois princípios: Single Responsibility e Dependency Inversion , esses são os mais importantes.
### Inicie um projeto Express :
~~~
npm init -y
npm i express
~~~

### 1. Crie um arquivo separado para as funções, um plants.js (elas virarão nossos controllers).
### 2. Remova as interações com localStorage e manipule apenas a variável defaultPlants .
### 3. Precisamos ter os endpoints:
* GET /plants : retorna todas as plantas;
* GET /plant/:id : retorna uma planta com o id;
* DELETE /plant/:id : deleta uma planta com o id;
* POST /plant/:id : sobrescreve a planta com id;
* POST /plant : cria uma planta nova;
* GET /sunny/:id : retorna uma planta que precisa de sol com o id.
