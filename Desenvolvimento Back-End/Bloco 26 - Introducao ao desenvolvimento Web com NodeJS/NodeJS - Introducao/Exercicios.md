### 1. 
~~~
npm init
// Pressionar enter até a pergunta author e digite seu nome neste campo.

// Crie um arquivo index.js e implemente esta função:

function calculaIMC() {
  const peso = 80;
  const altura = 170;
  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);
  console.log(`A pessoa pesa: ${peso}Kg e sua altura é: ${altura}cm`);
  console.log(`O seu IMC é: ${imc}`);
};
calculaIMC();
~~~
<br>

### 2. 
~~~
// Vá até o arquivo package.json e adcione o seguinte comando:
Copiar
{
  // ...
  "scripts": {
    // ...
    "imc": "node imc.js"
  }
  // ...
};

// Agora altere o nome do seu arquivo index.js para imc.js e rode o comando no terminal:
npm run imc
~~~
<br>

### 3. 
~~~
const readline = require('readline-sync');

function calculaIMC() {
  const peso = readline.questionInt('Qual o seu peso: ');
  const altura = readline.questionInt('Qual a sua altura em cm: ');
  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);

  console.log(`O seu IMC é: ${imc}`);
};

calculaIMC();
~~~
<br>

### 4. 
~~~
const readline = require('readline-sync');

function calculaIMC() {
  const peso = readline.questionFloat('Qual o seu peso: ');
  const altura = readline.questionInt('Qual a sua altura em cm: ');
  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);

  console.log(`O seu IMC é: ${imc}`);
};

calculaIMC();

~~~
<br>

### 5. 
~~~
const readline = require('readline-sync');

function calculaIMC() {
  const peso = readline.questionFloat('Qual o seu peso: ');
  const altura = readline.questionInt('Qual a sua altura em cm: ');
  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);

  console.log(`O seu IMC é: ${imc}`);

  if (imc < 18.5) {
    console.log('Situação: Abaixo do peso (magreza)');
    return;
  }
  if (imc >= 18.5 && imc < 25) {
    console.log('Situação: Peso normal');
    return;
  }
  if (imc >= 25 && imc < 30) {
    console.log('Situação: Acima do peso (sobrepeso)');
    return;
  }
  if (imc >= 30 && imc < 35) {
    console.log('Situação: Obesidade grau I');
    return;
  }
  if (imc >= 35 && imc < 40) {
    console.log('Situação: Obesidade grau II');
    return;
  }
  console.log('Situação: Obesidade graus III e IV');
};

calculaIMC();
~~~
<br>

### 6. 
~~~
const readline = require('readline-sync');

function calculaVelocidadeMed () {
  const distancia = readline.questionInt('Distância percorrida (m): ');
  const tempo = readline.questionInt('Tempo gasto (s): ');
  
  const velocidadeMedia = (distancia / tempo).toFixed(2);
  
  console.log(`Velocidade média: ${velocidadeMedia} m/s`);
}

calculaVelocidadeMed();

// Crie o script de chave velocidade com o conteúdo node velocidade.js no package.json e coloque o nome do seu arquivo como velocidade.js:
{
  // ...
  "scripts": {
    // ...
    "velocidade": "node velocidade.js"
  }
  // ...
}
~~~
<br>

### 7. 
~~~
{
  // ...
  "scripts": {
    // ...
    "sorteio": "node sorteio.js"
  }
  // ...
}

const readline = require('readline-sync');

// Criamos uma função para poder utilzar early return
function logResultado(numero, resposta) {
  // Aqui, utilizamos o return para interromper a execução da função
  // Esse é o padrão de código conhecido com early return, ou seja:
  // retornamos "mais cedo" pois uma determinada condição (no caso, a resposta estar certa)
  // não foi atingida.
  if (numero !== resposta) {
    return console.log(`Opa, não foi dessa vez. O número era ${numero}`);
  }

  // Como o if da linha acima tem um `return`, não precisamos do `else`, já que, se a execução
  // do código entrar no if, a linha abaixo não será executada
  return console.log('Parabéns, número correto!');
}

function runGame() {
  const numero = parseInt(Math.random() * 10);

  const resposta = readline.questionInt(
    'Digite um número entre 0 e 10 para saber se é o número que estou pensando: '
  );

  logResultado(numero, resposta);

  const novamente = readline.question(
    'Deseja jogar novamente? (Digite s para sim, e qualquer outra coisa para não) '
  );

  // Mais uma vez, utilizamos um return para interromper a execução do código mais cedo,
  // o que elimina a necessidade do else
  if (novamente !== 's') return console.log('OK, até a próxima!');

  // Chamamos a mesma função para executar novamente o jogo.
  // Uma função que chama a si mesma é chamada de função **recursiva**
  runGame();
}

// Executamos o jogo pela primeira vez
runGame();
~~~
<br>

### 8. 
~~~
{
  // ...
  "scripts": {
    // ...
    "start": "node index.js"
  }
  // ...
}

const readline = require('readline-sync');

// Criamos uma lista dos scripts disponíveis
// Utilizamos objetos com `name` e `script` para facilitar a criação da lista que será exibida
const scripts = [
  { name: 'Calcular IMC', script: './imc.js' },
  { name: 'Calcular velocidade média', script: './velocidade.js' },
  { name: 'Jogo de adivinhação', script: './sorteio.js' },
];

// Iteramos sobre os scripts para criar a lista numerada
let mensagem = scripts
  .map((script, index) => `${index + 1} - ${script.name}`);
 
// Adicionamos uma linha a mais no começo da mensagem
mensagem.unshift('Escolha um número para executar o script correspondente');

// Juntamos todos os elementos em uma string, separando-os por uma quebra de linha
mensagem = mensagem.join('\n');

const scriptNumber = readline.questionInt(mensagem) - 1;

const script = scripts[scriptNumber];

if (!script) return console.log('Número inválido. Saindo');

// Chamamos o script selecionado
// Note que, no dia a dia, é mais comum utilizarmos outras formas de executar arquivos externos
// No entanto, para fins didáticos, o `require` nos atende por enquanto.
require(script.script);
~~~
<br>

### 9. 
~~~
{
  // ...
  "scripts": {
    // ...
    "fatorial": "node fatorial.js"
  }
  // ...
}


const readline = require('readline-sync');

function realizaFatoracao(x) {
  // Se x for 0 ou 1
  return [0, 1].includes(x)
    // Retornamos 1
    ? 1
    // Caso contrário, continuamos o cálculo do fatorial multiplicando x pelo fatorial de x - 1
    : x * realizaFatoracao(x - 1); // Uma função que chama a si mesma é chamada de função **recursiva**
}

function realizaCalculo() {
  const x = readline.questionInt('Informe o valor de x: ');

  if (x <= 0) {
    console.log('Digite um número maior que 0!')
    return;
  }

  console.log(`x: ${x}`);

  const resultado = realizaFatoracao(x);

  console.log(`Resultado: ${resultado}`);
}

realizaCalculo();

// ...
// const scripts = [
//   { name: 'Calcular IMC', script: './imc.js' },
//   { name: 'Calcular velocidade média', script: './velocidade.js' },
//   { name: 'Jogo de adivinhação', script: './sorteio.js' },
     { name: 'Calcular fatorial', script: './fatorial.js' },
// ];
// ...
~~~
<br>

### 10. 
~~~
{
  // ...
  "scripts": {
    // ...
    "fibonacci": "node fibonacci.js"
  }
  // ...
}

const readline = require('readline-sync');

function calculaElemento (n) {
  // a armazena o último número que calculamos
  let a = 1;
  // b armazena o penúltimo número que calculamos
  let b = 1;

  // Repetimos o loop enquanto `n` for maior que 0
  for (; n >= 0; n--) {
    if (b) console.log(b);
    // Armazenamos o último valor calculado em uma variável temporária
    const temp = a;
    // Para calcular o novo valor, somamos o último valor com o penúltimo valor
    // O novo valor é armazenado em `a`, já que ele passa a ser o último valor calculado
    a = a + b;
    // O valor antigo de `a`, que estava armazenado na variável temporária
    // agora se torna o penúltimo número e, por isso, é armazenado em `b`
    b = temp;
  }

  console.log(b);
  return b;
}

function realizaCalculo() {
  const n = readline.questionInt('Digite o valor de n: ');

  if (n <= 0) {
    console.log('Digite um número maior que 0!')
    return;
  }

  console.log(`n: ${n}`);

  calculaElemento(n - 2);
}

realizaCalculo();

// ...
// const scripts = [
//   { name: 'Calcular IMC', script: './imc.js' },
//   { name: 'Calcular velocidade média', script: './velocidade.js' },
//   { name: 'Jogo de adivinhação', script: './sorteio.js' },
//   { name: 'Calcular fatorial', script: './fatorial.js' },
     { name: 'Exibir n números de fibonacci', script: './fibonacci.js' },
// ];
// ...
~~~
<br>
