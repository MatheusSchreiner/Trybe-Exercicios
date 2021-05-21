## Descrição das Atividades

### 1.1. Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
#### 1.1.1. Modifique a estrutura da função para que ela seja uma arrow function .
#### 1.1.2. Modifique as concatenações para template literals .
#### 1.1.3. Copie o código abaixo.

~~~ Script
function testingScope(escopo) { 
        if (escopo === true) { 
          var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
          ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
          console.log(ifScope);
        } else {
          var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
          console.log(elseScope);
        }
        console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
      }

      testingScope(true);
~~~

### 1.2. Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
#### 1.2.1. Utilize template literals para que a chamada console.log(oddsAndEvens); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
#### 1.2.2. Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
#### 1.2.3. Copie o código abaixo.

~~~
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

      // Seu código aqui.

      console.log(oddsAndEvens);
~~~
